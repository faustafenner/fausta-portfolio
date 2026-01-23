"use client";

import { useState, useEffect } from "react";
import SynAesthetic from "./projects/syn-aesthetic";
import SmartKeyboard from "./projects/smart-keyboard";
import RFID from "./projects/RFID";
import Groove from "./projects/groove";
import Rats from "./projects/rats";
import People from "./projects/people-I-left";
import FineArt from "./projects/fine-art";
import Photography from "./projects/photography";

const projects = [
  { id: 1, name: "syn-aesthetic", component: SynAesthetic },
  { id: 2, name: "smart keyboard", component: SmartKeyboard },
  { id: 3, name: "RFID25", component: RFID },
  { id: 4, name: "groove", component: Groove },
  { id: 5, name: "rats!", component: Rats },
  // { id: 6, name: "the people i left behind", component: People },
  { id: 7, name: "fine art", component: FineArt },
  { id: 8, name: "photography", component: Photography },
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const CurrentProject = projects[selectedProject].component;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 min-h-screen background-white">
        {/* Left side - Project content */}
        <div className="flex-1 order-2 md:order-1">
          <CurrentProject />
        </div>

        {/* Right side - Project list */}
        <div className="md:w-64 order-1 md:order-2 md:border-l border-black md:pl-8 md:sticky md:top-8 md:self-start md:min-h-screen">
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={project.id}>
                <button
                  onClick={() => setSelectedProject(index)}
                  className={`text-left w-full py-2 px-4 hover:text-gray-700 transition-colors ${
                    selectedProject === index
                      ? "font-bold border-l-2 border-[#66806d] bg-[#dfede3]"
                      : ""
                  }`}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
