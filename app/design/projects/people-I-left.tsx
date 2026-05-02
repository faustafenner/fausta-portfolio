import { Playwrite_NO } from "next/font/google";

const playwrite_no = Playwrite_NO({
  weight: "400",
});

export default function People() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <h2
            className={`text-3xl animate-[jump_0.5s_ease-out] text-orange-500 ${playwrite_no.className}`}
          >
            The People I Left Behind
          </h2>
          <p className="text-right">2024</p>
        </div>
      </div>
      <p className="text-lg mb-4 mt-8">coming soon!</p>
      <div className="space-y-4"></div>
    </div>
  );
}
