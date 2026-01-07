/* ===============================
   DOM ELEMENTS & GLOBALS
   =============================== */
const chat = document.getElementById("chatArea");
const input = document.getElementById("userInput");

let humanChatEnabled = false;
let chatbotData = [];

const WHATSAPP_NUMBER = "917667949911";

/* ===============================
   UI HELPERS
   =============================== */
function botMsg(text) {
  const div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function userMsg(text) {
  const div = document.createElement("div");
  div.className = "user";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showOptions(buttons) {
  const wrap = document.createElement("div");
  wrap.className = "options";

  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.innerText = btn.label;
    b.onclick = btn.action;
    wrap.appendChild(b);
  });

  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
}

/* ===============================
   LOADER
   =============================== */
function withLoading(callback) {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerText = "Loading...";
  chat.appendChild(loader);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    loader.remove();
    callback();
  }, 1200);
}

/* ===============================
   LOAD DATA FROM BACKEND
   =============================== */
async function loadChatbotData() {
  try {
    const res = await fetch("/api/chatbot");
    const data = await res.json();
    chatbotData = data.categories || [];
    showCategories();
  } catch (err) {
    botMsg("⚠ Unable to load chatbot data");
    console.error(err);
  }
}

/* ===============================
   CATEGORY → QUESTION → ANSWER
   =============================== */
function showCategories() {
  chat.innerHTML = "";
  humanChatEnabled = false;

  botMsg("Please select a category");

  chatbotData.forEach(category => {
    showOptions([
      {
        label: category.name,
        action: () => showQuestions(category)
      }
    ]);
  });

  showOptions([{ label: "Human Chat", action: enableHumanChat }]);
}

function showQuestions(category) {
  userMsg(category.name);

  withLoading(() => {
    if (!category.questions || category.questions.length === 0) {
      botMsg("No questions available for this category.");
      showOptions([{ label: "⬅ Back", action: showCategories }]);
      return;
    }

    botMsg("Select a question");

    category.questions.forEach(q => {
      showOptions([
        {
          label: q.question,
          action: () => showAnswer(q)
        }
      ]);
    });

    showOptions([{ label: "⬅ Back", action: showCategories }]);
  });
}

function showAnswer(q) {
  userMsg(q.question);

  withLoading(() => {
    botMsg(q.answer);
    showOptions([{ label: "⬅ Back to Categories", action: showCategories }]);
  });
}

/* ===============================
   HUMAN CHAT (WHATSAPP)
   =============================== */
function enableHumanChat() {
  userMsg("Human Chat");

  withLoading(() => {
    humanChatEnabled = true;
    botMsg(
      "You are now connected to human support.<br>Type your message and it will be sent to WhatsApp."
    );
  });
}

function redirectToWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  botMsg("Sending your message to human support…");

  setTimeout(() => {
    window.open(url, "_blank");
  }, 800);
}

/* ===============================
   TEXT INPUT
   =============================== */
function handleInput() {
  const text = input.value.trim();
  if (!text) return;

  userMsg(text);
  input.value = "";

  withLoading(() => {
    if (humanChatEnabled) {
      redirectToWhatsApp(text);
    } else {
      botMsg("Please select an option from the menu.");
    }
  });
}

/* ===============================
   INITIAL LOAD
   =============================== */
botMsg("Welcome to HR Support Chatbot");
loadChatbotData();
