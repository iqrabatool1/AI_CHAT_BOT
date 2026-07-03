'use client';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  // 1. Add state to store the chat history
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 2. Add user message to the list immediately
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      // 3. Call the backend
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      
      // 4. Add AI response to the list
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#0A0A0A] text-white">
      
      {/* Messages Display Area */}
      <div className="w-full max-w-2xl mt-10 mb-20 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`p-4 rounded-xl ${m.role === 'user' ? 'bg-[#1C1C1C] ml-auto max-w-[80%]' : 'bg-transparent'}`}>
            <p className="text-sm opacity-60 mb-1">{m.role === 'user' ? 'You' : 'AI'}</p>
            <p>{m.content}</p>
          </div>
        ))}
      </div>

      {/* Input area fixed at bottom */}
      <div className="fixed bottom-6 w-full max-w-2xl bg-[#121212] border border-[#262626] rounded-2xl p-2 flex items-center shadow-2xl">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask anything..." 
          className="bg-transparent border-none text-white w-full p-3 outline-none text-lg"
        />
        <button onClick={sendMessage} className="rounded-full bg-white text-black p-2 mx-2 hover:bg-slate-200">
          ↑
        </button>
      </div>
    </div>
  );
}