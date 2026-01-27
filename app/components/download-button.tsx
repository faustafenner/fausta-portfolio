"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";

type DownloadButtonProps = {
  href: string;
  label?: string;
  className?: string;
  filename?: string; // optional filename suggestion for the download attribute
};

export default function DownloadButton({
  href,
  label = "Download PDF",
  className = "",
  filename,
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={filename || true}
      className={`inline-flex items-center gap-2 rounded-md border border-black px-4 py-2 text-black hover:bg-black hover:text-white transition-colors font-bold ${className}`}
      aria-label={label}
    >
      <FiDownload className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}
