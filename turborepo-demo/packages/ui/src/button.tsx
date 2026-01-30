"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="w-100 h-40 bg-amber-600"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      ljsdkjfhksjhfdkjskjahdkf
    </button>
  );
};
