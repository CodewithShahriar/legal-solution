document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    appointmentForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Get input values (for further processing if needed)
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
  
      // Clear the form and display confirmation message
      appointmentForm.style.display = 'none';
      confirmationMessage.style.display = 'block';
    });
  });
  


  function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    const chatbotToggleButton = document.getElementById("chatbot-toggle-btn");

    // Toggle the display of the chatbot
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
        chatbot.style.display = "flex";
        chatbotToggleButton.innerHTML = ""; // Remove the text
        chatbotToggleButton.innerHTML = ""; // You can add an icon here, like a speech bubble or anything else.
    } else {
        chatbot.style.display = "none";
        chatbotToggleButton.innerHTML = ""; // Remove the text again when closing
        chatbotToggleButton.innerHTML = "💬"; // Text for button to open chatbot
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        const messagesContainer = document.getElementById("chatbot-messages");
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.textContent = userInput;
        messagesContainer.appendChild(userMessage);
        
        // Simulate bot response after user sends a custom message
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            botMessage.textContent = "Thank you for reaching out. How can I assist you further?";
            messagesContainer.appendChild(botMessage);
        }, 1000);
        
        // Clear input field
        document.getElementById("user-input").value = "";
    }
}

// Show the chatbot when page loads (optional)
window.onload = function() {
    document.getElementById("chatbot").style.display = "none"; // Start with chatbot hidden
}




// our lawyers
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";
  
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
  
        const increment = target / 200;
  
        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
  
      updateCounter();
    });
  });
  