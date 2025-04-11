import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";

const projectsData = [
  {
    title: "GatorHive",
    description:
      "Developed a web application that simplifies event discovery and promotion on campus for University of Florida students. Built a responsive UI using React.js, a scalable Node.js backend, integrated MySQL for data storage, and used AWS S3 for image management. Deployed on AWS EC2 using PM2 for high availability.",
    code: "https://github.com/abhiram-art/GatorHive-26",
    technologies: [
      "React.js",
      "Node.js",
      "AWS RDS",
      "MySQL",
      "AWS S3",
      "AWS EC2",
      "Git",
    ],
  },
  {
    title: "Pharmatiq",
    description:
      "Built an e-commerce mobile app for medicines that integrates nearby pharmacies for faster delivery. Designed an accessible and intuitive Flutter UI, used Firebase for real-time data storage and backend, and implemented push notifications for order updates and reminders.",
    code: "https://github.com/abhiram-art/pharmatiq",
    technologies: ["Flutter", "Android Studio", "Firebase", "Git"],
  },
  {
    title: "Accidect",
    description:
      "Created an accident detection system using the Faster R-CNN model to analyze live CCTV footage. Utilizes object detection to identify accidents in real-time and notifies authorities for faster response, aiding investigations and potentially saving lives.",
    code: "https://github.com/abhiram-art/Accidect",
    technologies: ["Python", "Machine Learning"],
  },
  {
    title: "Blood Bank Management System",
    description:
      "Developed a management system using Java and SQL to assist with donor record keeping and blood distribution. Designed for use by hospitals and blood banks to streamline internal operations and improve accessibility of donor information.",
    code: "https://github.com/abhiram-art/Blood-Bank-Management-System",
    technologies: ["Java", "SQL"],
  },
  {
    title: "Wing",
    description:
      "Created an Android app using Java and Android Studio that helps users discover legitimate YouTube channels by category. Also protects content creators by detecting reuploads of original videos on fake channels, helping prevent revenue loss.",
    code: "#",
    technologies: ["Java", "Android Studio"],
  },
  {
    title: "Garbage Up and Down",
    description:
      "Built a Django-based website to support organizational waste management. As my first university project, I led backend development and guided the team, delivering a tool to streamline communication and task management for waste workers.",
    code: "https://github.com/abhiram-art/Garbage-up-and-down",
    technologies: ["Python", "Django"],
  },
];

function Projects() {
  return (
    <section className="text-teal-400 p-8" id="projects">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-md dark:border-gray-700"
            >
              <div className="flex flex-col gap-3 p-4 grow">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[4px]">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-slate-200 text-slate-900 border-teal-400 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto text-gray-900 dark:text-white">
                  <Link href={project.code}>
                    <Button
                      variant="outline"
                      className="border-teal-400 text-teal-400 dark:border-teal-400"
                    >
                      Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border-t-[2px] border-teal-400 h-[2px] w-1/2" />
    </section>
  );
}

export default Projects;
