import "./global.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Inder } from "next/font/google";
import { AnimatePresence } from "framer-motion";

const inder = Inder({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#ffffffff", color: "#000000" }}>
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
