"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative bg-white rounded-lg shadow-lg container p-6  overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute z-30 text-3xl top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
