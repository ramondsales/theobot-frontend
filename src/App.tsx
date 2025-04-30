// src/App.tsx
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Message } from './components/Message'      // nosso componente genérico
import { sendQuestion } from './services/api'       // seu fetch atual

type Msg = { id: string; sender: 'user' | 'ai'; text: string }

export function App() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)

  const handleSend = async (text: string) => {
    // 1. adiciona a mensagem do usuário
    const userMsg = { id: uuid(), sender: 'user', text }
    setMessages((m) => [...m, userMsg])

    setLoading(true)
    try {
      const answer = await sendQuestion(text)
      // 2. adiciona a mensagem da IA
      const aiMsg = { id: uuid(), sender: 'ai', text: answer }
      setMessages((m) => [...m, aiMsg])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
          />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const input = (e.currentTarget.elements.namedItem('q') as HTMLInputElement)
          if (!input.value.trim()) return
          handleSend(input.value.trim())
          input.value = ''
        }}
        className="p-4 border-t border-gray-700 flex gap-2"
      >
        <input
          name="q"
          className="flex-1 p-2 rounded bg-gray-900 text-white"
          placeholder="Digite sua pergunta..."
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50"
        >
          {loading ? '...' : 'Enviar'}
        </button>
      </form>
    </div>
  )
}
