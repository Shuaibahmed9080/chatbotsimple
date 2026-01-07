/* ==================================================
   ADMIN PANEL – HR CHATBOT
================================================== */

/* ===============================
   LOGIN & SESSION
================================ */

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Demo login (frontend only)
  if (username === "admin" && password === "admin123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "flex";
    loadAllData();
  } else {
    alert("❌ Invalid credentials");
  }
}

function logout() {
  location.reload();
}

/* ===============================
   SECTION NAVIGATION
================================ */

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

/* ===============================
   ADD CATEGORY
================================ */

async function addCategory() {
  const name = document.getElementById("categoryName").value.trim();
  if (!name) return alert("⚠ Enter category name");

  try {
    const res = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    alert(data.message || "Category added");

    document.getElementById("categoryName").value = "";
    loadAllData();
  } catch {
    alert("❌ Failed to add category");
  }
}

/* ===============================
   ADD QUESTION & ANSWER
================================ */

async function addQA() {
  const categoryId = document.getElementById("qaCategory").value.trim();
  const question = document.getElementById("qaQuestion").value.trim();
  const answer = document.getElementById("qaAnswer").value.trim();

  if (!categoryId || !question || !answer) {
    return alert("⚠ Fill all fields");
  }

  try {
    const res = await fetch("/api/question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryId, question, answer })
    });

    const data = await res.json();
    alert(data.message || "Question added");

    document.getElementById("qaCategory").value = "";
    document.getElementById("qaQuestion").value = "";
    document.getElementById("qaAnswer").value = "";

    loadAllData();
  } catch {
    alert("❌ Failed to add question");
  }
}

/* ===============================
   LOAD & RENDER DATA
================================ */

async function loadAllData() {
  const res = await fetch("/api/chatbot");
  const data = await res.json();
  renderData(data.categories || []);
}

function renderData(categories) {
  const container = document.getElementById("dataContainer");
  if (!container) return;

  container.innerHTML = "";

  categories.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "data-card";

    catDiv.innerHTML = `
      <h4>
        ${cat.name}
        <small>(${cat.id})</small>
        <button onclick="editCategory('${cat.id}', '${cat.name}')">✏️ Edit</button>
        <button onclick="deleteCategory('${cat.id}')">🗑 Delete</button>
      </h4>
    `;

    if (cat.questions.length === 0) {
      catDiv.innerHTML += "<p>No questions added.</p>";
    }

    cat.questions.forEach(q => {
      const qDiv = document.createElement("div");
      qDiv.className = "qa-item";

      qDiv.innerHTML = `
        <p><strong>Q:</strong> ${q.question}</p>
        <p><strong>A:</strong> ${q.answer}</p>

        <button onclick="editQuestion(
          '${cat.id}',
          '${q.id}',
          \`${q.question}\`,
          \`${q.answer}\`
        )">✏️ Edit</button>

        <button onclick="deleteQuestion('${cat.id}', '${q.id}')">
          ❌ Delete
        </button>
      `;

      catDiv.appendChild(qDiv);
    });

    container.appendChild(catDiv);
  });
}

/* ===============================
   DELETE CATEGORY
================================ */

async function deleteCategory(categoryId) {
  if (!confirm("Delete this category?")) return;

  const res = await fetch(`/api/category/${categoryId}`, {
    method: "DELETE"
  });

  const data = await res.json();
  alert(data.message);
  loadAllData();
}

/* ===============================
   DELETE QUESTION
================================ */

async function deleteQuestion(categoryId, questionId) {
  if (!confirm("Delete this question?")) return;

  const res = await fetch(
    `/api/question/${categoryId}/${questionId}`,
    { method: "DELETE" }
  );

  const data = await res.json();
  alert(data.message);
  loadAllData();
}

/* ===============================
   EDIT CATEGORY
================================ */

async function editCategory(categoryId, oldName) {
  const newName = prompt("Edit category name:", oldName);
  if (!newName) return;

  const res = await fetch(`/api/category/${categoryId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName })
  });

  const data = await res.json();
  alert(data.message);
  loadAllData();
}

/* ===============================
   EDIT QUESTION & ANSWER
================================ */

async function editQuestion(categoryId, questionId, oldQ, oldA) {
  const newQuestion = prompt("Edit question:", oldQ);
  if (!newQuestion) return;

  const newAnswer = prompt("Edit answer:", oldA);
  if (!newAnswer) return;

  const res = await fetch(
    `/api/question/${categoryId}/${questionId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: newQuestion,
        answer: newAnswer
      })
    }
  );

  const data = await res.json();
  alert(data.message);
  loadAllData();
}
