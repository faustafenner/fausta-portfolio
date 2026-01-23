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

export default function Rats() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="text-3xl animate-[jump_0.5s_ease-out]">RATS!</h2>
        <p className="text-right">July 2024</p>
      </div>
      <p>
        <a href="https://fabricfabrik.at/" className="inline-flex items-center">
          Affiliation: Fabricfabrik
          <ArrowIcon />
        </a>
      </p>

      <p className="mt-4 ">
        <strong>Methods:</strong> Screen Printing, Digital Illustration
      </p>

      <div className="space-y-4 mt-8">
        {/* First row: Video and rats_1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px]">
            <video controls muted className="w-full h-full object-cover">
              <source src="/rats.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px] relative">
            <Image
              src="/rats_1.jpg"
              alt="RATS! Project Image 1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second row: rats_2, rats_3, rats_4 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative">
            <Image
              src="/rats_2.jpg"
              alt="RATS! Project Image 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative">
            <Image
              src="/rats_3.jpg"
              alt="RATS! Project Image 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative">
            <Image
              src="/rats_4.jpeg"
              alt="RATS! Project Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-8 mb-8">
          Designed and Screen Printed at FabricFabrik studio in Vienna, Austria.
          Sited with one of its inspirations: street art along the Danube canal.
          Motif designed as an ode to motifs present in Vienna museums.{" "}
        </p>

        {/* Process images */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative">
            <Image
              src="/rats-process-1.jpeg"
              alt="RATS! Process Image 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative">
            <Image
              src="/rats-process-4.jpeg"
              alt="RATS! Process Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* <p className="text-lg mb-4 mt-8">coming soon!</p> */}
    </div>
  );
}
