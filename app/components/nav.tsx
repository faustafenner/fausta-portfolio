"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: " faustafenner home",
  },
};

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="mb-16 flex">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            style={{ fontFamily: "Koulen, sans-serif", fontSize: "1.5rem" }}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
