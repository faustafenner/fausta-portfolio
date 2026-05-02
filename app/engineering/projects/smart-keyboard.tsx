import Image from "next/image";
import { FadeInOnScroll } from "../../components/fade-in-on-scroll";
import { Playwrite_NO } from "next/font/google";

const playwrite_no = Playwrite_NO({
  weight: "400",
});

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

export default function SmartKeyboard() {
  return (
    <div>
      <div className="border-dashed border-3 border-white p-4 rounded-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2
              className={`text-3xl animate-[jump_0.5s_ease-out] text-orange-500 ${playwrite_no.className}`}
            >
              Smart Keyboard
            </h2>
            <p>
              <a
                href="https://www.northeastern.edu/i"
                className="inline-flex items-center"
              >
                Affiliation: Northeastern University
                <ArrowIcon />
              </a>
            </p>

            <p>
              <a
                href="https://news.northeastern.edu/2025/12/16/interactive-keyboard-student-designed/"
                className="inline-flex items-center"
              >
                Press: Northeastern Global News Article
                <ArrowIcon />
              </a>
            </p>

            <p className="mt-4 ">
              <strong>Role:</strong> UX Design, Back-end Programming, Front-end
              Programming
            </p>
            <p>
              <strong>Tools:</strong> Figma, React, HTML, CSS, Python
            </p>
          </div>
          <p className="text-right"> September - December 2025</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="mt-4 text-lg font-semibold border-b border-black">
          Overview
        </p>

        <div className="my-6 aspect-video rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-kTLUU3APOs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            An interactive learning keyboard designed for a 2nd-grade student
            with mobility challenges who communicates nonverbally. Despite
            strong literacy skills and a love of technology, he struggles with
            visually scanning a standard keyboard and staying focused on target
            keys—making traditional typing instruction ineffective. Our solution
            combines custom hardware (a keyboard with individually addressable
            LEDs) and software that highlights the correct keys, provides visual
            feedback, and rewards successful input. Teachers can customize word
            lists, adjust task complexity, and scaffold learning from single
            words to full sentences. The system also restricts interaction to
            only the relevant keys, minimizing distractions. The goal is to
            foster typing independence, literacy growth, and confidence in
            communication for young learners with special needs.
          </p>
        </p>

        <p className="mt-4 text-lg font-semibold border-b border-black">
          Background
        </p>

        <div className="flex justify-center gap-4">
          <FadeInOnScroll className="flex-1">
            <Image
              src="/smart-keyboard/smart_keyboard.JPEG"
              alt="Smart Keyboard"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1">
            <Image
              src="/smart-keyboard/keyboard-1.webp"
              alt="Smart Keyboard Software Interface"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </FadeInOnScroll>
        </div>

        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            Northeastern University's Fall 2025 Enabling Engineering course
            partnered with various community organizations to develop assistive
            technologies for individuals with disabilities. Our team
            collaborated with a local elementary school to design a solution for
            a 2nd-grade student, Veer, with mobility challenges who communicates
            nonverbally.
          </p>
        </p>

        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            Veer's teacher served as our liason and provided consistent feedback
            throughout the design process. Because of his bright abilities, love
            of technology, and difficulty physically writing, she wanted to help
            him focus on typing instead. However, two challenges limited his
            typing progress: difficulty visually scanning the keyboard for
            specific keys, and a tendency to engage with the keyboard in non
            task focused ways/get distracted and hit other keys. Keren sought a
            structured, visually guided typing system that highlights target
            keys, gives rewards after correct words typed, and could potentially
            scale from single words to sentences. It also needs to ensure that
            he can only interact with the correct keys. Our project aimed to
            design both the hardware (keyboard with individually adressable
            LEDs) and software (custom typing program) needed to create this
            solution for our client.
          </p>
        </p>

        <p className="mt-4 text-lg font-semibold border-b border-black">
          Process
        </p>

        <FadeInOnScroll className="">
          <Image
            src="/smart-keyboard/keyboard-2.webp"
            alt="Smart Keyboard Software Interface"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </FadeInOnScroll>

        <div className="flex justify-center gap-4">
          <FadeInOnScroll className="flex-1 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/smart-keyboard/keyboard-4-2.png"
              alt="Smart Keyboard"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="flex-1 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/smart-keyboard/keyboard-5.png"
              alt="Smart Keyboard Software Interface"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </FadeInOnScroll>
        </div>

        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            UX design was done using Figma, and went through several iterations
            of client feedback. Everything including font size, style, color,
            and interaction methods was designed to make this system effective
            and highly engaging for Veer. The back-end was built in Python to
            interface with SteelSeries GG, a public SDK for controlling keyboard
            lighting. Using any given word or sentence, we were able to light
            the relevant key or region of keys that Veer needed to type. The
            frontend listened for keypress events and would only react and move
            forward if the correct key was pressed. The front-end was developed
            using React to create a user-friendly interface for teachers to
            customize lessons and track student progress. A data tracking tool
            was also implemented based on client feedback to monitor student
            performance over time, and could display metrics such as average
            time per letter.
          </p>
        </p>

        <FadeInOnScroll className="">
          <Image
            src="/smart-keyboard/keyboard-6.webp"
            alt="Smart Keyboard Software Interface"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </FadeInOnScroll>

        <p className="text-lg mb-8 mt-8">
          <p className="text-lg mb-8 mt-8">
            Veer interacted with the system during our midway testing session,
            which helped us refine the design based on his engagement and
            feedback from his teacher. The final prototype successfully met the
            client's needs by providing a visually guided typing experience that
            kept Veer focused and motivated. Our final product drop-off proved
            the solution to be very effective, allowing Veer to quickly identify
            letters and type words with minimal error or distraction.
          </p>
        </p>

        <p>
          <a
            href="https://sites.google.com/view/eece2750keyboard/home"
            className="inline-flex items-center"
          >
            <strong>Project Site</strong>

            <ArrowIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
