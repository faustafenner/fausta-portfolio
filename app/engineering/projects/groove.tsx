"use client";

import { useState } from "react";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Groove() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const media = [
    { type: "video", src: "/groove/groovehome.mov" },
    { type: "image", src: "/groove/groove1.png" },
    { type: "image", src: "/groove/groove2.png" },
    { type: "image", src: "/groove/groove3.png" },
    { type: "image", src: "/groove/groove4.png" },
    { type: "image", src: "/groove/groove5.png" },
    { type: "image", src: "/groove/groove6.png" },
    { type: "image", src: "/groove/groove7.png" },
  ];

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="text-3xl animate-[jump_0.5s_ease-out]">Groove</h2>
        <p className="text-right"> December 2025</p>
      </div>

      <p>
        <strong>Skills:</strong> UX Design, Full Stack Development
      </p>
      <p>
        <strong>Tools:</strong> Figma, React, JavaScript, HTML, CSS, MongoDB,
        Vercel
      </p>

      <p className="text-lg mb-4 mt-4">
        A letter-boxd inspired social networking platform for albums. Create an
        account, review albums, form crates, search music, and connect with
        users, all in one place.
      </p>
      <div className="space-y-4 mt-8">
        <div className="relative mt-8">
          <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[600px]">
            {media[currentIndex].type === "video" ? (
              <video
                controls
                muted
                className="w-full h-full object-contain"
                key={media[currentIndex].src}
              >
                <source src={media[currentIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={media[currentIndex].src}
                alt={`Groove ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevMedia}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Previous"
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
            onClick={nextMedia}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Next"
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

          {/* Media counter */}
          <div className="mt-4 text-center text-sm text-gray-600">
            {currentIndex + 1} / {media.length}
          </div>
        </div>

        <p>
          <a
            href="https://groove-nine.vercel.app/Home"
            className="inline-flex items-center"
          >
            <strong>Groove Site</strong>

            <ArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
