import Image from "next/image";
import Link from "next/link";

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
      <section className="relative flex flex-col md:flex-row min-h-screen">
        {/* Image - left side, full height */}
        <div className="w-full md:w-1/2 relative h-96 md:h-auto">
          <Image
            src="/Profile-photo.jpg"
            alt="Fausta Fenner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text content - right side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:py-0">
          <div className="max-w-md">
            <h1 className="mb-6 font-bold text-2xl text-[#EA5814]">Hello!</h1>
            <p>
              Hello! I am a graduating senior at Northeastern University,{" "}
              <strong>majoring in Computer Engineering </strong> with minors in
              Art and Global Fashion Studies.{" "}
            </p>
            <p className="mt-4">
              I am passionate about the{" "}
              <strong>intersection of technology and design</strong>, and I love
              projects that are both functional and aesthetic. My diverse
              background allows me to approach problems from unique
              perspectives, blending technical expertise with creative thinking.
            </p>

            <p className="mt-4">
              I have been able to develop my technical skills via two 6-month
              co-op cycles at <strong>Wayfair and Sparx Hockey.</strong>{" "}
              Additionally, I have pursued my passion for design and fashion
              through three study abroad programs in Sicily, Vienna, and Paris.
              My favorite work was done at the Ars Electronica institute in
              Linz, Austria - explore my portfolio to see more!
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/fausta-fenner-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#EA5814] text-[#EA5814] px-6 py-3 hover:bg-orange-50 transition-colors w-fit"
              >
                VIEW RESUME
                <ArrowIcon />
              </Link>

              <a
                href="https://www.linkedin.com/in/fausta-fenner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#EA5814] text-[#EA5814] px-6 py-3 hover:bg-orange-50 transition-colors w-fit"
              >
                LINKEDIN
                <ArrowIcon />
              </a>

              <a
                href="mailto:your-email@example.com"
                className="flex items-center border border-[#EA5814] text-[#EA5814] px-6 py-3 hover:bg-orange-50 transition-colors w-fit"
              >
                EMAIL
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
