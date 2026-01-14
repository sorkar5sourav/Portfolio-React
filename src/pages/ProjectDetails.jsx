import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { ArrowLeft, ExternalLink, Github, Code } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold  mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-20 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 -600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        {/* Project Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Project Header */}
        <div className=" rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4">
            {project.name}
          </h1>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue font-medium rounded-lg flex items-center gap-2"
              >
                <Code size={16} />
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-4">
            {project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.repoLink !== "#" && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300  font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className=" rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold  mb-4">Description</h2>
          <p className=" leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Challenges */}
        <div className=" rounded-xl shadow-orange-400 shadow-lg p-6 md:p-8 mb-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold  mb-4">Challenges</h2>
          <p className=" leading-relaxed text-lg">{project.challenges}</p>
        </div>

        {/* Future Improvements */}
        <div className=" rounded-xl shadow-green-400 shadow-lg p-6 md:p-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold  mb-4">Future Plans</h2>
          <p className=" leading-relaxed text-lg">{project.improvements}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
