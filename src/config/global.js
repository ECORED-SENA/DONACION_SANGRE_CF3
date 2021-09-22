export default {
  global: {
    componenteFormativo:
      'Acciones para generar cultura de la donación de sangre ',
    descripcionCurso:
      'En este componente el aprendiz abordará las acciones que un promotor debe tener en cuenta al momento de realizar una estrategia educativa para promover la donación voluntaria y habitual de sangre, siguiendo los criterios normativos y técnicos establecidos por el nivel nacional. Así mismo, le permitirá al estudiante explorar y conocer la importancia de los estudios de conocimientos, actitudes y prácticas para identificar los mitos y falsas creencias que tiene la población con respecto a la donación de sangre, y así poder centrar su atención en los mismos y aclarar dichas dudas a través de la creación de estrategias de información, sensibilización y educación, herramientas de comunicación asertiva y medios de comunicación, conllevando a una cultura de donación de sangre, basada en argumentos de tipo social.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Acciones para generar cultura de la donación de sangre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Estudios de conocimientos, actitudes y prácticas en donación de sangre',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Boletín técnico: estrategias asociadas a promoción de la donación de sangre',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mercadeo en salud',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.4',
            titulo: 'Mercadeo social',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.5',
            titulo: 'Servicio a los donantes de sangre',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Proyecto de cohesión social',
            hash: 't_1_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Metodológico y Pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Magda Juliana Rodríguez Rodríguez',
        cargo: 'Experta Temática',
        centro: 'Red Nacional Bancos de Sangre y Servicio de Transfusión.',
      },
      {
        nombre: 'Mauricio Hernán Bonilla Contreras',
        cargo: 'Experto Temático',
        centro: 'Red Nacional Bancos de Sangre y Servicio de Transfusión.',
      },
      {
        nombre: 'Olga Maritza Berrio Pérez',
        cargo: 'Experta Temática',
        centro: 'Red Nacional Bancos de Sangre y Servicio de Transfusión.',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte Organizacional',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'Maria Camila Ovalle Ospina',
          'María Natalia Maldonado Delgado',
          'Wilson Andres Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Charry, L., Perdomo, A., Pulido, Y. (2013). Conocimientos, actitudes y prácticas sobre donación de sangre, personal de salud. Universidad Surcolombiana.',
    },
    {
      referencia:
        'Comunidad Económica Europea. (2011). Manual de gestión de donantes proyecto Domaine.',
      link:
        'https://www.mscbs.gob.es/profesionales/saludPublica/medicinaTransfusional/publicaciones/docs/Manual_Gestion_Donantes.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud – INS. (2011). Boletín técnico: la promoción de la donación voluntaria y habitual de sangre.',
      link:
        'https://www.ins.gov.co/direcciones/redessaludpublica/donacionsangre/publicaciones/forms/allitems.aspx?paged=true&pagedprev=true&p%255fsortbehavior=0&p%255fmodified=20190621+15:48:13&p%255fid=98&pagefirstrow=2051&view=%7B9ba0dcd5-959b-429c-b4fe-0852977b2162%7D',
    },
    {
      referencia:
        'Instituto Nacional de Salud - INS. (2009). Resultados de la investigación de la promoción de la donación voluntaria de sangre como agente de cohesión social.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud de Costa Rica. (2020). Mercadeo Social en salud: conceptos, principios y herramientas. ',
      link:
        'https://bibliotecapromocion.msp.gob.ec/greenstone/collect/promocin/index/assoc/HASH8ed8.dir/doc.pdf',
    },
    {
      referencia:
        'Ministerio de Sanidad y Consumo España. (2006). Criterios básicos para la selección de donantes de sangre y componentes.',
      link:
        'https://www.mscbs.gob.es/profesionales/saludPublica/medicinaTransfusional/publicaciones/docs/criteriosBasicosTomoII_2006_030907.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud OPS. (2005). Manual hagamos la diferencia.',
      link: 'https://iris.paho.org/handle/10665.2/31336',
    },
    {
      referencia:
        'Peñaloza, B., Prieto, C. y Rodríguez, I. (2012). Mercadeo en salud. Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Pérez, L. y Vásquez, P. (2017). Conocimientos y Mitos en la donación de sangre en estudiantes de enfermería de 2° a 4° año de una Universidad privada de Lima. Universidad Peruana Cayetano Heredia.',
      link: '',
    },
    {
      referencia:
        'Santay, O. (2018) Evaluación de la calidad en la atención al donador en un banco de sangre de Guatemala. Universidad de San Carlos de Guatemala.',
      link: '',
    },
    {
      referencia:
        'Vásquez, M., Ibarra, P. y Maldonado, M. (2007). Conocimientos y actitudes hacia la donación de sangre en una población universitaria de Chile. Revista Panamericana de Salud Pública, 22(5). p. 323–328.',
      link: '',
    },
  ],

  glosario: [
    {
      termino: 'Autocuidado de la salud',
      significado:
        'conjunto de actitudes y aptitudes para ejecutar de manera consciente y voluntaria, actividades encaminadas a preservar la salud y prevenir enfermedades.',
    },
    {
      termino: 'Cohesión social',
      significado:
        'grado de consenso o de acuerdo, de los miembros de un grupo social sobre la percepción de pertenencia a un proyecto o situación en común. Es una medida de la fuerza de la interacción social dentro del grupo; puede ser medible por medio de un test de índices o simplemente descrito o definido para cada caso, es decir puede ser de carácter cualitativo o cuantitativo.',
    },
    {
      termino: 'Donante de sangre habitual',
      significado:
        'persona entre los 18 y los 65 años que dona sangre de manera periódica: al menos, una o dos veces por año, durante toda su vida.',
    },
    {
      termino: 'Encuestas CAP',
      significado:
        'encuestas cuyo propósito es determinar el conocimiento, actitudes y prácticas (CAP), de una población sobre un aspecto y/o problema específico en estudio.',
    },
    {
      termino: 'Hipovolemia',
      significado:
        'disminución del volumen total de sangre que circula por el cuerpo, por causas fisiológicas o patológicas.',
    },
    {
      termino: 'Mercadeo en salud',
      significado:
        'disciplina que tiene un sinnúmero de aplicaciones en el campo de la salud pública, a través de un diseño estratégico, con el que pretende promover y reforzar hábitos y estilos de vida saludables con un enfoque de promoción y prevención.',
    },
    {
      termino: 'Mercadeo social',
      significado:
        'combinación de técnicas de marketing pero que no busca promocionar productos o servicios, sino que quiere, principalmente, difundir alguna idea que ayude a superar problemas sociales.',
    },
    {
      termino: 'Mitos sobre la donación de sangre',
      significado:
        'creencias arraigadas de manera popular entre la gente, que no tiene ningún soporte científico y que, por lo tanto, no son verdaderas.',
    },
    {
      termino: 'Promoción de la donación de sangre',
      significado:
        'proceso de ayuda a las personas para que opten ser donantes a lo largo de toda su vida y que implica la observancia de principios bioéticos, como: la autonomía del hombre y el altruismo para brindar su sangre, o algunos de sus componentes, para ser empleados en pacientes que los requieren. Este proceso requiere que se le brinde a los donantes plena información de los detalles del procedimiento, sus objetivos y los riesgos a los que se somete, y con todos estos elementos en su poder dar su consentimiento escrito.',
    },
    {
      termino: 'Seguridad transfusional',
      significado:
        'según la Organización Mundial de la Salud, es el garantizar que todas las personas tengan acceso a sangre y productos sanguíneos lo más seguros posible, a un costo razonable y en cantidades suficientes para satisfacer sus necesidades.',
    },
  ],
  complementario: [
    {
      texto:
        'Organización Panamericana de la Salud - OPS. (2005). Manual hagamos la diferencia. Organización Panamericana de la Salud.',
      tipo: 'Manual',
      link: 'downloads/complementario/Hagamosdiferencia-spa.pdf',
    },
    {
      texto:
        'Cabezas, A., y Chambueta, A. (2018). El ABC de la promoción para la donación habitual de sangre. SEA.',
      tipo: 'Página WEB del SEA',
      link:
        'http://seaasesores.com/el-abc-de-la-promocion-para-la-donacion-habitual-de-sangre/',
    },
    {
      texto:
        'Boyd, S., Celiz, J. (2015). Plan de comunicación para la promoción de la donación voluntaria de sangre. [Tesis de grado]. Universidad Tecnológica del Perú.',
      tipo: 'Tesis para licenciado en ciencias de la comunicación.',
      link: 'downloads/complementario/0821350-0811144.pdf',
    },
    {
      texto:
        'Organización Panamericana de la Salud. (2005). Guía metodológica para investigación de aspectos socio-culturales relacionados con donación voluntaria de sangre. Organización Panamericana de la Salud.',
      tipo: 'Guía',
      link: 'https://iris.paho.org/handle/10665.2/31092',
    },
    {
      texto:
        'Pérez, P., Vásquez, L., y Echegaray, C. (2017). Conocimientos y mitos en la donación de sangre en estudiantes de Enfermería del 2do al 4to año de una universidad privada de Lima. [Tesis de grado]. Universidad Peruana Cayetano Heredia.',
      tipo: 'Tesis para optar el título de licenciada en enfermería.',
      link: 'https://repositorio.upch.edu.pe/handle/20.500.12866/3586',
    },
    {
      texto:
        'Turki, A., y Batool, A. (2019). Uso de las redes sociales en el proceso de donación de sangre en Arabia Saudita Journal of Blood Medicine, (10), 417-423.',
      tipo: 'Artículo científico.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6914660/',
    },
  ],
}
