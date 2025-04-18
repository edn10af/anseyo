import React from 'react';
import Button from './Button';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <Button
              variant="secondary"
              onClick={onClose}
              className="rounded-full p-1"
            >
              ✕
            </Button>
          </div>
          {title && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
          )}
          <div className="mt-2">{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </div>
      </div>
    </div>
  );
}