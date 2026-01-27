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

export default function SignalStrength() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl animate-[jump_0.5s_ease-out] inline-block">
            Signal Strength
          </h2>
          <p className="mt-4">
            <strong>Skills:</strong> Signal Testing, RF Communication
          </p>
          <p>
            <strong>Tools:</strong> C#
          </p>
        </div>
        <p className="text-right">February 2025</p>
      </div>

      <div className="mt-8">
        <iframe
          src="/signal-strength-testing.pdf"
          className="w-full h-[600px] md:h-[800px] border border-gray-300"
          title="Signal Strength Testing Document"
        />
      </div>
    </div>
  );
}
