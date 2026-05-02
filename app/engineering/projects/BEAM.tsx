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

export default function BEAM() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2
              className={`text-3xl animate-[jump_0.5s_ease-out] inline-block text-orange-500 ${playwrite_no.className}`}
            >
              BEAM Production Data Tool
            </h2>
            <p>
              <a
                href="https://sparxhockey.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Affiliation: Sparx Hockey
                <ArrowIcon />
              </a>
            </p>
            <p className="mt-4">
              <strong>Skills:</strong> Full Stack Development
            </p>
            <p>
              <strong>Tools:</strong> Blazor, Blazor Boostrap
            </p>
          </div>
          <p className="text-right">January - March 2025</p>
        </div>
      </div>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <p className="mt-2">
        *Note that confidential information has been redacted.
      </p>

      <p className="mt-2 text-lg">
        The BEAM Production Data Tool is a custom-built application designed to
        streamline and enhance the data management processes for Sparx Hockey's
        BEAM device production. This tool provides a centralized platform for
        analyzing and visualizing production data, enabling the team to monitor
        production processes, and make informed decisions to optimize
        manufacturing efficiency and catch and prevent errors. With features
        such as customizable dashboards and robust reporting capabilities, the
        BEAM Production Data Tool is an asset in driving continuous improvement
        in Sparx Hockey's production operations.
      </p>

      <div className="mt-8">
        <iframe
          src="/Beam-Dashboard.pdf"
          className="w-full h-[600px] md:h-[800px] border border-gray-300"
          title="BEAM Production Data Tool"
        />
      </div>

      <p className="mt-4 text-lg mb-4">
        The user can set filters based on the parameters of interest, and the
        dashboard will update to show relevant data. They can view individual
        data points, sorted by date, or run reports based on a given time frame.
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

      <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-8 items-stretch">
        <FadeInOnScroll className="md:w-2/3 h-full">
          <Image
            src="/sparx-beam.png"
            alt="Sparx Hockey Background"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </FadeInOnScroll>

        <p className="text-lg mt-0 mb-2 md:w-1/3 flex items-center">
          The Sparx BEAM™ is Sparx Hockey's patented Blade Edge Accuracy
          Measurement device. Utilizing state-of-the art laser technology, the
          Sparx BEAM measures blade edges to 1/10,000th of an inch. A quick-look
          gauge ensures blades are even, and paired with the Sparx Hockey App,
          exact measurement data is shown.
        </p>
      </div>
      <p>
        <a
          href="https://sparxhockey.com/products/sparx-beam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8"
        >
          <strong>Sparx Beam</strong>
          <ArrowIcon />
        </a>
      </p>
    </div>
  );
}
