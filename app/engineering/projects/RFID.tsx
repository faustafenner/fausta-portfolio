"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeInOnScroll } from "app/components/fade-in-on-scroll";

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

export default function RFID() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/RFID24/1.JPG",
    "/RFID24/2.JPG",
    "/RFID24/4.JPG",
    "/RFID24/5.JPG",
    "/RFID24/6.JPG",
    "/RFID24/7.JPG",
    "/RFID24/8.JPG",
    "/RFID24/9.JPG",
    "/RFID24/10.JPG",
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl animate-[jump_0.5s_ease-out]">RFID25</h2>
          <p>
            <a
              href="https://sparxhockey.com/"
              className="inline-flex items-center"
            >
              Affiliation: Sparx Hockey
              <ArrowIcon />
            </a>
          </p>
          <p className="mt-4 ">
            <strong>Skills:</strong> UX Design, Full Stack Development
          </p>
          <p>
            <strong>Tools:</strong> Microsoft WPF, C#, XAML
          </p>
        </div>
        <p className="text-right">March - June 2025</p>
      </div>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <p className="mt-2">
        *Note that confidential information has been redacted.
      </p>

      <div className="relative mt-4">
        <div className="w-full rounded-xl overflow-hidden relative">
          <Image
            src={images[currentIndex]}
            alt={`RFID24 Image ${currentIndex + 1}`}
            width={1600}
            height={1200}
            className="w-full h-auto scale-[1.02]"
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

        {/* Image counter */}
        <div className="text-center text-sm text-gray-600 mt-4">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <p className="text-lg mt-8 mb-2">
        RFID25 is a custom full-stack application created for Sparx Hockey,
        designed and programmed to interact with two 25-grinding ring trays at a
        time. Offers RFID tag interaction (querying and programming) with an
        interactive and dynamic UI, offering real-time feedback on programming
        status, error handling, and user guidance.
      </p>

      <p className="text-lg">
        Implemented in Microsoft WPF, utilzing MVVM architecture, event driven
        programming, asynchronous functions, and UI threads. Integrated serial
        communciation protols.
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Background
      </p>

      <FadeInOnScroll className="mt-4">
        <Image
          src="/RFID24/sparx-bg.webp"
          alt="Sparx Hockey Background"
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </FadeInOnScroll>

      <p className="text-lg mt-8 mb-2">
        Sparx Hockey is a leading manufacturer of high-performance at home skate
        sharpening equipment, renowned for its innovative designs and commitment
        to quality. Their patended design creates a perfect sharpening every
        time with virtually no adjustments necessary, making it a favorite for
        at home users and more than 25 NHL teams.
      </p>

      <FadeInOnScroll>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mt-4">
          <Image
            src="/RFID24/sparx-ring.webp"
            alt="Sparx Hockey Grinding Ring"
            fill
            className="object-cover"
          />
        </div>
      </FadeInOnScroll>

      <p className="text-lg mt-8 mb-2">
        The Sparx grinding ring is a key component of the skate sharpening
        system, designed to hold and rotate the skate blade against the grinding
        wheel. Rings are placed inside the sharpener, and carve the hollow into
        the skate blade. Different sizes offer different amounts of grip and
        glide on the ice and are chosen based on the skater’s age and
        preference. Each ring is embedded with an RFID tag that stores important
        data such as the grind profile, which can be viewed on the app.
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Process
      </p>

      <p className="text-lg mt-8 mb-2">
        The development of RFID25 began with a comprehensive analysis of user
        requirements and system specifications provided by Sparx Hockey. Key
        features identified included RFID tag reading and programming, real-time
        status updates, error handling, and an intuitive user interface.
      </p>

      <p className="text-lg mb-8 mt-6">
        The UI was designed using WPF XAML, focusing on clarity and ease of use.
        Design elements were chosen to match Sparx branding, ensuring a cohesive
        style between the website, app, and internal systems. Readability and
        clarity were prioritized to facilitate quick understanding and operation
        by users of varying technical backgrounds, ensuring that minimal errors
        were made during production.
      </p>

      <p className="text-lg mb-8 mt-6">
        The application was built using Microsoft WPF, leveraging the MVVM
        architecture to ensure a clean separation of concerns between the UI and
        business logic. Event-driven programming techniques were employed to
        handle user interactions and system events efficiently. Asynchronous
        functions were implemented to manage RFID communication without blocking
        the UI thread, ensuring a smooth user experience.
      </p>
    </div>
  );
}
