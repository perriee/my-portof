const skillSets = [
  "PHP",
  "NodeJS",
  "Laravel",
  "ReactJS",
  "MySQL",
  "PostgreSQL",
  "Git",
]

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16"
      aria-label="About me"
    >
      {/* <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div> */}

      <div className="pt-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Skill Sets
        </h2>
        <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skillSets.map((skill, index) => (
            <li className="mr-1.5 mt-2" key={index}>
              <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                {skill}
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
