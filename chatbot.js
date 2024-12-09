// Chatbot Logic
const chatbot = document.getElementById("chatbot");
const openChatbotBtn = document.getElementById("open-chatbot");
const closeChatbotBtn = document.getElementById("close-chatbot");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

// Predefined responses
const responses = {
  hello: "Hi there! How can I help you?",
  services: "We provide legal consultation, business law advice, and much more.",
  appointment: "You can book an appointment through the 'Make an Appointment' button.",
  default: "I'm sorry, I didn't understand that. Could you rephrase?",
};

// Toggle chatbot visibility
openChatbotBtn.addEventListener("click", () => {
  chatbot.style.display = "block";
  openChatbotBtn.style.display = "none";
});

closeChatbotBtn.addEventListener("click", () => {
  chatbot.style.display = "none";
  openChatbotBtn.style.display = "block";
});

// Send message
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Add user's message
  addMessage("user", userMessage);

  // Generate chatbot's response
  const response = responses[userMessage.toLowerCase()] || responses.default;
  setTimeout(() => addMessage("bot", response), 500);

  userInput.value = "";
});

// Add message to chat window
function addMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}
