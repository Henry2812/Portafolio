export const projectsData = [
  {
    id: 'app-inap',
    title: 'Aplicación Móvil INIAP',
    desc: 'Aplicación móvil para el Instituto Nacional Autónomo de Investigaciones Agropecuarias en Quevedo para predicción de crecimiento de maíz forrajero.',
    longDescription: `La aplicación móvil para INIAP fue desarrollada con el objetivo de ayudar a los investigadores del instituto a predecir el crecimiento del maíz forrajero en la región de Quevedo. 

Esta herramienta permite a los agricultores e investigadores ingresar datos del cultivo y recibir predicciones precisas sobre el crecimiento, lo que facilita la toma de decisiones en el manejo del cultivo.

El proyecto fue desarrollado como parte de una colaboración entre el departamento de I+D de INIAP y la Universidad Técnica de Cotopaxi, con el objetivo de llevar la tecnología de punta al campo ecuatoriano.`,
    link: '#',
    tech: ['Android Studio', 'Java', 'Flask', 'PythonAnywhere', 'Postman'],
    image: '/images/projects/iñap/iñap.png',
    github: 'https://github.com/Henry2812',
    features: [
      'Predicción del crecimiento del maíz forrajero basada en datos históricos',
      'Interfaz intuitiva para agricultores e investigadores',
      'Protocolo de seguridad HTTPS',
      'Intuitiva y fácil de usar'
    ],
    challenges: [
      {
        title: 'Integración con modelos de ML',
        solution: 'Implementamos una API REST con Flask para servir los modelos de machine learning entrenados en Python, permitiendo una comunicación fluida con la aplicación móvil.'
      },
      {
        title: 'Rendimiento en dispositivos de gama baja',
        solution: 'Optimizamos el código y las imágenes para garantizar un rendimiento óptimo incluso en dispositivos con recursos limitados.'
      }
    ]
  },
  {
    id: 'ecommerce-web',
    title: 'Sistema Web E-commerce',
    desc: 'Aplicación web para el comercio electrónico con panel analítico para la toma de decisiones, dashboards con métricas y KPI.',
    longDescription: `Plataforma de comercio electrónico completa con sistema de gestión de inventario, procesamiento de pagos y panel analítico avanzado.

El sistema fue desarrollado para una PYME local que necesitaba una solución personalizada que se adaptara a sus necesidades específicas de negocio. La plataforma incluye un frontend atractivo para los clientes y un backend robusto para la administración.

La implementación de dashboards con métricas en tiempo real permitió a la empresa tomar decisiones basadas en datos, mejorando significativamente sus operaciones y ventas.`,
    link: 'https://healthinformaticsjournal.com/index.php/IJMI/article/view/1310/1216',
    tech: ['PHP', 'Loocker Studio', 'phpMyAdmin', 'Bootstrap', 'Paypal', 'Hostinger'],
    image: '/images/projects/web/webE.jpg',
    github: 'https://healthinformaticsjournal.com/index.php/IJMI/article/view/1310/1216',
    features: [
      'Catálogo de productos con búsqueda y filtros avanzados',
      'Procesamiento seguro de pagos con PayPal',
      'Panel de administración completo',
      'Sistema de gestión de inventario',
      'Dashboard analítico con KPIs y métricas en tiempo real'
    ],
    challenges: [
      {
        title: 'Integración de pagos segura',
        solution: 'Implementamos la API de PayPal con múltiples capas de seguridad y validación para garantizar transacciones seguras.'
      },
      {
        title: 'Rendimiento con grandes volúmenes de datos',
        solution: 'Optimizamos las consultas SQL e implementamos caché para manejar eficientemente grandes volúmenes de datos de productos y transacciones.'
      }
    ]
  },
  {
    id: 'english-app',
    title: 'Aplicación Móvil de Inglés',
    desc: 'Aplicación con autenticación de usuarios y BD en tiempo real, vocabulario, temas en bloques para aprender inglés por niveles y pruebas acumulativas.',
    longDescription: `Aplicación móvil educativa diseñada para facilitar el aprendizaje del inglés a través de un enfoque estructurado y gamificado.

La aplicación está dirigida a hispanohablantes que desean mejorar su nivel de inglés, ofreciendo lecciones organizadas por niveles de dificultad, desde principiante hasta avanzado.

Con un diseño intuitivo y contenido atractivo, los usuarios pueden aprender vocabulario, gramática y pronunciación de manera efectiva, mientras realizan un seguimiento de su progreso a lo largo del tiempo.`,
    link: 'https://david-arreaga.vercel.app',
    tech: ['Flutter', 'Dart', 'Cloud Firestore', 'Firebase Authentication'],
    image: '/images/projects/english/english.png',
    github: 'https://github.com/Henry2812',
    features: [
      'Aprendizaje por niveles con progreso guardado',
      'Sistema de autenticación de usuarios',
      'Ejercicios interactivos y pruebas acumulativas',
      'Integración de videos interactivos',
      'Funcionalidad offline para aprendizaje sin conexión'
    ],
    challenges: [
      {
        title: 'Sincronización de datos en tiempo real',
        solution: 'Utilizamos Cloud Firestore para mantener los datos de los usuarios sincronizados en todos sus dispositivos en tiempo real.'
      },
      {
        title: 'Experiencia de usuario fluida',
        solution: 'Implementamos animaciones personalizadas y transiciones suaves para crear una experiencia de usuario atractiva y sin interrupciones.'
      }
    ]
  }
];

export function getProjectById(id) {
  return projectsData.find(project => project.id === id);
}

export function getAllProjectIds() {
  return projectsData.map(project => ({
    params: {
      id: project.id
    }
  }));
}
