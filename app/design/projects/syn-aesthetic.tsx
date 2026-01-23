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
        <strong>Role:</strong> Programming, Design
      </p>
      <p>
        <strong>Tools:</strong> Processing
      </p>

      <div className="my-6 aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dsSjIKlgMys"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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

      <p className="text-lg mb-4 mt-6">
        The project can be viewed on the facade of Ars Electronica, in the form
        of 38,500 LEDs.
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
