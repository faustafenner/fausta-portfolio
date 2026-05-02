import "./global.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Inder, Playwrite_NO } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";

const inder = Inder({
  subsets: ["latin"],
  weight: "400",
});

const playwrite_no = Playwrite_NO({
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fausta Fenner | Design & Engineering",
  description:
    "Portfolio showcasing design and engineering projects by Fausta Fenner",
  icons: {
    icon: "/minilogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "rgb(0, 0, 0)", color: "#ffffff" }}
    >
      <body className={`${inder.className} antialiased mt-8 px-8`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          <AnimatePresence mode="wait" key="page-transition">
            <div key={Math.random()}>{children}</div>
          </AnimatePresence>
          <Footer />
        </main>
      </body>
    </html>
  );
}
