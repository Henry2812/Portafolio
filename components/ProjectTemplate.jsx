import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProjectTemplate = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto py-12">
        <Link href="/#proyectos" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a proyectos
        </Link>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/50"
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Columna derecha - Imagen */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/50 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-slate-200 mb-3">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center transition-colors w-full sm:w-auto justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 1 1 0 001.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Ver Proyecto
                </a>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center transition-colors w-full sm:w-auto justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Código Fuente
                </a>
              </div>
            </div>
            
            {/* Columna izquierda - Contenido */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">{project.title}</h1>
              
              <div className="prose prose-invert max-w-none mb-8">
                {project.longDescription ? (
                  <div className="space-y-4">
                    {project.longDescription.split('\n').map((paragraph, i) => (
                      <p key={i} className="text-slate-300">{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-300">{project.desc}</p>
                )}
              </div>

              {/* Secciones en columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {project.features && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-4 pb-2 border-b border-slate-700">
                      <svg className="h-6 w-6 text-indigo-400 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Características
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-4 pb-2 border-b border-slate-700">
                      <svg className="h-6 w-6 text-indigo-400 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Desafíos
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="bg-slate-800/30 p-3 rounded-lg">
                          <h4 className="font-medium text-indigo-300">{challenge.title}</h4>
                          <p className="text-slate-300 mt-1 text-sm">{challenge.solution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default ProjectTemplate;
