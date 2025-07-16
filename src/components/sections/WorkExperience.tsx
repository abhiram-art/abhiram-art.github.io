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
      "Designed and implemented MySQL database architecture with Node.js and Sequelize ORM, creating optimized table structures and data relationships for Treetracker Wallet Web App.",
      "Built over 15 RESTful APIs using Express.js supporting secure token management features within the application.",
    ],
  },
  {
    startDate: "Sept 2024",
    endDate: "Jan 2025",
    companyName: "Twilight (University Startup)",
    jobTitle: "Software Developer Volunteer",
    description: [
      "Built a platform connecting startups, talent, and investors to promote collaboration in the startup ecosystem",
      "Developed RESTful APIs using Node.js and Express.js for efficient backend data handling",
      "Designed responsive and dynamic frontend with Angular to enhance user experience",
      "Implemented hybrid data storage architecture using MongoDB and SQL for optimized performance and scalability",
      "Implemented Redis pub-sub architecture to trigger Brevo email workflows on signups, cutting notification delay by 40%.",
    ],
  },
  {
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    companyName: "Superstars, Inc.",
    jobTitle: "Software Developer Intern",
    description: [
      "Developed 10+ responsive front-end components for the web application with Angular, HTML, CSS, and TypeScript, ensuring seamless integration with the backend through comprehensive API testing of 14+ endpoints with Postman.",
      "Collaborated with a cross-functional team of 5 members, driving 3 major product improvements that increased user engagement by 18% through implementation of key features identified in weekly sprint planning.",
      "Implemented basic Cypress tests for 3 key user workflows (authentication, profile management, content submission) alongside the QA team to increase automated test coverage of critical frontend features.",
      "Built 6 reusable video components using MediaRecorder API and WebRTC that significantly reduced code duplication by 30% across video features used on 12+ pages, and integrated AWS CloudFront for optimized video delivery.",
    ],
  },
  {
    startDate: "Mar 2022",
    endDate: "Jun 2022",
    companyName: "Mactores",
    jobTitle: "Cloud Engineer Intern",
    description: [
      "Optimized client AWS costs by 20% through right-sizing analysis and resource recommendations across 3 accounts.",
      "Implemented environment-specific deployment logic in GitHub Actions for AWS Lambda functions, reducing deployment errors by 25%",
      "Assisted cloud engineering team in migrating 2 legacy applications to AWS, helping implement load-balanced, auto-scaled infrastructure that reduced server crashes by over 14%.",
    ],
  },
  {
    startDate: "Nov 2021",
    endDate: "Mar 2022",
    companyName: "Bennett University",
    jobTitle: "Research Assistant",
    description: [
      "Implemented ensemble models (Random Forest, XGBoost) for COVID-19 transmission analysis, improving prediction accuracy from 73% to 85% using cross-validation by optimizing feature selection and model parameters.",
      "Streamlined data processing using Python Pandas scripts, reducing manual Excel-based analysis time by 25%.",
    ],
  }
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
