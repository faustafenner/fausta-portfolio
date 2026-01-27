import Image from "next/image";
import { FadeInOnScroll } from "../../components/fade-in-on-scroll";

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

export default function SmartKeyboard() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl animate-[jump_0.5s_ease-out]">
            Smart Keyboard
          </h2>
          <p>
            <a
              href="https://www.northeastern.edu/i"
              className="inline-flex items-center"
            >
              Affiliation: Northeastern University
              <ArrowIcon />
            </a>
          </p>

          <p>
            <a
              href="https://news.northeastern.edu/2025/12/16/interactive-keyboard-student-designed/"
              className="inline-flex items-center"
            >
              Press: Northeastern Global News Article
              <ArrowIcon />
            </a>
          </p>

          <p className="mt-4 ">
            <strong>Role:</strong> UX Design, Back-end Programming, Front-end
            Programming
          </p>
          <p>
            <strong>Tools:</strong> Figma, React, HTML, CSS, Python
          </p>
        </div>
        <p className="text-right"> September - December 2025</p>
      </div>
      <div className="space-y-4">
        <div className="my-6 aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-kTLUU3APOs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            An interactive learning keyboard designed for a 2nd-grade student
            with mobility challenges who communicates nonverbally. Despite
            strong literacy skills and a love of technology, he struggles with
            visually scanning a standard keyboard and staying focused on target
            keys—making traditional typing instruction ineffective. Our solution
            combines custom hardware (a keyboard with individually addressable
            LEDs) and software that highlights the correct keys, provides visual
            feedback, and rewards successful input. Teachers can customize word
            lists, adjust task complexity, and scaffold learning from single
            words to full sentences. The system also restricts interaction to
            only the relevant keys, minimizing distractions. The goal is to
            foster typing independence, literacy growth, and confidence in
            communication for young learners with special needs.
          </p>
        </p>

        <FadeInOnScroll>
          <Image
            src="/smart_keyboard.JPEG"
            alt="Smart Keyboard"
            width={800}
            height={600}
            className="mt-6 w-full h-auto"
          />
        </FadeInOnScroll>
        <p className="italic">
          Image Description: Northeastern Enabling Engineering team presenting
          final project to client.
        </p>

        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            UX design was done using Figma, and went through several iterations
            of client feedback. The back-end was built in Python to interface
            with SteelSeries GG, a public SDK for controlling keyboard lighting.
            The front-end development was done using React to create a
            user-friendly interface for teachers to customize lessons and track
            student progress. A data tracking tool was also implemented based on
            client feedback to monitor student performance over time.
          </p>
        </p>

        <p>
          <a
            href="https://sites.google.com/view/eece2750keyboard/home"
            className="inline-flex items-center"
          >
            <strong>Project Site</strong>

            <ArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
