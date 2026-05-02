import { Playwrite_NO } from "next/font/google";

const playwrite_no = Playwrite_NO({
  weight: "400",
});

export default function Photography() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <h2
            className={`text-3xl animate-[jump_0.5s_ease-out] text-orange-500 ${playwrite_no.className}`}
          >
            Photography Portfolio
          </h2>
        </div>
      </div>
      <p>coming soon!</p>
      <div className="space-y-4">
        {/* Add your project content, images, etc. */}
      </div>
    </div>
  );
}
