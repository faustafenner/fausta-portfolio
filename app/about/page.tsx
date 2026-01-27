import Image from "next/image";
import DownloadButton from "../components/download-button";
export default function Page() {
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center ">
      <Image
        src="/about-background2.png"
        alt="Background"
        fill
        className="-z-10 opacity-30"
        style={{ objectFit: "cover", transform: "scale(1.5)" }}
        quality={100}
        priority
      />

      <div className="relative z-10">
        <Image
          src="/about-photo.png"
          alt="Fausta Fenner"
          width={400}
          height={300}
          className=""
        />
      </div>
      <div className="relative z-10 mt-6 md:mt-0 md:ml-12 max-w-md flex flex-col justify-center text-lg md:text-lg">
        <h1 className="mb-6 font-bold">Fausta Fenner</h1>
        <p>
          Hello! I am a graduating senior at Northeastern University,{" "}
          <strong>majoring in Computer Engineering </strong> with minors in Art
          and Global Fashion Studies.{" "}
        </p>
        <p className="mt-4">
          I am passionate about the{" "}
          <strong>intersection of technology and design</strong>, and I love
          building solutions that are both functional and aesthetic. My diverse
          background allows me to approach problems from unique perspectives,
          blending technical expertise with creative thinking.
        </p>

        <p className="mt-4">
          I have been able to develop my technical skills via two 6-month co-op
          cycles at <strong>Wayfair and Sparx Hockey.</strong> Additionally, I
          have pursued my passion for design and fashion through three study
          abroad programs in Sicily, Vienna, and Paris. My favorite work was
          done at the Ars Electronica institute in Linz, Austria - explore my
          portfolio to see more!
        </p>
        <div className="mt-6">
          <DownloadButton
            href="/fausta-fenner-resume.pdf"
            label="Download Resume"
          />
        </div>
      </div>
    </section>
  );
}
