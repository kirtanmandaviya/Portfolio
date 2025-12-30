import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowLeft, FaGithub } from 'react-icons/fa';
import projects from '../data/projects.json';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <FaArrowLeft />
          Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  <FaGithub />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Result
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.result}
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to start your project?
            </h3>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors hover:scale-105"
            >
              Let's Work Together
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
