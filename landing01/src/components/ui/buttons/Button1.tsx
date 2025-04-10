"use client";

interface Button1Props {
  title: string;
  className?: string;
}

export default function Button1({ title, className = "" }: Button1Props) {
  return (
    <button
      className={`bg-transparent font-bricolage text-white hover:underline transition-all ${className}`}
    >
      {title}
    </button>
  );
}
