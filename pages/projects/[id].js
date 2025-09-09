import Head from 'next/head';
import { useRouter } from 'next/router';
import ProjectTemplate from '../../components/ProjectTemplate';
import { getAllProjectIds, getProjectById } from '../../data/projects';

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false, // Muestra 404 si el ID no existe
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectById(params.id);
  return {
    props: {
      project,
    },
  };
}

export default function ProjectPage({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p>El proyecto que estás buscando no existe o ha sido eliminado.</p>
          <a 
            href="/#proyectos" 
            className="mt-6 inline-flex items-center text-indigo-400 hover:text-indigo-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver a proyectos
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | David Arreaga - Portafolio</title>
        <meta name="description" content={project.desc} />
        <meta property="og:title" content={`${project.title} | David Arreaga`} />
        <meta property="og:description" content={project.desc} />
        <meta property="og:image" content={`https://tudominio.com${project.image}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ProjectTemplate project={project} />
    </>
  );
}
