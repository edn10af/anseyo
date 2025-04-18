import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

export default function AgentDirectory() {
  const { agents } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Find an Agent</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow rounded-lg p-6"
          >
            <h3 className="text-lg font-medium">{agent.name}</h3>
            <p className="text-gray-500">Languages: {agent.languages.join(', ')}</p>
            <div className="mt-4">
              <Button onClick={() => {}}>
                Schedule Appointment
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}