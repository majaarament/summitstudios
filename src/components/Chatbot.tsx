"use client";

import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotProps {
  // Add any props your Chatbot component needs
}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function sendMessage() {
    if (!input.trim()) return;
    setError(null);
    setLoading(true);

    setMessages((msgs) => [...msgs, { sender: 'user', text: input }]);

    try {
      const response = await fetch('https://your-n8n-domain/webhook/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      setMessages((msgs) => [...msgs, { sender: 'bot', text: data.reply || 'No response from bot.' }]);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }

    setLoading(false);
    setInput('');
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, maxWidth: 400, margin: 'auto' }}>
      <h2>Chatbot</h2>
      <div style={{ minHeight: 240, overflowY: 'auto', marginBottom: 12, padding: 8, backgroundColor: '#f9f9f9' }}>
        {messages.length === 0 && <p style={{ color: '#777' }}>Start chatting with the bot...</p>}
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '6px 0' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                backgroundColor: msg.sender === 'user' ? '#0b93f6' : '#e5e5ea',
                color: msg.sender === 'user' ? '#fff' : '#000',
                borderRadius: 20,
                maxWidth: '80%',
                wordBreak: 'break-word',
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}

      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        disabled={loading}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ width: 'calc(100% - 60px)', padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc' }}
      />
      <button
        onClick={sendMessage}
        disabled={loading}
        style={{
          width: 50,
          marginLeft: 8,
          backgroundColor: '#0b93f6',
          border: 'none',
          color: '#fff',
          borderRadius: 4,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
