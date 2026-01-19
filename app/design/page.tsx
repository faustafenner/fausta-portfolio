"use client";

import { useState } from "react";
import SynAesthetic from "./projects/syn-aesthetic";
import SmartKeyboard from "./projects/smart-keyboard";
import RFID from "./projects/RFID";
import Groove from "./projects/groove";
import Rats from "./projects/rats";
import People from "./projects/people-I-left";
import FineArt from "./projects/fine-art";
import Photography from "./projects/photography";

const projects = [
  { id: 1, name: "Syn-aesthetic", component: SynAesthetic },
  { id: 2, name: "Smart Keyboard", component: SmartKeyboard },
  { id: 3, name: "Sparx: RFID24", component: RFID },
  { id: 4, name: "Groove", component: Groove },
  { id: 5, name: "RATS!", component: Rats },
  { id: 6, name: "The People I Left Behind", component: People },
  { id: 7, name: "Fine Art Portfolio", component: FineArt },
  { id: 8, name: "Photography Portfolio", component: Photography },
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(0);
  const CurrentProject = projects[selectedProject].component;

  return (
    <div>
      <section className=" flex justify-end">
        <p className="text-2xl mb-8 tracking-tighter text-right border-b border-black pb-2 inline-block">
          design projects
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-8 min-h-screen background-white">
        {/* Left side - Project content */}
        <div className="flex-1 order-2 md:order-1">
          <CurrentProject />
        </div>

        {/* Right side - Project list */}
        <div className="md:w-64 order-1 md:order-2">
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={project.id}>
                <button
                  onClick={() => setSelectedProject(index)}
                  className={`text-left w-full py-2 px-4 hover:text-white transition-colors ${
                    selectedProject === index
                      ? "font-bold border-l-2 border-black"
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
    </div>
  );
}
