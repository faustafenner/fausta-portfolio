import Link from "next/link";
import Image from "next/image";

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
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 mt-8">
        <Image
          src="/fausta_logo.png"
          alt="Logo"
          width={600}
          height={600}
          className="w-40 h-40 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"
        />
      </div>
      <section className="flex justify-center items-center my-64 relative z-10">
        <div className="flex gap-20 text-4xl">
          <Link href="/design" className="flex items-center">
            design
            <ArrowIcon />
          </Link>

          <Link href="/engineering" className="flex items-center">
            engineering
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
