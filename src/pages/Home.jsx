import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-20 mt-20 mb-20">
        <Hero />
        <About />
        <Skills />
      </div>
      <div className="space-y-20">
        <Qualification />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
