import { motion } from "framer-motion";
import { Download, Github, Linkedin, Facebook } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download - will be updated with actual PDF later
    // For now, create a simple text file as placeholder
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual PDF path: "/resume/Sorkar_Sourav_Resume.pdf"
    link.download = "Sorkar_Sourav_Resume.pdf";
    // Note: Replace "#" with actual PDF file path when resume is ready
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            variants={itemVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Hi, I'm <span className="text-blue-600">Sorkar Sourav</span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700"
                variants={itemVariants}
              >
                Junior Fullstack Web Developer
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-600 italic"
                variants={itemVariants}
              >
                Specializing in Frontend
              </motion.p>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 font-medium pt-4"
              variants={itemVariants}
            >
              Solving complex problems with{" "}
              <span className="text-blue-600 font-bold">Math</span> &{" "}
              <span className="text-purple-600 font-bold">Code</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/400x400?text=Sorkar+Sourav"
                    alt="Sorkar Sourav"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
