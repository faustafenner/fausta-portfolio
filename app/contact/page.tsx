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

export default function Page() {
  return (
    <div>
      <Image
        src="/contact-background.png"
        alt="Background"
        fill
        className="-z-10 opacity-30"
        style={{ objectFit: "cover", transform: "scale(1)" }}
        quality={100}
        priority
      />

      <section className="my-8 flex justify-end">
        {/* <p className="text-2xl mb-8 tracking-tighter text-right border-b border-black pb-2 inline-block">
          contact
        </p> */}
      </section>
      <div className="flex flex-col items-center gap-4 text-lg md:text-xl text-center mb-8">
        <p>
          <a
            href="mailto:fennerfausta@gmail.com"
            className="inline-flex items-center"
          >
            fennerfausta@gmail.com
            <ArrowIcon />
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 text-lg md:text-xl text-center mb-8">
        <p>
          <a
            href="https://www.linkedin.com/in/fausta-fenner/"
            className="inline-flex items-center"
          >
            linkedIn
            <ArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
