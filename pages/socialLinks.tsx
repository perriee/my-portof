import React from "react";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/perriee",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/ferry-febriansyah/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "instagram",
    link: "https://instagram.com/perreee_",
    icon: <SlSocialInstagram />,
    delay: 0.95,
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/@perriee_",
    icon: <SlSocialYoutube />,
    delay: 0.95,
  },
];
const SocialLInks = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-sky-300">
        <div className="flex lg:flex-col md:flex-col flex-row lg:gap-y-5 md:gap-y-5 gap-x-8 py-6 lg:py-0 md:py-0">
          {socialAccounts?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              target="blank"
            >
              <span className="w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-sky-300 hover:border-sky-300 text-lightText hover:text-sky-300 duration-200 hover:scale-125">
                {item?.icon}
              </span>
            </a>
          ))}
        </div>
        <div className="w-[1px] h-20 bg-sky-300 hidden lg:block md:block"></div>
      </div>
    </>
  );
};

export default SocialLInks;