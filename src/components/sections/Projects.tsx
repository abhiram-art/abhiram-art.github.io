import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";

const projectsData = [
  {
    title: "GatorHive",
    images: [
      "https://raw.githubusercontent.com/abhiram-art/GatorHive-26/refs/heads/master/client/public/gator-logo.jpg",
      "https://camo.githubusercontent.com/73cf5cb200928dbdd2dbbf1fec39f3249825df5e77b20d932ca81f4013c02f47/68747470733a2f2f7374617469632e7769787374617469632e636f6d2f6d656469612f3535633133305f61636439643762306231396534636433393634313161313835613235396531657e6d76322e706e672f76312f6669742f775f313931322c685f313536362c715f39302f3535633133305f61636439643762306231396534636433393634313161313835613235396531657e6d76322e77656270",
      "https://camo.githubusercontent.com/6a4bf4a4517c63f5fd17ab78ce588fb2435634eec6db4a5cd0451ea586ab415e/68747470733a2f2f7374617469632e7769787374617469632e636f6d2f6d656469612f3535633133305f32633362366435623738663534653537616166393463623763333631393031647e6d76322e706e672f76312f6669742f775f313931322c685f313536362c715f39302f3535633133305f32633362366435623738663534653537616166393463623763333631393031647e6d76322e77656270",
      "https://raw.githubusercontent.com/abhiram-art/GatorHive-26/refs/heads/master/client/public/image.png"
    ],
    description:
      "Developed a web application that simplifies event discovery and promotion on campus for University of Florida students. Built a responsive UI using React.js, a scalable Node.js backend, integrated MySQL for data storage, and used AWS S3 for image management. Deployed on AWS EC2 using PM2 for high availability.",
    code: "https://github.com/abhiram-art/GatorHive-26",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "AWS RDS",
      "MySQL",
      "AWS S3",
      "AWS EC2",
      "Git",
    ],
  },
  {
    title: "GatorSwamps",
    images: [
      "https://raw.githubusercontent.com/abhiram-art/GatorSwamps/refs/heads/main/frontend/public/images/SI.png",
      "https://raw.githubusercontent.com/abhiram-art/GatorSwamps/refs/heads/main/frontend/public/images/SII.png",
      "https://raw.githubusercontent.com/abhiram-art/GatorSwamps/refs/heads/main/frontend/public/images/SIII.png",
      "https://raw.githubusercontent.com/abhiram-art/GatorSwamps/refs/heads/main/frontend/public/images/SIV.png",
    ],
    description:
      "Developed a housing marketplace application using React.js and Golang to streamline apartment searches, featuring a user-friendly interface and efficient backend. Designed a NoSQL database with MongoDB for scalable storage of listings, user profiles, and messages. Implemented advanced search with filters for proximity to campus and amenities to improve usability. Secured the platform with JWT-based authentication and role-based access control for safe, personalized user sessions.",
    code: "https://github.com/abhiram-art/GatorSwamps",
    website: "https://gatorswamps.onrender.com",
    technologies: ["React.js", "JavaScript", "Golang", "MongoDB", "Git"],
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
    technologies: ["Java", "SQL", "Android Studio"],
  },
  {
    title: "Garbage Up and Down",
    description:
      "Built a Django-based website to support organizational waste management. As my first university project, I led backend development and guided the team, delivering a tool to streamline communication and task management for waste workers.",
    code: "https://github.com/abhiram-art/Garbage-up-and-down",
    technologies: ["Python", "SQL", "Django"],
  },
];

function Projects() {
  return (
    <section className="text-teal-400 p-4 sm:p-8" id="projects">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-xl sm:text-2xl font-bold">Projects</h1>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-md dark:border-gray-700"
            >
              <div className="flex flex-col gap-3 p-3 sm:p-4 grow">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                {(project.images ?? []).length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pb-3">
                    {(project.images ?? []).map((img, i) => (
                      <Link
                        key={i}
                        href={img}
                        target="_blank"
                        className="block w-full h-28 sm:h-36 overflow-hidden rounded-md"
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                      </Link>
                    ))}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-[4px]">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-slate-200 text-slate-900 border-teal-400 text-xs sm:text-sm font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-600 dark:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto text-gray-900 dark:text-white">
                  <Link href={project.code}>
                    <Button
                      variant="outline"
                      className="border-teal-400 text-teal-400 dark:border-teal-400 text-xs sm:text-sm"
                    >
                      Code
                    </Button>
                  </Link>
                  {project.website && (
                    <Link href={project.website} target="_blank">
                      <Button
                        variant="outline"
                        className="border-teal-400 text-teal-400 dark:border-teal-400 text-xs sm:text-sm"
                      >
                        Website
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border-t-[2px] border-teal-400 h-[2px] w-full sm:w-1/2" />
    </section>
  );
}

export default Projects;
