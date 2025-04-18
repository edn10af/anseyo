import React from 'react';
import { useMessages } from '../../hooks/useMessages';
import Input from '../common/Input';
import Button from '../common/Button';

export default function MessageCenter() {
  const { messages, sendMessage } = useMessages();
  const [newMessage, setNewMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage({
        content: newMessage,
        senderId: 'currentUser', // In real app, get from auth context
        receiverId: 'agent123', // In real app, get from selected agent
      });
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4 h-96 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === 'currentUser' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className={`max-w-xs rounded-lg px-4 py-2 ${
                message.senderId === 'currentUser' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex space-x-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}