import { ModeToggle } from "@/src/components/common/ModeToggle";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineX,
} from "react-icons/ai";

interface SidebarProps {
  side: "left" | "right";
}

export const Sidebar = ({ side }: SidebarProps) => {
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-8" : "right-8"
      } hidden md:flex flex-col gap-6 z-50`}
    >
      {side === "left" ? (
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://github.com/abhiram-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-200 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiram-palika-0b22591b2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-200 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1"
          >
            <AiOutlineLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/abhi_ram354"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-200 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="https://x.com/ramabhi354"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-200 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1"
          >
            <AiOutlineX size={24} />
          </a>
          <div className="h-24 w-px bg-gray-400 mt-4" />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <ModeToggle />
          <a
            href="mailto:abhirampalika@gmail.com"
            className="text-gray-600 hover:text-teal-400 transition-all duration-300 [writing-mode:vertical-rl] mb-4 dark:text-gray-400 dark:hover:text-teal-400"
          >
            abhirampalika@gmail.com
          </a>
          <div className="h-24 w-px bg-gray-400" />
        </div>
      )}
    </div>
  );
};
