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

export default function Rats() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <h2
            className={`text-3xl animate-[jump_0.5s_ease-out] text-orange-500 ${playwrite_no.className}`}
          >
            RATS!
          </h2>
          <p className="text-right">July 2024</p>
        </div>
        <p>
          <a
            href="https://fabricfabrik.at/"
            className="inline-flex items-center"
          >
            Affiliation: Fabricfabrik
            <ArrowIcon />
          </a>
        </p>

        <p className="mt-4 ">
          <strong>Methods:</strong> Screen Printing, Digital Illustration
        </p>
      </div>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <div className="space-y-4 mt-8">
        {/* First row: Video and rats_1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px] rounded-lg overflow-hidden">
            <video controls muted className="w-full h-full object-cover">
              <source src="/rats/rats-vid.MOV" />
              Your browser does not support the video tag.
            </video>
          </div>

          <FadeInOnScroll className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats_1.jpg"
              alt="RATS! Project Image 1"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>
        </div>

        {/* Second row: rats_2, rats_3, rats_4 */}
        <div className="flex flex-col md:flex-row gap-4">
          <FadeInOnScroll className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats_2.jpg"
              alt="RATS! Project Image 2"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats_3.jpg"
              alt="RATS! Project Image 3"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats_4.jpeg"
              alt="RATS! Project Image 4"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>
        </div>

        {/* Third row: Video and rats_1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <FadeInOnScroll className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats_5.jpeg"
              alt="RATS! Project Image 1"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1 h-60 sm:h-64 md:h-96 lg:h-[700px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats-bandana.jpeg"
              alt="RATS! Project Image 1"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>
        </div>

        <p>
          "RATS!" is a series of motifs deisgned and screen printed as part of a
          workshop at FabricFabrik studio in Vienna. The design draws
          inspiration from street art found along the Danube canal and motifs
          present in Vienna museums, blending these influences into a cohesive
          visual language.
        </p>

        <p className="mt-4 text-lg font-semibold border-b border-black">
          Background
        </p>

        <FadeInOnScroll>
          <Image
            src="/rats/fabricfabrik.webp"
            alt="RATS! in Fabricfabrik Studio"
            width={1600}
            height={1200}
            className="w-full h-auto my-4 rounded-lg"
          />
        </FadeInOnScroll>

        <p>
          FabricFabrik is a screen printing manufactory in Vienna, nestled in a
          former genuine Viennese inn, whose charm is still clearly evident.
          From initial design to finished fabric by the meter – in addition to
          their own textile designs, hand screen prints, and patterns, they also
          offer completely customized solutions and are open to new, innovative
          ideas. Sustainability and the appreciation of regional craft
          businesses are very important. Contemporary art and design, combined
          with traditional craftsmanship, serve as a starting point for
          innovative ideas that create synergies.
        </p>

        <p>
          Northeastern University students had the opportunity to collaborate
          with FabricFabrik in a three week screen printing workshop. During
          this time, we learned the entire screen printing process from start to
          finish, including designing motifs, translating them into digital
          files, preparing screens, and printing on fabric. We sourced textiles
          from local suppliers and second hand stores.
        </p>

        <p className="mt-4 text-lg font-semibold border-b border-black">
          Process
        </p>
        {/* Process images */}
        <div className="flex flex-col md:flex-row gap-4">
          <FadeInOnScroll className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats-process-1.jpeg"
              alt="RATS! Process Image 1"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1 h-60 sm:h-48 md:h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src="/rats/rats-process-4.jpeg"
              alt="RATS! Process Image 4"
              fill
              className="object-cover"
            />
          </FadeInOnScroll>
        </div>

        <p>
          The design process began with researching street art in Vienna,
          particularly along the Danube canal, as well as motifs found in Vienna
          museums. Sketches were created based on these inspirations, focusing
          on bold, graphic elements that would translate well to screen
          printing. After finalizing the designs, we prepared the screens by
          coating them with emulsion and exposing them to UV light with our
          designs printed on transparencies. Once the screens were ready, we
          proceeded to print the designs onto fabric using textile inks.
          Multiple layers and colors were used to add depth and interest to the
          prints. The final products included a variety of printed fabrics and
          garments, showcasing the unique motifs created during the workshop.
        </p>
      </div>

      {/* <p className="text-lg mb-4 mt-8">coming soon!</p> */}
    </div>
  );
}
