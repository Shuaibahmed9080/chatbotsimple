import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

/* ===============================
   PATH + PORT SETUP
================================ */
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "data", "chatbot-data.json");

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

// ✅ Serve HR Chat UI
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve Admin Panel
app.use("/admin", express.static(path.join(__dirname, "admin")));

/* ===============================
   HELPER FUNCTIONS
================================ */
function readData() {
  if (!fs.existsSync(DATA_PATH)) {
    return { categories: [] };
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

/* ===============================
   API ROUTES
================================ */

// GET chatbot data
app.get("/api/chatbot", (req, res) => {
  res.json(readData());
});

// ADD category
app.post("/api/category", (req, res) => {
  const { name } = req.body;
  const data = readData();

  data.categories.push({
    id: Date.now().toString(),
    name,
    questions: []
  });

  writeData(data);
  res.json({ message: "Category added successfully" });
});

// UPDATE category
app.put("/api/category/:id", (req, res) => {
  const { name } = req.body;
  const data = readData();

  const category = data.categories.find(c => c.id === req.params.id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  category.name = name;
  writeData(data);
  res.json({ message: "Category updated successfully" });
});

// DELETE category
app.delete("/api/category/:id", (req, res) => {
  const data = readData();
  data.categories = data.categories.filter(c => c.id !== req.params.id);

  writeData(data);
  res.json({ message: "Category deleted successfully" });
});

// ADD question (by category name)
app.post("/api/question", (req, res) => {
  const { categoryId, question, answer } = req.body;
  const data = readData();

  const category = data.categories.find(
    c => c.name.toLowerCase() === categoryId.toLowerCase()
  );

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  category.questions.push({
    id: Date.now().toString(),
    question,
    answer
  });

  writeData(data);
  res.json({ message: "Question added successfully" });
});

// UPDATE question
app.put("/api/question/:categoryId/:questionId", (req, res) => {
  const { question, answer } = req.body;
  const data = readData();

  const category = data.categories.find(c => c.id === req.params.categoryId);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  const q = category.questions.find(q => q.id === req.params.questionId);
  if (!q) {
    return res.status(404).json({ message: "Question not found" });
  }

  q.question = question;
  q.answer = answer;

  writeData(data);
  res.json({ message: "Question updated successfully" });
});

// DELETE question
app.delete("/api/question/:categoryId/:questionId", (req, res) => {
  const data = readData();

  const category = data.categories.find(c => c.id === req.params.categoryId);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  category.questions = category.questions.filter(
    q => q.id !== req.params.questionId
  );

  writeData(data);
  res.json({ message: "Question deleted successfully" });
});

/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Chatbot UI: http://localhost:${PORT}`);
  console.log(`✅ Admin Panel: http://localhost:${PORT}/admin/admin.html`);
});

