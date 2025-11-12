// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`${
        isOpen
          ? "scale-100 opacity-100"
          : "scale-0 opacity-0 pointer-events-none"
      } fixed inset-0 z-200000000 bg-secondary-60/35 flex items-center justify-center transition-all duration-300`}
    >
      <div className="w-full md:w-[80%] bg-white dark:bg-secondary rounded-lg relative">
        <div
          className="absolute top-3 right-2 p-2 text-xl flex items-center justify-center bg-gray-200 dark:hover:bg-whites-50 text-secondary-10 rounded-full size-10 cursor-pointer"
          onClick={onClose}
        >
          X{" "}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
