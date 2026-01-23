function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Groove() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="text-3xl animate-[jump_0.5s_ease-out]">Groove</h2>
        <p className="text-right">2024</p>
      </div>
      <p className="text-lg mb-4 mt-4">You're Rating Albums Now.</p>
      <p className="text-lg mb-4 mt-4">
        A letter-boxd inspired social networking platform for albums. Create an
        account, review albums, form crates, search music, and connect with
        users, all in one place.
      </p>
      <div className="space-y-4">
        <p>
          <a
            href="https://groove-nine.vercel.app/Home"
            className="inline-flex items-center"
          >
            <strong>Groove Site</strong>

            <ArrowIcon />
          </a>
        </p>
        <p>
          <strong>Role:</strong> Front-end Coding, Design
        </p>
        <p>
          <strong>Tools:</strong> Figma, React, MongoDB, Vercel
        </p>
      </div>
    </div>
  );
}
