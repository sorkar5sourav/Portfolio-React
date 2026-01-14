import { GraduationCap, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Qualification = () => {
  return (
    <section id="experience" className="py-20 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-4">
              Qualification
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg -600">
              My educational background and professional experience
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold ">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Education Item */}
              <div className="relative pl-16 pb-8">
                <div className="absolute left-4 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold ">B.Sc. in Mathematics</h4>
                    <span className="text-sm -500  px-3 py-1 rounded-full">
                      Degree
                    </span>
                  </div>
                  <p className="-600 mb-3 font-medium">
                    [Your University Name]
                  </p>
                  <p className=" leading-relaxed">
                    Focus on{" "}
                    <span className="font-semibold text-blue-600">Logic</span>,{" "}
                    <span className="font-semibold text-blue-600">
                      Algorithms
                    </span>
                    , and{" "}
                    <span className="font-semibold text-blue-600">
                      Computational Math
                    </span>
                    . This foundation provided me with strong analytical
                    thinking and problem-solving skills that I apply daily in
                    software development.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold ">Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200"></div>

              {/* Experience Item */}
              <div className="relative pl-16 pb-8">
                <div className="absolute left-4 top-1 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-600">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold ">
                      Operations Associate & In-House Developer
                    </h4>
                    <span className="text-sm -500  px-3 py-1 rounded-full">
                      Current
                    </span>
                  </div>
                  <p className="-600 mb-3 font-medium">[Name of Pharmacy]</p>
                  <p className=" leading-relaxed">
                    Built a custom{" "}
                    <span className="font-semibold text-purple-600">
                      Inventory & Accounts Management App
                    </span>{" "}
                    to replace paper logs while working in sales. This solution
                    streamlined operations, improved accuracy, and demonstrated
                    my ability to identify problems and create practical
                    software solutions for real-world business needs.
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

export default Qualification;
