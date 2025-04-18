import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [messages, setMessages] = useLocalStorage('anseyo_messages', []);

  const sendMessage = async (data) => {
    const newMessage = {
      id: Date.now().toString(),
      ...data,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    setMessages([...messages, newMessage]);
    return newMessage;
  };

  const markAsRead = (messageId) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, isRead: true } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <MessageContext.Provider value={{
      messages,
      sendMessage,
      markAsRead
    }}>
      {children}
    </MessageContext.Provider>
  );
}

export const useMessages = () => useContext(MessageContext);