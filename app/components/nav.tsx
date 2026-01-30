"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const getPageName = () => {
    if (pathname.startsWith("/design")) return "DESIGN PORTFOLIO";
    if (pathname.startsWith("/engineering")) return "ENGINEERING PORTFOLIO";
    if (pathname.startsWith("/about")) return "ABOUT";
    if (pathname.startsWith("/contact")) return "CONTACT";
    return "";
  };

  const pageName = getPageName();

  return (
    <nav className="relative mb-16 text-2xl py-8 -mx-8 -mt-8 px-8 pt-8">
      <Image
        src="/home-background-image.jpg"
        alt="Background"
        fill
        className="-z-10 opacity-30 object-cover"
        priority
      />
      <div className="relative z-10">
        <Link
          href="/"
          className="hover:text-neutral-600 underline decoration-black underline-offset-2"
        >
          FAUSTAFENNER
        </Link>
        {pageName && (
          <>
            <span className="mx-2">/</span>
            <span className="">{pageName}</span>
          </>
        )}
      </div>
    </nav>
  );
}
