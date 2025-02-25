import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface DetailedExperience {
  period: string;
  company: string;
  logo: string;
  role: string;
  companyUrl: string;
  description: string[];
  // responsibilities: string[];
  // challenges: Challenge[];
  // achievements: string[];
  technologies: string[];
}

const experiences: DetailedExperience[] = [
  {
    period: "Jan 2023 — Nov 2023",
    company: "AMCC",
    logo: "/images/experiences/amcc-logo.jpg",
    role: "Instructor of Web Programming Division (Backend)",
    companyUrl: "https://amcc.or.id/",
    description: [
      "I taught members to build dynamic websites using PHP and Laravel. I delivered hands-on lessons, guiding them from basics to advanced techniques, and fostered a collaborative learning environment to help them turn ideas into functional web applications.",
    ],
    technologies: [
      "PHP",
      "Laragon",
      "MySQL",
      "Laravel",
      "Github",
    ],
  },
  {
    period: "Nov 2023 — Nov 2024",
    company: "AMCC",
    logo: "/images/experiences/amcc-logo.jpg",
    role: "Instructor of Web Programming Division (Backend)",
    companyUrl: "https://amcc.or.id/",
    description: [
      "I taught members to build dynamic websites using PHP and Laravel. I delivered hands-on lessons, guiding them from basics to advanced techniques, and fostered a collaborative learning environment to help them turn ideas into functional web applications.",
    ],
    technologies: [
      "PHP",
      "Laragon",
      "MySQL",
      "Laravel",
      "Github",
    ],
  }
];

const ExperienceDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Detailed Experience | Md Rakibul Islam</title>
        <meta
          name="description"
          content="Detailed professional experience and achievements"
        />
      </Head>

      <main className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <button
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="fixed top-4 right-4 z-50 rounded-lg bg-slate-800 p-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-sky-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`fixed w-full bg-slate-900/95 backdrop-blur-sm
  left-0 inset-y-0 p-5
  lg:w-1/4 lg:inset-auto lg:left-auto lg:p-0
  transform transition-transform duration-300 ease-in-out
  lg:bg-transparent lg:backdrop-blur-none
            ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
          >
            <Link
              className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Ferry Febriansyah
            </Link>

            <nav className="sticky top-8 mt-12" aria-label="Company navigation">
              <div className="border-l border-slate-800">
                {experiences?.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setIsNavOpen(false);
                    }}
                    className={`
                        w-full flex items-center gap-3 py-3 pl-4 -ml-px
                        border-l-2 transition-all duration-200
                        ${
                          activeTab === index
                            ? "border-sky-300 text-sky-300"
                            : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-400"
                        }
                      `}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div className="text-left">
                      <div className="text-sm font-medium">{exp?.company}</div>
                      <div className="text-xs opacity-80">{exp?.period}</div>
                    </div>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="lg:ml-[25%]">
            {experiences?.map((exp, index) => (
              <div
                key={index}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl lg:text-2xl font-medium text-slate-200">
                      {exp?.role}
                    </h3>
                    <a
                      href={exp?.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200 hover:text-sky-300"
                    >
                      Visit Company →
                    </a>
                  </div>

                  <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        {exp.description &&  'Description'}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {exp?.description?.map((resp, i) => (
                          <li key={i} className="text-sm leading-normal">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        {exp?.responsibilities && exp?.responsibilities?.length > 0 && 'Key Responsibilities'}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {exp?.responsibilities?.map((resp, i) => (
                          <li key={i} className="text-sm leading-normal">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div> */}

                    {/* <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        {exp.achievements && exp.achievements.length > 0 && 'Key Achievements'}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {exp?.achievements?.map((achievement, i) => (
                          <li key={i} className="text-sm leading-normal">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>

                  {/* <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-4">
                      {exp.challenges && exp.challenges.length > 0 && 'Challenges & Solutions'}
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {exp?.challenges?.map((challenge, i) => (
                        <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                          <h5 className="font-medium text-slate-200">
                            {challenge?.title}
                          </h5>
                          <p className="mt-2 text-sm">
                            Challenge: {challenge?.description}
                          </p>
                          <p className="mt-2 text-sm text-sky-300">
                            Solution: {challenge?.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-4">
                      Technologies Used
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {exp?.technologies?.map((tech, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-sky-400/10 px-3 py-1"
                        >
                          <span className="text-xs font-medium text-sky-300">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ExperienceDetails;
