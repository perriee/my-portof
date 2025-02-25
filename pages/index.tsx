import Head from "next/head";
import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";
import Education from "./education";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Ferry Febriansyah - Portfolio</title>
          <meta property="og:description" content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web." />
          <meta name="keywords" content="portfolio, web developer, Asp dot net developer, dot net developer, software engineer" />
          <meta name="author" content="Ferry Febriansyah" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:site_name" content="Ismael's Portfolio" />
          <meta property="og:url" content="https://devismael.com" />
          <meta property="og:title" content="Ferry Febriansyah - Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Backend Engineer" />
          <meta name="twitter:description" content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web." />
        </Head>
      </div>
      <About />
      <Experience />
      <Project />
      {/* <Education /> */}
      {/* <Certifications /> */}
      {/* <Contact /> */}
      <div className="mt-20">
        © {new Date().getFullYear()} Ferry Febriansyah.
      </div>
    </>
  );
}
