"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
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
  const [showEngineering, setShowEngineering] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  return (
    <>
      <Image
        src="/home-bg.png"
        alt="Background"
        fill
        className="-z-10 opacity-50"
        style={{ objectFit: "cover", transform: "scale(1.5)" }}
        // quality={100}
        priority
      />

      <div className="fixed inset-0 pointer-events-none z-0 mt-8">
        <Image
          src="/fausta_logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="object-cover object-center"
          // className="w-40 h-40 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"
        />
      </div>

      <div
        className={`transition-opacity duration-500 ${showEngineering ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="fixed pointer-events-none z-0 top-52 ml-48 opacity-50">
          {/* <Image
            src="/engineering_photo.jpg"
            alt=""
            width={600}
            height={400}
            className="object-cover object-center"
          /> */}
        </div>
        {/* 
        <div className="fixed pointer-events-none z-0 top-52 right-[-150px] opacity-50">
          <Image
            src="/engineering_photo.jpg"
            alt=""
            width={600}
            height={400}
            className="object-cover object-center"
          />
        </div> */}
      </div>

      <div
        className={`transition-opacity duration-500 ${showDesign ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="fixed pointer-events-none z-0 top-52 ml-48 opacity-50">
          {/* <Image
            src="/design_photo.jpg"
            alt=""
            width={600}
            height={400}
            className="object-cover object-center"
          /> */}
        </div>
        {/* 
        <div className="fixed pointer-events-none z-0 top-52 right-[-150px] opacity-50">
          <Image
            src="/design_photo.jpg"
            alt=""
            width={600}
            height={400}
            className="object-cover object-center"
          />
        </div> */}
      </div>

      <section className="flex justify-center items-center my-64 relative z-10">
        <div className="flex flex-col items-center"></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-2xl md:text-4xl">
          <Link
            href="/design"
            className="flex items-center hover:text-[#dfede3]"
            onMouseEnter={() => setShowDesign(true)}
            onMouseLeave={() => setShowDesign(false)}
          >
            design
            <ArrowIcon />
          </Link>

          <Link
            href="/engineering"
            className="flex items-center hover:text-[#dfede3]"
            onMouseEnter={() => setShowEngineering(true)}
            onMouseLeave={() => setShowEngineering(false)}
          >
            engineering
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
