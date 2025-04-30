import React from "react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "Jan 2023",
    endDate: "December 2024",
    collegeName: "University of Florida",
    courseName: "Master of Science in Computer Science",
    address: "Gainesville, FL",
  },
  {
    startDate: "July 2019",
    endDate: "May 2023",
    collegeName: "Bennett University",
    courseName: "Bachelor of Technology in Computer Science",
    address: "Delhi, India",
  },
];

const Education: React.FC = () => {
  return (
    <section className="text-teal-400 p-4 sm:p-8" id="education">
      <div className="flex flex-col gap-4 w-full -z-10">
        <h1 className="text-xl sm:text-2xl font-bold">Education</h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EducationData.map((item, index) => (
            <li
              key={index}
              className={`mb-8 sm:mb-10 ms-4 ${
                index === EducationData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate || "Present"}
              </time>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {item.courseName} at {item.collegeName || item.schoolName}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {item.address}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <hr className="my-4 border-t-[2px] border-teal-400 h-[2px] w-full" />
    </section>
  );
};

export default Education;
