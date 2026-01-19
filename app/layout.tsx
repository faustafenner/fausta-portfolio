import "./global.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#D2C3AA", color: "#000000" }}>
      <body className="antialiased mt-8 px-8">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
