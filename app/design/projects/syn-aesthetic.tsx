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

export default function SynAesthetic() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl animate-[jump_0.5s_ease-out] inline-block">
            Syn-aesthetic
          </h2>

          <p>
            <a
              href="https://ars.electronica.art/news/en/"
              className="inline-flex items-center"
            >
              Affiliation: Ars Electronica Futurelab
              <ArrowIcon />
            </a>
          </p>
        </div>
        <p className="text-right">July 2024</p>
      </div>

      <p className="mt-4 ">
        <strong>Role:</strong> Programming , Design
      </p>
      <p>
        <strong>Tools:</strong> Processing
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <div className="my-2">
        <div className="relative w-full overflow-hidden rounded-lg pb-[56.25%]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/O4f8myMWC-4"
            title="Syn-aesthetic video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <p className="text-lg mb-4 mt-6">
        “Syn-aesthetic” is an audio/visual synchronization inspired by
        synesthesia, a phenomenon that causes sensory crossovers such as seeing
        smells or tasting sounds. A common form of this is being able to see
        sound. This project explores the correlation between sounds, sights, and
        emotions, asking questions like “What does sound look like?”, “What does
        sound feel like?”, and “What do emotions look like?” Throughout the
        experience, the viewer will be taken on a journey through a full range
        of emotions, starting with a sense of calm and melancholy, building up
        to a frustrated passion. The relief of that anger reveals an
        overwhelming discomfort that builds towards its limit. With nowhere left
        to go, the anxiety vanishes and is replaced by sensations of peace and
        excitement. The intention is to challenge the way sound can influence
        visual perception and interpretation by manipulating visual moments to
        synchronize with various sounds. The effect can also be determined by
        whether the animation has sound present at all. How differently might
        people react to this show if they watch from across the river, where the
        music is not audible than if they sit on the main deck? The experience
        will also vary from person to person due to different lived
        experiences.{" "}
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Background
      </p>

      <FadeInOnScroll>
        <img
          src="/syn-aesthetic/facade.png"
          alt="Syn-aesthetic facade at Ars Electronica"
          className="my-4 rounded-lg"
        />
      </FadeInOnScroll>

      <p className="text-lg mb-4 mt-6">
        Ars Electronica in Linz, Austria focuses on new technologies and how
        they change the way we live and work together. Their Futurelab is an
        interdisciplinary research and development unit that explores the
        intersection of art, technology, and society. Northeastern University
        students recieved the opportunity to a program a project on its 5,100
        square meter facade, customizing 38,500 LEDs in order to explore a
        deeper concept in the world of human-computer interaction.
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Process
      </p>

      <FadeInOnScroll>
        <img
          src="/syn-aesthetic/development.jpg"
          alt="Syn-aesthetic sketches"
          className="my-4 rounded-lg"
        />
      </FadeInOnScroll>

      <p className="text-lg mb-4 mt-6">
        Development began with an ideation workshop led by Ars Electronica. We
        explored various concepts around sensory experiences, human computer
        interaction, and the relationship between visuals and sound.
      </p>

      <p className="text-lg mb-4 mt-6">
        Syn-aesthetic particularly focuses on sound and vision, drawing
        inspiration from synesthesia. We produced a custom music score, which
        inspired the visuals that would accompany on the facade.
      </p>

      <FadeInOnScroll>
        <img
          src="/syn-aesthetic/development2.png"
          alt="Development photo 2"
          className="my-4 rounded-lg"
        />
      </FadeInOnScroll>

      <p className="text-lg mb-4 mt-6">
        The programming was done in Processing, using a custom library provided
        by Ars Electronica that allowed for communication with the LED facade.
        The challenge was to create visuals that not only synchronized with the
        sound but also evoked the intended emotional responses. Various visual
        elements were experimented with, including abstract shapes, colors, and
        patterns that changed dynamically with the music.
      </p>

      <p className="text-lg mb-4 mt-6">
        <a
          href="https://ars.electronica.art/futurelab/en/projects-northeastern-university-2024/"
          className="inline-flex items-center"
        >
          <strong>Read More</strong>
          <ArrowIcon />
        </a>
      </p>

      <div className="space-y-4"></div>
    </div>
  );
}
