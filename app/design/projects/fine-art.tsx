"use client";

import { useState } from "react";
import Image from "next/image";

export default function FineArt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const artworks = [
    { image: "/art1.jpg", title: "Pity Party", medium: "Oil on Canvas" },
    {
      image: "/art2.jpg",
      title: "Caroline with an Ermine",
      medium: "Oil on Canvas",
    },
    {
      image: "/art3.jpg",
      title: "Skeletal",
      medium: "Colored Pencil on Paper",
    },
    {
      image: "/art4.jpg",
      title: "Time For a Change",
      medium: "Acrylic Paint on Cardboard",
    },
    { image: "/art5.jpg", title: "Manifest Destiny", medium: "Mixed Media" },
    { image: "/art6.png", title: "Untitled", medium: "Scratchboard" },
    { image: "/art7.png", title: "Untitled", medium: "Pencil" },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="text-3xl animate-[jump_0.5s_ease-out]">
          Fine Art Portfolio
        </h2>
      </div>

      <div className="mt-8 relative">
        <div className="relative w-full h-[600px] bg-gray-100">
          <Image
            src={artworks[currentIndex].image}
            alt={artworks[currentIndex].title}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Previous image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Next image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Artwork info */}
        <div className="mt-4">
          <p className="text-lg font-semibold">
            {artworks[currentIndex].title}
          </p>
          <p className="text-sm text-gray-600">
            {artworks[currentIndex].medium}
          </p>
        </div>

        {/* Image counter */}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-600">
            {currentIndex + 1} / {artworks.length}
          </p>
        </div>
      </div>
    </div>
  );
}
