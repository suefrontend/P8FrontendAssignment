import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className="btn">{children}</button>;
}

export default Button;
