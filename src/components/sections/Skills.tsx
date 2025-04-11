import React from "react";

const skillsData = [
  "C++",
  "Python",
  "Java",
  "Angular",
  "React",
  "Node.js",
  "Express",
  "RESTful APIs",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "TypeScript",
  "JavaScript",
  "Golang",
  "Flutter",
  "NOSQL(MongoDB)",
  "SQL",
  "Git",
  "AWS",
  "Microsoft Azure",
  "Docker",
  "Jenkins",
  "Figma",
];

function Skills() {
  return (
    <section className="text-teal-400 p-8" id="skills">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
