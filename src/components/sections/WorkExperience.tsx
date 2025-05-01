import React from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "Jan 2025",
    endDate: "Present",
    companyName: "Greenstand",
    jobTitle: "Software Development Engineer",
    description: [
      "Implemented MySQL architecture using Node.js and Sequelize ORM that optimized query performance for the Next.js-based Treetracker Wallet Web App.",
      "Built over 15 RESTful APIs using Express.js supporting secure token management features within the application.",
    ],
  },
  {
    startDate: "September 2024",
    endDate: "January 2025",
    companyName: "Twilight (University Startup)",
    jobTitle: "Software Developer Volunteer",
    description: [
      "Built a platform connecting startups, talent, and investors to promote collaboration in the startup ecosystem",
      "Developed RESTful APIs using Node.js and Express.js for efficient backend data handling",
      "Designed responsive and dynamic frontend with Angular to enhance user experience",
      "Implemented hybrid data storage architecture using MongoDB and SQL for optimized performance and scalability",
    ],
  },
  {
    startDate: "August 2024",
    endDate: "December 2024",
    companyName: "Superstars, Inc.",
    jobTitle: "Software Developer Intern",
    description: [
      "Developed responsive front-end components using Angular, HTML, CSS, and TypeScript",
      "Integrated frontend with backend through API testing and validation using Postman",
      "Collaborated with product team to enhance application features and participate in sprint meetings",
      "Architected reusable video components using MediaRecorder API and WebRTC",
      "Implemented AWS CloudFront delivery reducing component code duplication by 40% across 10+ pages",
    ],
  },
  {
    startDate: "January 2022",
    endDate: "May 2022",
    companyName: "Mactores",
    jobTitle: "Cloud Engineer Intern",
    description: [
      "Developed and deployed scalable cloud solutions using Amazon EC2 and S3",
      "Configured AWS IAM roles/policies and VPC for enhanced security measures",
      "Implemented monitoring system with Amazon CloudWatch for resource usage tracking",
      "Optimized application performance through cloud infrastructure improvements",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="text-teal-400 p-4 sm:p-8" id="workexperience">
      <div className="flex flex-col gap-4 w-full -z-10">
        <h1 className="text-xl sm:text-2xl font-bold">Experience</h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {workExperienceData.map((item, index) => (
            <li
              key={index}
              className={`mb-8 sm:mb-10 ms-4 ${
                index === workExperienceData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate || "Present"}
              </time>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <div className="mb-4 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                <ul className="list-disc pl-4 space-y-1">
                  {item.description.map((desc, index) => (
                    <li key={index} className="text-xs sm:text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              {item.companyLink && (
                <a
                  href={item.companyLink}
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
      <hr className="my-4 border-t-[2px] border-teal-400 h-[2px] w-3/5" />
    </section>
  );
};

export default WorkExperience;
