import { FadeInOnScroll } from "app/components/fade-in-on-scroll";
import Image from "next/image";
import { Playwrite_NO } from "next/font/google";

const playwrite_no = Playwrite_NO({
  weight: "400",
});

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

export default function SignalStrength() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2
              className={`text-3xl animate-[jump_0.5s_ease-out] inline-block text-orange-500 ${playwrite_no.className}`}
            >
              Signal Strength Research
            </h2>
            <p className="mt-4">
              <strong>Skills:</strong> Signal Testing, RF Communication
            </p>
            <p>
              <strong>Tools:</strong> C#
            </p>
          </div>
          <p className="text-right">February 2025</p>
        </div>
      </div>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <p className="mt-4 text-lg">
        This research focused on evaluating the signal strength of RFID tags
        used in Sparx Hockey's skate sharpening equipment. The goal was to
        ensure reliable communication between the RFID tags and the reader
        devices, which is critical for user experience with the Sparx skate
        sharpener. Custom testing software was developed in C# to measure signal
        strength under various heights, and results were analyzed to optimize
        tag placement and performance.
      </p>

      <div className="mt-8">
        <iframe
          src="/Signal-Strength-Testing.pdf"
          className="w-full h-[600px] md:h-[800px] border border-gray-300"
          title="Signal Strength Testing Document"
        />
      </div>

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
    </div>
  );
}
