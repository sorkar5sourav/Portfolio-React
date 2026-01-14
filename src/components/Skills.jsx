import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";
import { Code, Server, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <Code className="text-blue-600" size={24} />;
      case "Backend":
        return <Server className="text-purple-600" size={24} />;
      case "Tools":
        return <Wrench className="text-green-600" size={24} />;
      default:
        return <Code className="-600" size={24} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Frontend":
        return "blue";
      case "Backend":
        return "purple";
      case "Tools":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50/10">
      <div className="mx-auto container px-4 sm:px-6 lg:px-20">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-4">
              Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg -600">
              Technologies and tools I work with
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const color = getCategoryColor(category.category);
            const colorClasses = {
              blue: {
                bg: "bg-blue-100",
                text: "text-blue-600",
                progress: "bg-blue-600",
                cardBorder: "border-blue-200",
              },
              purple: {
                bg: "bg-purple-100",
                text: "text-purple-600",
                progress: "bg-purple-600",
                cardBorder: "border-purple-200",
              },
              green: {
                bg: "bg-green-100",
                text: "text-green-600",
                progress: "bg-green-600",
                cardBorder: "border-green-200",
              },
            };

            const colors = colorClasses[color];

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className={` rounded-xl shadow-lg p-6 border-2 ${colors.cardBorder}`}
                  whileHover={{ y: -5, shadow: "xl" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      {getCategoryIcon(category.category)}
                    </div>
                    <h3 className="text-xl font-bold ">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium ">
                            {skill.name}
                          </span>
                          <span
                            className={`text-sm font-semibold ${colors.text}`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
