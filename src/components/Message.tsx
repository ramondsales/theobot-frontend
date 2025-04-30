import React, { FC } from 'react'
import { AiMessage } from './AiMessage'  // animação de digitação
import { UserMessage } from './UserMessage' // bolha simples do usuário

interface MessageProps {
  sender: 'user' | 'ai'
  text: string
}

export const Message: FC<MessageProps> = ({ sender, text }) =>
  sender === 'ai' ? (
    <AiMessage text={text} />
  ) : (
    <UserMessage text={text} />
  )
