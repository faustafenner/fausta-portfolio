import "./global.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Krub } from "next/font/google";

const krub = Krub({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#ffffffff", color: "#000000" }}>
      <body className={`${krub.className} antialiased mt-8 px-8`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
