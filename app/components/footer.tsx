export default function Footer() {
  return (
    <footer className="mt-8 mb-10">
      <div className="flex justify-end gap-4">
        <a
          href="/about"
          className="border border-white px-4 py-2 bg-transparent text-white hover:bg-black hover:text-white transition-colors"
        >
          ABOUT/CONTACT
        </a>
        {/* <a
          href="/contact"
          className="border border-white rounded-xl px-4 py-2 bg-transparent text-white hover:bg-black hover:text-white transition-colors"
        >
          contact
        </a> */}
      </div>
      {/* <p className="text-sm text-white text-right mt-4">Fausta Fenner 2026</p> */}
    </footer>
  );
}
