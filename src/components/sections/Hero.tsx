import Image from "next/image";
import ProfilePic from "@/public/images/coder.png";
// import { Separator } from "@/src/components/ui/seperator";

export default function Hero() {
  return (
    <section className="text-teal-400 p-8">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
        <div className="flex flex-col gap-2 w-full lg:w-4/5">
          <h1 className="text-5xl font-bold tracking-tighter mb-2">
            Hi, I'm Abhiram 👋
          </h1>
          <p className="text-2xl text-gray-800 dark:text-gray-300">
          I am a fullstack developer focusing on creating websites that
          provides user with best experience.
          </p>
        </div>
        <div className="flex items-center justify-center md:mb-0">
          <Image
            src={ProfilePic}
            alt="Abhiram"
            width={200}
            height={200}
          />
        </div>
      </div>
      <hr className="border-t-[2px] border-teal-400 h-[2px] w-1/2" />
      {/* <Separator className="my-4 bg-teal-400" /> */}
    </section>
  );
}
