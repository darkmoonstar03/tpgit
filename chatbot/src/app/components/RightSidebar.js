import { Sun, RotateCcw, Type, History } from 'lucide-react';

export default function RightSidebar() {
    return (
        <div style={{
            width: '280px',
            backgroundColor: '#0a0a0a',
            borderLeft: '1px solid #262626',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            flexShrink: 0
        }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#a3a3a3' }}>Connected</span>
                <Sun size={18} color="#a3a3a3" style={{ cursor: 'pointer' }} />
            </div>

            {/* Model Parameters */}
            <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff', marginBottom: '1.5rem' }}>Model Parameters</h3>

                {/* Temperature */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <label style={{ fontSize: '0.85rem', color: '#d4d4d4' }}>Temperature</label>
                        <span style={{ fontSize: '0.8rem', color: '#a3a3a3' }}>0.7</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.7"
                        style={{ width: '100%', accentColor: '#8b5cf6', cursor: 'pointer' }}
                    />
                </div>

                {/* Persona */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4d4d4', marginBottom: '0.5rem' }}>Persona</label>
                    <select style={{
                        width: '100%',
                        padding: '0.6rem',
                        backgroundColor: '#171717',
                        border: '1px solid #262626',
                        color: '#fff',
                        borderRadius: '6px',
                        outline: 'none',
                        cursor: 'pointer'
                    }}>
                        <option>Default Assistant</option>
                        <option>Creative Writer</option>
                        <option>Code Expert</option>
                    </select>
                </div>

                {/* Context Window */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4d4d4', marginBottom: '0.5rem' }}>Context Window</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            defaultValue="4096"
                            style={{
                                width: '100%',
                                padding: '0.6rem',
                                backgroundColor: '#171717',
                                border: '1px solid #262626',
                                color: '#fff',
                                borderRadius: '6px',
                                outline: 'none'
                            }}
                        />
                        <span style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#525252' }}>Tokens</span>
                    </div>
                </div>
            </div>

            {/* Quick Tools */}
            <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>Quick Tools</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                    <button style={{
                        backgroundColor: '#171717',
                        border: '1px solid #262626',
                        color: '#d4d4d4',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'background 0.2s'
                    }}>
                        <History size={16} />
                        Summarize Chat
                    </button>

                    <button style={{
                        backgroundColor: '#171717',
                        border: '1px solid #262626',
                        color: '#d4d4d4',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'background 0.2s'
                    }}>
                        <Type size={16} />
                        Generate Title
                    </button>

                    <button style={{
                        backgroundColor: '#171717',
                        border: '1px solid #262626',
                        color: '#d4d4d4',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'background 0.2s'
                    }}>
                        <RotateCcw size={16} />
                        Reset Conversation
                    </button>

                </div>
            </div>
        </div>
    );
}
