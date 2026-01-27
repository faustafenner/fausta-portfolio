export default function Footer() {
  return (
    <footer className="mt-8 mb-10">
      <div className="flex justify-end gap-4">
        <a
          href="/about"
          className="border border-black rounded-xl px-4 py-2 bg-transparent text-black hover:bg-black hover:text-white transition-colors"
        >
          about
        </a>
        <a
          href="/contact"
          className="border border-black rounded-xl px-4 py-2 bg-transparent text-black hover:bg-black hover:text-white transition-colors"
        >
          contact
        </a>
      </div>
      <p className="text-sm text-right mt-4">Fausta Fenner 2026</p>
    </footer>
  );
}
