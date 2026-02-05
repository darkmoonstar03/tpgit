import { MessageSquare, Plus, Settings } from 'lucide-react';

export default function LeftSidebar() {
    const conversations = [
        "Brainstorming new marketing id...",
        "Debugging React component is...",
        "Summarize latest tech news",
        "Drafting an email to a client"
    ];

    return (
        <div style={{
            width: '260px',
            backgroundColor: '#0a0a0a',
            borderRight: '1px solid #262626',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            flexShrink: 0
        }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#8b5cf6', // Violet/Purple
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MessageSquare size={18} color="white" />
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff' }}>CEG Chat</span>
            </div>

            {/* New Chat Button */}
            <button style={{
                width: '100%',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '2rem'
            }}>
                <Plus size={18} />
                New Knowledge chat
            </button>

            {/* Conversation List */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <h3 style={{
                    fontSize: '0.75rem',
                    color: '#a3a3a3',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    paddingLeft: '0.5rem'
                }}>Conversations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {conversations.map((title, idx) => (
                        <button key={idx} style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#d4d4d4',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.5rem',
                            width: '100%',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            textAlign: 'left',
                            borderRadius: '6px',
                            transition: 'background 0.2s'
                        }}>
                            <MessageSquare size={16} />
                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer / Model Selection */}
            <div style={{ borderTop: '1px solid #262626', paddingTop: '1rem', marginTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.75rem', color: '#a3a3a3', marginBottom: '0.25rem' }}>Model Selection</p>
                    <button style={{
                        width: '100%',
                        backgroundColor: '#171717',
                        border: '1px solid #262626',
                        color: 'white',
                        padding: '0.6rem',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        gpt-oss:120b (Default)
                        <span style={{ fontSize: '0.6rem' }}>▼</span>
                    </button>
                </div>
                <button style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: '1px solid #262626',
                    color: '#a3a3a3',
                    padding: '0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <Settings size={14} />
                    Manage Models
                </button>
            </div>
        </div>
    );
}
