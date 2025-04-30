import Image from "next/image";
import ProfilePic from "@/public/images/profile-picture.jpg";
// import { Separator } from "@/src/components/ui/seperator";

export default function About() {
  return (
    <section className="text-teal-400 p-8" id="about">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">
        <div className="w-full max-w-3xl text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-2">About me</h1>
          <p className="text-base sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
            Welcome to my digital space! I'm Abhiram, a fullstack developer and
            cloud engineer passionate about building impactful web solutions
            that deliver exceptional user experiences. <br /> <br />
            My technical journey has equipped me with expertise in frontend
            technologies like React.js, Angular, and Flutter, coupled with
            strong backend skills in Node.js, Express.js, and RESTful APIs. I'm
            equally comfortable working with SQL (MySQL) and NoSQL (MongoDB)
            databases, allowing me to design flexible and scalable data
            architectures. <br /> <br />
            My cloud engineering experience with AWS (S3, EC2, CloudFront, RDS)
            and Microsoft Azure has taught me to build secure, scalable
            applications that perform optimally. <br />
            <br />
            I'm driven by thepotential of technology to simplify lives and
            create meaningful connections. I invite you to explore my portfolio
            and discover how my technical expertise and creative problem-solving
            can contribute to your next digital project.
          </p>
        </div>
        <div className="flex items-center justify-center md:mb-0">
          <Image
            src={ProfilePic}
            alt="Abhiram"
            width={500}
            height={500}
            className="border-2 border-gray-100 rounded-full object-cover"
          />
        </div>
      </div>
      <hr className="my-4 border-t-[2px] border-teal-400 h-[2px] w-1/2" />
    </section>
  );
}
