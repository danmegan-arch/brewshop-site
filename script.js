// Show current year in footer automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Simple BrewBot chatbot
function sendMessage() {
  const chatInput = document.getElementById("chatInput");
  const chatLog = document.getElementById("chatLog");
  const userMsg = chatInput.value.trim();

  if (!userMsg) return;

  // Display user message
  chatLog.innerHTML += `<p><strong>You:</strong> ${userMsg}</p>`;

  // Default reply
  let botReply = "Thanks for asking! One of our baristas will be happy to help.";
  const lower = userMsg.toLowerCase();

  // BrewBot responses
  if (lower.includes("open") || lower.includes("hours")) {
    botReply = "We're open Monday–Friday 7:30–5pm, Saturday–Sunday 8:30–4pm!";
  } else if (lower.includes("wifi")) {
    botReply = "Yes, free Wi-Fi is available — ask at the counter for the password.";
  } else if (lower.includes("vegan")) {
    botReply = "We offer oat, almond, and soy milk at no extra cost. Vegan pastries are marked ✓.";
  } else if (lower.includes("location") || lower.includes("where")) {
    botReply = "You'll find us at 12 Market Street, Dublin — right beside the bookstore.";
  } else if (lower.includes("top 5") || lower.includes("favourite") || lower.includes("popular")) {
    botReply = "Our top 5 coffee picks in Dublin: Flat White, Latte, Cappuccino, Americano, and Espresso.";
  } else if (lower.includes("parking")) {
    botReply = "Street parking is available nearby and we have bike racks outside.";
  }

  // Display BrewBot reply
  chatLog.innerHTML += `<p><strong>BrewBot:</strong> ${botReply}</p>`;
  chatInput.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}
