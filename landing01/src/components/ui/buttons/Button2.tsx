"use client";

interface Button2Props {
    title: string;
    className?: string;
  }

export default function Button2({ title, className = "" }: Button2Props) {
  return (
    <button
      className={`px-8 py-1 rounded-md bg-gray-600 text-white font-bricolage font-bold transition duration-200 hover:bg-black hover:text-white border-2 border-transparent hover:border-black ${className}`}
    >
      {title}
    </button>
  );
}

