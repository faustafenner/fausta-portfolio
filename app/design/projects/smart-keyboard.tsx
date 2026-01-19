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

export default function SmartKeyboard() {
  return (
    <div>
      <h2 className="text-3xl ">Smart Keyboard</h2>
      <p>2025</p>
      <div className="space-y-4">
        <div className="my-6">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/-kTLUU3APOs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <strong>Role:</strong> Front-end Coding, Design
        </p>
        <p>
          <strong>Tools:</strong> Figma, React, Python
        </p>

        <p className="text-lg mb-4 mt-4">
          This project is an interactive learning keyboard designed to support
          2nd-grade students with disabilities in developing typing and literacy
          skills. The system assists learners who can recognize individual keys
          but face challenges in distinguishing between multiple buttons
          simultaneously. To accommodate diverse needs, the keyboard integrates
          visual and auditory feedback that guides students in selecting the
          correct key. Teachers are provided with customization tools to tailor
          the experience to each learner. They can adjust word lists, control
          the complexity of presented tasks, and scaffold learning step by step.
          This adaptability ensures that students receive both accessibility and
          challenge at their own pace. Ultimately, the project aims to foster
          independence, literacy growth, and confidence in communication for
          young learners with special needs.
        </p>

        <Image
          src="/smart_keyboard.JPEG"
          alt="Smart Keyboard"
          width={800}
          height={600}
          className="mt-6"
        />
        <p className="italic">
          Description: Northeastern Enabling Engineering team testing the final
          project with our client, 2nd grader Veer.
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

        <p>
          <a
            href="https://news.northeastern.edu/2025/12/16/interactive-keyboard-student-designed/"
            className="inline-flex items-center"
          >
            <strong>Northeastern Global News Article</strong>

            <ArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
