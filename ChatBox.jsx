import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Call your backend API
      const res = await fetch("https://mavericks-api-g8px.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiText = data?.response || "No response from AI.";
      setMessages((prev) => [...prev, { sender: "ai", text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error contacting AI server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === "user" ? "chat-msg user" : "chat-msg ai"}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-msg ai">Typing...</div>}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
