"use client";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import WorkExperience from "../components/sections/WorkExperience";
import About from "../components/sections/About";
import { Navbar } from "../components/layout/Navbar";
import useResumeDownload from "../components/sections/Resume";
import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/sections/Sidebar";
import Hero from "../components/sections/Hero";

export default function Home() {
  useResumeDownload();
  return (
    <>
      <Navbar />
      <Sidebar side="left" />
      <Sidebar side="right" />
      <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-full overflow-hidden">
          <Hero />
          <About />
          <WorkExperience />
          <Education />
          <Projects />
          <Skills />
        </main>
      </div>
      <Footer />
    </>
  );
}
