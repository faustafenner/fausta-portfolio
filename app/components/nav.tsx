"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const getPageName = () => {
    if (pathname.startsWith("/design")) return "design folio";
    if (pathname.startsWith("/engineering")) return "engineering folio";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";
    return "";
  };

  const pageName = getPageName();

  return (
    <nav className="mb-16 text-2xl animate-[jump_0.5s_ease-out]">
      <Link href="/" className="hover:text-neutral-600 underline decoration-green-700">
        faustafenner
      </Link>
      {pageName && (
        <>
          <span className="mx-2">/</span>
          <span className="">{pageName}</span>
        </>
      )}
    </nav>
  );
}
