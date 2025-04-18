import React from 'react';

export default function Alert({
  type = 'info',
  message,
  onClose
}) {
  const types = {
    info: 'bg-blue-50 text-blue-800',
    success: 'bg-green-50 text-green-800',
    warning: 'bg-yellow-50 text-yellow-800',
    error: 'bg-red-50 text-red-800',
  };

  return (
    <div className={`rounded-md p-4 ${types[type]}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {type === 'info' && <span>ℹ️</span>}
          {type === 'success' && <span>✅</span>}
          {type === 'warning' && <span>⚠️</span>}
          {type === 'error' && <span>❌</span>}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              onClick={onClose}
              className="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}