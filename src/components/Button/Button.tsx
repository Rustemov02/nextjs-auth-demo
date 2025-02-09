import React, { FC } from "react";

const Button: FC<{
  text: string;
  onClick: () => void;
  handleError: () => void;
}> = ({ text, onClick, handleError }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 w-full border-2 rounded-md flex items-center justify-center bg-white text-[#2148C0] font-semibold font-montserrat"
    >
      {text}
    </div>
  );
};

export default Button;
