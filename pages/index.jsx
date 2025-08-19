import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

const projects = [
  {
    title: 'Aplicación Móvil Iñap',
    desc: 'Aplicación móvil para el Instituto Nacional Autónomo de Investigaciones Agropecuarias en Quevedo para predicción de crecimiento de maíz forrajero.',
    link: '#',
    tech: ['Android Studio', 'Java', 'Flask', 'PythonAnywhere', 'Postman'],
    image: '/images/projects/iñap/iñap.png',
    github: 'https://github.com/Henry2812'
  },
  {
    title: 'Sistema Web E-commerce',
    desc: 'Aplicación web para el comercio electrónico con panel analítico para la toma de decisiones, dashboards con métricas y KPI.',
    link: 'https://healthinformaticsjournal.com/index.php/IJMI/article/view/1310/1216',
    tech: ['PHP', 'Loocker Studio', 'phpMyAdmin', 'Bootstrap', 'Paypal', 'Hostinger'],
    image: '/images/projects/web/webE.jpg',
    github: 'https://healthinformaticsjournal.com/index.php/IJMI/article/view/1310/1216'
  },
  {
    title: 'Aplicación Movil de Inglés',
    desc: 'Aplicación con autenticación de usuarios y BD en tiempo real, vocabulario, temas en bloques para aprender inglés por niveles y pruebas acumulativas.',
    link: 'https://david-arreaga.vercel.app',
    tech: ['Flutter', 'Dart', 'Cloud Firestore', 'Firebase Authentication'],
    image: '/images/projects/english/english.png',
    github: 'https://github.com/Henry2812'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const experiences = [
    {
      company: 'Iñap',
      role: 'Desarrollador Móvil Full Stack',
      period: '2024 - 2025 - Presente',
      description: 'Desarrollé y diseñé prototipos hasta llegar a la versión final de una App móvil para el Instituto Nacional de Autónomo de Investigaciones Agropecuarias IÑAP en Quevedo utilizando Android Studio y PythonAnyware.\nContribuí ampliamente con la conversión de modelos.pkl para predicción de crecimiento de maíz forrajero entrenados en Google Colab con Scikit-learn.\nPropuse utilizar e implementé Flask, un microframework de Python, para construir el backend de la aplicación, con la API alojada en PythonAnywhere utilizando su plan gratuito.\nEsta combinación permitió desarrollar un backend funcional y, potencialmente, escalable, especialmente útil para el departamento de I+D de Iñap.\nDesarrollé el Frontend utilizando Android Studio con consumo de la API vía HTTP garantizando la funcionalidad y la experiencia del usuario.\nColaboré con investigadores y otros profesionales del campo para asegurar que la aplicación cumpliera con los requisitos técnicos y funcionales.',
      technologies: ['Python', 'Android SDK (Java)', 'Django & Flask', 'Pandas, NumPy, Scikit-learn', 'Postman', 'PythonAnywhere']
    },
    {
      company: 'Aplicación Web E-commerce',
      role: 'Desarrollador',
      period: '2024',
      description: () => (
        <div className="space-y-2 text-justify">
          <p className="flex items-baseline">
            <span className="text-indigo-400 mr-2 flex-shrink-0">▹</span>
            <span>Desarrollamos un modelo de software para mejorar la gestión de empresas mediante herramientas de comercio electrónico.</span>
          </p>
          <p className="flex items-baseline">
            <span className="text-indigo-400 mr-2 flex-shrink-0">▹</span>
            <span>Desarrollé e implemente dashboards con métricas y KPI para la toma de decisiones utilizando Loocker Studio.</span>
          </p>
          <p className="flex items-baseline">
            <span className="text-indigo-400 mr-2 flex-shrink-0">▹</span>
            <span>Contribuí con la implementación de una pasarela de pagos en línea utilizando Paypal.</span>
          </p>
          <p className="flex items-baseline">
            <span className="text-indigo-400 mr-2 flex-shrink-0">▹</span>
            <span>Producto de este trabajo en conjunto se desarrolló un artículo científico publicado en la revista{' '}
              <a 
                href="https://healthinformaticsjournal.com/index.php/IJMI/article/view/1310" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 decoration-dotted hover:decoration-solid transition-colors duration-200 inline-flex items-center"
              >
                Frontiers in Health Informatics
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </span>
          </p>
        </div>
      ),
      technologies: ['PHP', 'Loocker Studio', 'MySQL', 'Paypal', 'Power BI', 'phpMyAdmin', 'Hostinger']
    },
    {
      company: 'Desarrollador Móvil',
      role: 'Aplicación Móvil de Ingles',
      period: '2024',
      description: 'Desarrollé un aplicativo móvil personalizado con Authentication Login, Register y Reset password con Firebase. \n Desarrollé módulos de Aprendizaje por niveles bloqueados por fases. \n Desarrollé e implementé Pruebas acumulativas para la finalización de cada módulo. \n Use e implementé librerías de video para la reproducción de archivos mp4. \n Use e implementé Cloud Firestore para guardar los datos de los usuarios en colecciones con Firebase.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP']
    },
    {
      company: 'Freelance',
      role: 'Portafolio Personal',
      period: '2025 - Presente',
      description: 'Desarrollé y diseñé sitio web personal para mostrar proyectos y habilidades.\n Desarrollé una experiencia interactiva con Framer Motion y un diseño moderno con Tailwind CSS.\n Añadí efectos de movimiento y transiciones suaves para mejorar la experiencia del usuario.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion']
    },
  ];

  // Generar partículas aleatorias
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.05,
      delay: Math.random() * 5
    }));
  }, []);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
    cursorX.set(clientX);
    cursorY.set(clientY);
  }, [cursorX, cursorY]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden"
    >
      {/* Fondo interactivo */}
      <div
        className="fixed inset-0 -z-10 w-screen h-screen"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(72, 88, 236, 0.25),
              transparent 30%
            ),
            linear-gradient(to bottom, #0f172a, #071033, #030615)
          `
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-violet-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-8 sm:py-12">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-4 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="text-lg sm:text-xl">DA</span>
            </motion.div>
            <div className="relative">
              <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-300">
                David Arreaga
              </h1>
              <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
                <span className="text-indigo-400">const</span> <span className="text-pink-400">role</span> =
                <span className="text-emerald-300"> 'Full Stack Developer'</span>;
              </p>
            </div>
          </motion.div>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden p-2 -mr-2 text-slate-400 hover:text-indigo-400 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú de navegación */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center gap-1 fixed md:static inset-0 bg-slate-900/95 md:bg-transparent z-50 flex flex-col justify-center md:flex-row`}>
            <button 
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-indigo-400 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {[
              { name: 'Sobre Mí', id: 'about' },
              { name: 'Experiencia', id: 'experiencia' },
              { name: 'Proyectos', id: 'proyectos' },
              { name: 'Contáctame', id: 'contacto' }
            ].map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-6 py-3 md:px-4 md:py-2 text-lg md:text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors relative group w-full md:w-auto text-center md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">
                  <span className="text-indigo-400 font-mono mr-1">0{i + 1}.</span>
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/CV-DAVID.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:ml-2 px-6 py-2.5 md:px-4 md:py-2 text-sm font-medium bg-slate-800/50 hover:bg-slate-700/50 text-indigo-300 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all flex items-center mt-4 md:mt-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Mi CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </nav>
          
          {/* Overlay para cerrar menú */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              aria-label="open menu"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <section id="sobre-mi" className="relative py-12 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto a la izquierda */}
            <motion.div
              className="lg:col-span-7 order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.p
                className="text-lg sm:text-xl text-indigo-400 font-mono mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hola, mi nombre es
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                David Arreaga.
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                  Desarrollador Full Stack
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ingeniero en Sistemas con experiencia en desarrollo de aplicaciones web, móviles y dashboards analíticos. Apasionado por crear soluciones tecnológicas que resuelven problemas reales con un enfoque en rendimiento, seguridad y experiencia de usuario.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#proyectos"
                  className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg border border-slate-700 text-slate-200 font-medium hover:bg-slate-800/50 hover:border-slate-600 transition-colors"
                >
                  Contáctame
                </a>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-4 text-sm text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-baseline">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 mt-1.5 flex-shrink-0 animate-pulse"></span>
                  <span>Disponible para oportunidades</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-300">Servicios:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Desarrollador', 'HelpDesk', 'Páginas web'].map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-800/50 text-xs rounded-full border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Tarjeta con imagen a la derecha */}
            <motion.div
              className="lg:col-span-5 order-2 lg:order-2 mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-70 group-hover:opacity-100 blur-md transition-all duration-300 group-hover:duration-200"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-1 border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
                  <div className="rounded-xl overflow-hidden border border-slate-700/50">
                    <div className="aspect-w-16 aspect-h-9 bg-slate-900/50 relative">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border-2 border-dashed border-indigo-500/30 flex items-center justify-center">
                          <span className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">DA</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-700/50 border border-slate-600/50">
                          <img
                            src="/images/profile/iconWeb.jpg"
                            alt="David Arreaga"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=David+Arreaga&background=0f172a&color=fff&size=256`;
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">David Arreaga</h3>
                          <p className="text-sm text-slate-400">Ingeniero en Sistemas</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-4">
                        Especializado en crear experiencias digitales excepcionales con un enfoque en rendimiento y usabilidad.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Web', 'Móvil', 'Datos', 'UI/UX'].map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-800/70 text-xs rounded-full border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
                <span className="text-indigo-400 font-mono">01.</span> Sobre Mí
                <span className="ml-4 h-px bg-slate-700 flex-1 max-w-[200px] hidden sm:inline-block relative top-[-10px]"></span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    ¡Hola! Soy David, un apasionado desarrollador web y móvil con experiencia en la creación de aplicaciones modernas y eficientes. Mi viaje en el desarrollo de software comenzó cuando aprendí a programación en mi colegio, hice mi primer proyecto en Java con NetBeans IDE y decidí crear mi primer sitio web y desde entonces no he dejado de aprender y crecer en este campo.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Actualmente, me enfoco en desarrollar aplicaciones web utilizando tecnologías como <span className="text-indigo-300">Next.js</span>, <span className="text-indigo-300">React</span>, <span className="text-indigo-300">Node.js</span> y bases de datos modernas. Me apasiona crear experiencias de usuario excepcionales y soluciones técnicas robustas, además de ocasionalmente ensamblar equipos y darle mantenimiento a los mismos fisica o remota.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {[
                      'JavaScript',
                      'React',
                      'Node.js',
                      'TypeScript',
                      'Next.js',
                      'Tailwind CSS',
                      'Firebase',
                      'Postman',
                      'Google Colab',
                      'Python', 
                      'Android SDK',
                      'Django',
                      'Flask',
                      'PHP',
                      'Laravel',
                      'Flutter & Dart'
                    ].map((tech, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-indigo-400 mr-2">▹</span>
                        <span className="text-slate-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-70 group-hover:opacity-100 blur-md transition-all duration-300 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-0.5 border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
                    <div className="bg-slate-900/80 rounded-md p-6">
                      <img
                        src="/images/profile/profile.jpg"
                        alt="David Arreaga"
                        className="rounded-lg w-full max-w-xs mx-auto object-cover shadow-lg shadow-indigo-500/20"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=David+Arreaga&background=0f172a&color=fff&size=400`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-16 sm:py-20 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
                <span className="text-indigo-400 font-mono">02.</span> Experiencia Laboral
                <span className="ml-4 h-px bg-slate-700 flex-1 max-w-[200px] hidden sm:inline-block relative top-[-10px]"></span>
              </h2>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto pb-2 md:pb-0 md:overflow-visible">
                  {experiences.map((job, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 text-left border-b-2 md:border-l-2 md:border-b-0 whitespace-nowrap ${index === activeTab
                          ? 'border-indigo-400 text-indigo-400'
                          : 'border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500'
                        } transition-colors`}
                    >
                      {job.company}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  {experiences.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`${index === activeTab ? 'block' : 'hidden'}`}
                    >
                      <h3 className="text-xl font-bold text-white">
                        {job.role} <span className="text-indigo-400">@ {job.company}</span>
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">{job.period}</p>
                      <div className="text-slate-300">
                        {typeof job.description === 'function' ? (
                          job.description()
                        ) : (
                          job.description.split('\n').map((line, i) => (
                            <p key={i} className="flex items-baseline mb-2">
                              <span className="text-indigo-400 mr-2 flex-shrink-0">▹</span>
                              <span className="leading-relaxed">{line}</span>
                            </p>
                          ))
                        )}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-800/50 text-xs rounded-full border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-16 sm:py-20 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-mono text-indigo-400 mb-3">Mis trabajos recientes</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Proyectos Destacados
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-6 rounded-full"></div>
              <p className="text-lg text-slate-300">
                Una selección de mis proyectos más recientes que muestran mis habilidades y experiencia en desarrollo web y móvil.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 group-hover:border-indigo-500/30 transition-all duration-300 flex-1 flex flex-col">
                      {/* Project Image */}
                      <div className="relative pt-[56.25%] bg-slate-800/30 overflow-hidden group-has-[:hover]:bg-indigo-900/30 transition-colors duration-300">
                        {project.image ? (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/projects/placeholder.jpg';
                              }}
                            />
                            <div className="absolute inset-0 bg-indigo-600/70 opacity-100 group-hover:opacity-0 transition-opacity duration-300 mix-blend-multiply" />
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/5 to-purple-600/5">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border-2 border-dashed border-indigo-500/20 flex items-center justify-center">
                              <span className="text-3xl md:text-4xl">📊</span>
                            </div>
                          </div>
                        )}
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 cursor-pointer"
                        >
                          <span className="inline-flex items-center text-sm text-indigo-300 font-medium">
                            Ver proyecto
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </a>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                              {project.title}
                            </h3>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-indigo-400 transition-colors"
                              aria-label={`Ver ${project.title}`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </a>
                          </div>

                          <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                            {project.desc}
                          </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-slate-400 hover:text-indigo-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                              Ver en GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group relative"
              >
                <span className="relative">
                  ¿Tienes un proyecto en mente? Hablemos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block group-hover:translate-x-1 transition-transform -mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-indigo-400 font-mono text-sm mb-3">04.</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contáctame</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-slate-300 text-lg">
                ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en contactarme.
              </p>
            </motion.div>

            <motion.div
              className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:arreagad43@gmail.com" className="text-lg text-slate-300 hover:text-indigo-400 transition-colors">
                      arreagad43@gmail.com
                    </a>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/593979003453" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group w-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 14.4c-.3 0-.5-.1-.7-.2-.5-.2-1.2-.4-2.4-.8-.3-.1-.7-.3-.9-.5-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8.1-.1.5-.5.9-1.1.4-.5.6-1 .6-1.4 0-.4-.1-.7-.4-1-.2-.3-.5-.4-.9-.4-.2 0-.4 0-.6.1-.2.1-.4.2-.6.4-.2.2-.4.4-.6.6-.2.2-.5.5-.9.8-.3.3-.6.5-.9.6-.3.1-.6.1-.9 0-.3-.1-.6-.3-.9-.6l-1.4-1.4c-.3-.3-.5-.6-.6-1-.1-.3-.1-.7 0-1 .1-.3.3-.6.6-1 .3-.3.6-.6.8-.8.3-.2.5-.4.7-.6.2-.2.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2.1-.4.2-.6 0-.2 0-.4.1-.6.1-.2.2-.4.4-.6.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.6.4.2.2.4.4.6.6.2.2.4.4.6.6.2.2.4.3.6.4.2.1.5.2.7.2.2 0 .5 0 .7-.1.2 0 .5-.1.7-.2.2-.1.4-.2.6-.4.2-.2.3-.4.4-.6.1-.2.2-.4.2-.7 0-.2 0-.5-.1-.7-.1-.2-.2-.4-.3-.6-.1-.2-.3-.4-.5-.6-.2-.2-.4-.4-.7-.6-.2-.2-.5-.4-.7-.6-.3-.2-.5-.4-.8-.6-.3-.2-.5-.4-.8-.5-.6-.3-1.2-.5-1.8-.6-.3 0-.5-.1-.8-.1-.4 0-.7 0-1 .1-.3 0-.6.1-.9.2-.3.1-.6.2-.9.4-.3.1-.5.3-.8.5-.2.2-.5.4-.7.6l-1.4 1.4c-.4.4-.8.8-1.1 1.3-.3.5-.5 1.1-.6 1.7-.1.6-.1 1.2 0 1.8.1.6.2 1.2.5 1.8.2.6.6 1.1 1 1.6.4.5.9.9 1.5 1.3.6.4 1.2.7 1.9.9.7.2 1.4.3 2.1.3.7 0 1.4-.1 2.1-.3.7-.2 1.3-.5 1.9-.9.6-.4 1.1-.9 1.5-1.5.4-.6.7-1.2.9-1.9.2-.7.3-1.4.3-2.1 0-.3 0-.6-.1-.9-.1-.3-.2-.5-.4-.7z"></path>
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.7l-1.3 3.8 4-1.3c1.6 1.1 3.5 1.7 5.4 1.7 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.8 15.1c-.4.6-.9 1.1-1.5 1.5-.2.1-.4.2-.6.3-.2.1-.5.1-.8.1-.2 0-.5 0-.7-.1-.2 0-.5-.1-.7-.2-.2-.1-.5-.2-.8-.4-.3-.2-.6-.4-.9-.7-.3-.3-.6-.6-.9-.9-.2-.3-.4-.5-.6-.8-.1-.2-.3-.4-.4-.6-.1-.2-.2-.4-.3-.6-.1-.2-.1-.4-.2-.6 0-.2 0-.4.1-.6.1-.2.2-.4.4-.6.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.6.4.2.2.4.4.6.6.2.2.4.4.6.6.2.2.4.3.6.4.2.1.5.2.7.2.2 0 .5 0 .7-.1.2 0 .5-.1.7-.2.2-.1.4-.2.6-.4.2-.2.3-.4.4-.6.1-.2.2-.4.2-.7 0-.2 0-.5-.1-.7-.1-.2-.2-.4-.3-.6-.1-.2-.3-.4-.5-.6-.2-.2-.4-.4-.7-.6-.2-.2-.5-.4-.7-.6-.3-.2-.5-.4-.8-.6-.3-.2-.5-.4-.8-.5-.6-.3-1.2-.5-1.8-.6-.3 0-.5-.1-.8-.1-.4 0-.7 0-1 .1-.3 0-.6.1-.9.2-.3.1-.6.2-.9.4-.3.1-.5.3-.8.5-.2.2-.5.4-.7.6l-1.4 1.4c-.4.4-.8.8-1.1 1.3-.3.5-.5 1.1-.6 1.7-.1.6-.1 1.2 0 1.8.1.6.2 1.2.5 1.8.2.6.6 1.1 1 1.6.4.5.9.9 1.5 1.3.6.4 1.2.7 1.9.9.7.2 1.4.3 2.1.3.7 0 1.4-.1 2.1-.3.7-.2 1.3-.5 1.9-.9.6-.4 1.1-.9 1.5-1.5.4-.6.7-1.2.9-1.9.2-.7.3-1.4.3-2.1 0-.3 0-.6-.1-.9-.1-.3-.2-.5-.4-.7z"></path>
                  </svg>
                  <span>Enviar mensaje por WhatsApp</span>
                </a>
                
                <div className="flex justify-center gap-4 mt-4">
                  <a 
                    href="https://www.facebook.com/henrydavid084" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/henrydavid084/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-pink-500/20 hover:border-pink-500/50 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/Henry2812" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/david-a-8918221a3/" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:arreagad43@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} David Arreaga. Todos los derechos reservados.
              </p>
              <p className="text-slate-500 text-xs mt-2">
                Hecho con <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">Tailwind CSS</span> y <span className="text-indigo-400">Framer Motion</span>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
