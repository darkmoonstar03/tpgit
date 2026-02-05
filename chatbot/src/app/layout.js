import './globals.css'

export const metadata = {
    title: 'Ollama Chat',
    description: 'A premium chat interface for Ollama',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
