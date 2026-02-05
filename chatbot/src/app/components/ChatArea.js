'use client';
import { useState, useRef, useEffect } from 'react';
import { Paperclip, Mic, Smile, Send } from 'lucide-react';
import styles from '../page.module.css';

export default function ChatArea() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error('Failed to fetch');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = { role: 'assistant', content: '' };

            setMessages((prev) => [...prev, assistantMessage]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                assistantMessage.content += chunk;

                setMessages((prev) => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { ...assistantMessage };
                    return newMessages;
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>

            {/* Messages Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.length === 0 && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                            How can I help you today?
                        </h1>
                    </div>
                )}

                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                    }}>
                        <div style={{
                            maxWidth: '80%',
                            padding: '1rem 1.5rem',
                            borderRadius: '1rem',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            whiteSpace: 'pre-wrap',
                            backgroundColor: msg.role === 'user' ? '#3b82f6' : 'transparent', // User blue, Bot transparent
                            color: '#fff'
                        }}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
                padding: '1.5rem 2rem',
                borderTop: '1px solid #262626'
            }}>
                <form onSubmit={handleSubmit} style={{
                    position: 'relative',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #262626',
                    borderRadius: '12px',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Message gpt-oss:120b..."
                        disabled={isLoading}
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontSize: '1rem'
                        }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a3a3a3' }}><Paperclip size={20} /></button>
                        <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a3a3a3' }}><Smile size={20} /></button>
                        <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a3a3a3' }}><Mic size={20} /></button>

                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            style={{
                                backgroundColor: '#8b5cf6',
                                border: 'none',
                                borderRadius: '8px',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                                opacity: !input.trim() || isLoading ? 0.6 : 1,
                                color: 'white'
                            }}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </form>
                <p style={{ textAlign: 'center', color: '#525252', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                    CEG Chat can make mistakes. Consider checking important information.
                </p>
            </div>
        </div>
    );
}
