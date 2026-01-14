import { GraduationCap, Code, Puzzle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* My Journey Section */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold ">My Journey</h3>
              </div>

              <div className="space-y-4  leading-relaxed">
                <p className="text-lg">
                  My journey began with a{" "}
                  <span className="font-semibold text-blue-600">
                    B.Sc. in Mathematics
                  </span>
                  , where I developed a deep appreciation for logic, algorithms,
                  and computational thinking. Mathematics taught me to break
                  down complex problems into manageable components—a skill that
                  translates seamlessly into programming.
                </p>

                <p className="text-lg">
                  I transitioned to coding because{" "}
                  <span className="font-semibold text-purple-600">
                    programming is applied logic
                  </span>
                  . Starting with foundational languages like{" "}
                  <span className="font-medium">C/C++</span> and{" "}
                  <span className="font-medium">Python</span>, I discovered my
                  passion for building solutions that make a difference. Today,
                  I specialize in the
                  <span className="font-semibold text-blue-600">
                    {" "}
                    React ecosystem
                  </span>
                  , creating dynamic and user-friendly web applications.
                </p>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-start gap-3">
                    <Code className="text-blue-600 mt-1" size={24} />
                    <p className="">
                      <span className="font-semibold">Work Style:</span> I love
                      building user-friendly interfaces and optimizing
                      workflows. Every line of code I write is crafted with the
                      end-user in mind, ensuring intuitive experiences and
                      efficient performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Beyond Coding Section */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Puzzle className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold ">
                  Beyond Coding
                </h3>
              </div>

              <div className="space-y-4  leading-relaxed">
                <p className="text-lg">
                  When I'm not coding, I enjoy challenging my mind with{" "}
                  <span className="font-semibold text-purple-600">
                    algorithmic puzzles
                  </span>
                  . These puzzles keep my problem-solving skills sharp and often
                  inspire creative approaches to real-world development
                  challenges.
                </p>

                <p className="text-lg">
                  I believe that a well-rounded developer is someone who
                  continuously learns and explores. Whether it's diving into a
                  new algorithm, exploring a different programming paradigm, or
                  simply taking time to think through a complex problem, I'm
                  always seeking ways to grow both personally and
                  professionally.
                </p>

                <div className="mt-6 p-6 bg-linear-to-br from-purple-50 to-blue-50 rounded-lg">
                  <p className=" italic text-lg">
                    "The best code is not just functional—it's elegant,
                    maintainable, and solves real problems for real people."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
