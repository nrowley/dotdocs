import React from "react";

interface Props {
  children?: React.ReactNode;
  src?: string;
  height?: string;
}

export const VertCard = ({ src, children, height }: Props) => {
  return (
    <>
      <div className="bg-blue w-full p-10 flex justify-center font-sans cursor-pointer">
        <div className={`rounded bg-white w-80 p-5 h-${height}`}>{children}</div>
      </div>
    </>
  );
};
