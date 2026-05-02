import { Playwrite_NO } from "next/font/google";

const playwrite_no = Playwrite_NO({
  weight: "400",
});

export default function ECG() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2
              className={`text-3xl animate-[jump_0.5s_ease-out] inline-block text-orange-500 ${playwrite_no.className}`}
            >
              ECG Monitor
            </h2>
            <p className="mt-4">
              <strong>Skills:</strong> Circuit Design, Signal Processing
            </p>
            <p>
              <strong>Tools:</strong> MATLAB
            </p>
          </div>
          <p className="text-right">November-December 2023</p>
        </div>
      </div>

      <p className="text-lg mt-8">Coming soon!</p>
    </div>
  );
}
