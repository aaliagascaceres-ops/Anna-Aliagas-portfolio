/* ============================================================
   ANNA ALIAGAS · Portfolio
   ============================================================
   ESTRUCTURA:
   - projects[] → datos base en castellano (fallback)
   - projectI18n{} → traducciones por proyecto a CA y EN
   - ui{}        → traducciones de la UI (estática) a CA / ES / EN
   - applyLanguage(lang) cambia el idioma de toda la web

   PARA AÑADIR UN PROYECTO NUEVO:
   1. Añade un objeto a `projects` con los datos en castellano
   2. (Opcional) Añade traducciones a `projectI18n[id]`
   ============================================================ */

const projects = [
  {
    id: "lina",
    title: "LINA",
    category: "industrial",
    categoryLabel: "Diseño industrial",
    year: 2025,
    client: "Proyecto propio",
    type: "Diseño industrial",
    description:
      "Proyecto académico desarrollado en el grado. LINA es un asiento blando pensado para entornos de oficina flexibles — versátil, apto tanto para interior como para exterior, invita a pausar sin rigidez.",
    process:
      "El proyecto arranca estudiando cómo se habitan los espacios de trabajo híbridos. A partir de maquetas y renders, se afina una forma envolvente que absorbe la postura sin imponerla, con una estructura ligera y un asiento tapizado que combina confort y durabilidad en interior y exterior.",
    tools: ["Fusion 360", "Maqueta 1:5", "Textil"],
    award: false,
    cover: "images/lina-01.jpg",
    gallery: [
      "images/lina-01.jpg",
      "images/lina-02.jpg",
      "images/lina-03.jpg",
      "images/lina-04.jpg"
    ]
  },
  {
    id: "ali-bey",
    title: "ALI-BEY",
    category: "grafico",
    categoryLabel: "Diseño gráfico",
    year: 2025,
    client: "Proyecto propio",
    type: "Diseño de identidad corporativa",
    description:
      "Proyecto académico: identidad corporativa para una marca ficticia de deporte y aventura. El sistema incluye manual de marca, cartelería y una línea de merchandising pensada para el terreno.",
    process:
      "La marca parte de un logotipo modular que dialoga con el paisaje — montaña, agua, roca — dando una familia visual coherente pero mutante.",
    tools: ["Illustrator", "InDesign", "Photoshop"],
    award: false,
    cover: "images/alibey-01.jpg",
    gallery: [
      "images/alibey-01.jpg",
      "images/alibey-02.jpg",
      "images/alibey-03.jpg",
      "images/alibey-04.jpg",
      "images/alibey-05.jpg",
      "images/alibey-06.jpg",
      "images/alibey-07.jpg"
    ]
  },
  {
    id: "xmneia",
    title: "XMNEIA",
    category: "efimero",
    categoryLabel: "Montajes efímeros",
    year: 2026,
    client: "Llum BCN",
    type: "Montajes efímeros",
    description:
      "Instalación lumínica desarrollada en equipo para Llum BCN 2026, premiada en la categoría Reflexions. La pieza representa la figura de una chimenea de la antigua central eléctrica de Poblenou, rememorando el pasado y proyectando una visión de futuro. Además del diseño, me encargué de la gestión de redes sociales del proyecto (@somllumub).",
    process:
      "Construida con madera, mallas y LEDs, la pieza recompone la silueta de la chimenea como un volumen luminoso que dialoga con la memoria del barrio.",
    tools: ["Madera", "Mallas", "LEDs"],
    award: true,
    awardDetail: "Premio · Llum BCN 2026",
    externalLink: {
      label: "Ver proyecto en Llum BCN",
      url: "https://www.barcelona.cat/llumbcn/en/installations/2026/xmneia-lultim-ale"
    },
    cover: "images/xmneia-01.jpg",
    gallery: [
      "images/xmneia-01.jpg",
      "images/xmneia-02.jpg",
      "images/xmneia-03.jpg"
    ]
  },
  {
    id: "finestres",
    title: "FINESTRES",
    category: "efimero",
    categoryLabel: "Montajes efímeros",
    year: 2026,
    client: "Propuesta a concurso",
    type: "Montajes efímeros",
    description:
      "FINESTRES explora la idea de la conexión a través de una intervención en la pared principal del vestíbulo, transformándola en una superficie narrativa y emocional.\n\nEl proyecto se basa en una retícula modular de 24 × 24 cm que organiza el espacio de manera estructurada. Sobre esta base, se integran fragmentos de cartón pluma que sugieren sutilmente los mapas de España y Europa.\n\nEn contraste con esta estructura, aparecen «ventanas» dispuestas de forma aparentemente aleatoria, cada una representando una historia, un instante cotidiano o una vida anónima.\n\nUbicación: Avenida Diagonal 579, Barcelona.",
    process:
      "Una serie de planos translúcidos dispuestos en secuencia hace que el espacio se vea distinto desde cada posición. Lo que se revela depende de quién mira.",
    tools: ["Madera", "Vidrio", "Luz natural"],
    award: false,
    cover: "images/finestres-01.jpg",
    gallery: ["images/finestres-01.jpg", "images/finestres-02.jpg"]
  },
  {
    id: "pompadour",
    title: "Rediseño Pompadour",
    category: "industrial",
    categoryLabel: "Diseño industrial",
    year: 2026,
    client: "Proyecto propio",
    type: "Diseño industrial",
    description:
      "Ejercicio académico de rediseño gráfico y estructural del packaging de té Pompadour — una relectura de la marca que pone en valor el ritual y la variedad sin perder familiaridad.",
    process:
      "Se reorganiza la jerarquía tipográfica, se introduce un sistema cromático por familia de té y se revisa la caja para hacerla más intuitiva en el lineal.",
    tools: ["Illustrator", "Maqueta", "Impresión"],
    award: false,
    cover: "images/pompadour-01.jpg",
    gallery: [
      "images/pompadour-01.jpg",
      "images/pompadour-02.jpg",
      "images/pompadour-03.jpg",
      "images/pompadour-04.jpg",
      "images/pompadour-05.jpg"
    ]
  },
  {
    id: "glownest",
    title: "Glownest & Co",
    category: "grafico",
    categoryLabel: "Diseño gráfico",
    year: 2025,
    client: "Proyecto propio",
    type: "Diseño gráfico",
    description:
      "Proyecto académico de diseño de interfaz para una marca ficticia de cosmética ecológica y sostenible. Un sistema responsivo que acompaña a la usuaria entre ordenador y móvil.",
    process:
      "El sistema se construye sobre una retícula suave, con tipografía serif para lo editorial y detalles tipo ficha de producto inspirados en el herbolario.",
    tools: ["Figma", "Illustrator"],
    award: false,
    cover: "images/glownest-01.jpg",
    gallery: [
      "images/glownest-01.jpg",
      "images/glownest-02.jpg",
      "images/glownest-03.jpg",
      "images/glownest-04.jpg"
    ]
  },
  {
    id: "the-crunch",
    title: "The Crunch",
    category: "grafico",
    categoryLabel: "Diseño gráfico",
    year: 2026,
    client: "Proyecto propio",
    type: "Diseño gráfico",
    description:
      "Carta y pequeña identidad para una cafetería, acompañada de ilustraciones propias que dan personalidad al menú.",
    process:
      "Cada plato tiene su propio dibujo, hecho a mano. La carta se lee como un cuaderno, cercana y casi editorial.",
    tools: ["Procreate", "InDesign"],
    award: false,
    cover: "images/crunch-01.jpg",
    gallery: [
      "images/crunch-01.jpg",
      "images/crunch-02.jpg",
      "images/crunch-03.jpg"
    ]
  },
  {
    id: "emergent",
    title: "EMERGENT",
    category: "grafico",
    categoryLabel: "Diseño gráfico",
    year: 2025,
    client: "Proyecto propio",
    type: "Diseño gráfico",
    description:
      "Diseño de cartel para un festival ficticio de artistas musicales emergentes. Exploración gráfica entre la rotulación callejera, el póster de concierto y la imagen editorial.",
    process:
      "La tipografía principal se trabaja como una escultura líquida, casi metálica, que dialoga con una silueta fantasmal del público. El cartel existe en tres variantes —mockup de pared, versión limpia y una derivada más sucia— para mostrar la familia completa.",
    tools: ["Photoshop", "Illustrator"],
    award: false,
    cover: "images/emergent-01.jpg",
    gallery: [
      "images/emergent-01.jpg",
      "images/emergent-02.jpg",
      "images/emergent-03.jpg"
    ]
  }
];

/* ============================================================
   PROJECT TRANSLATIONS (CA + EN; ES is the default in projects[])
   ============================================================ */

const projectI18n = {
  "lina": {
    ca: {
      categoryLabel: "Disseny industrial",
      type: "Disseny industrial",
      client: "Projecte propi",
      description:
        "Projecte acadèmic desenvolupat al grau. LINA és un seient tou pensat per a entorns d'oficina flexibles — versàtil, apte tant per a interior com per a exterior, convida a fer una pausa sense rigidesa.",
      process:
        "El projecte arrenca estudiant com s'habiten els espais de treball híbrids. A partir de maquetes i renders, s'afina una forma envolvent que absorbeix la postura sense imposar-la, amb una estructura lleugera i un seient entapissat que combina confort i durabilitat en interior i exterior.",
      tools: ["Fusion 360", "Maqueta 1:5", "Tèxtil"]
    },
    en: {
      categoryLabel: "Industrial design",
      type: "Industrial design",
      client: "Personal project",
      description:
        "Academic project developed during my degree. LINA is a soft seat designed for flexible office environments — versatile, suitable for both indoor and outdoor use, it invites you to pause without rigidity.",
      process:
        "The project starts by studying how hybrid work spaces are inhabited. Through models and renders, an enveloping form is refined that absorbs the posture without imposing it, with a light structure and an upholstered seat that combines comfort and durability indoors and outdoors.",
      tools: ["Fusion 360", "Scale model 1:5", "Textile"]
    }
  },
  "ali-bey": {
    ca: {
      categoryLabel: "Disseny gràfic",
      type: "Disseny d'identitat corporativa",
      client: "Projecte propi",
      description:
        "Projecte acadèmic: identitat corporativa per a una marca fictícia d'esport i aventura. El sistema inclou manual de marca, cartelleria i una línia de merchandising pensada per al terreny.",
      process:
        "La marca parteix d'un logotip modular que dialoga amb el paisatge — muntanya, aigua, roca — donant una família visual coherent però mutant.",
      tools: ["Illustrator", "InDesign", "Photoshop"]
    },
    en: {
      categoryLabel: "Graphic design",
      type: "Corporate identity design",
      client: "Personal project",
      description:
        "Academic project: corporate identity for a fictional sports and adventure brand. The system includes a brand manual, signage and a merchandise line designed for the field.",
      process:
        "The brand starts from a modular logo that dialogues with the landscape — mountain, water, rock — providing a coherent but shifting visual family.",
      tools: ["Illustrator", "InDesign", "Photoshop"]
    }
  },
  "xmneia": {
    ca: {
      categoryLabel: "Muntatges efímers",
      type: "Muntatges efímers",
      client: "Llum BCN",
      description:
        "Instal·lació lumínica desenvolupada en equip per a Llum BCN 2026, premiada en la categoria Reflexions. La peça representa la figura d'una xemeneia de l'antiga central elèctrica del Poblenou, rememorant el passat i projectant una visió de futur. A més del disseny, em vaig encarregar de la gestió de xarxes socials del projecte (@somllumub).",
      process:
        "Construïda amb fusta, malles i LEDs, la peça recompon la silueta de la xemeneia com un volum lluminós que dialoga amb la memòria del barri.",
      tools: ["Fusta", "Malles", "LEDs"],
      awardDetail: "Premi · Llum BCN 2026",
      externalLinkLabel: "Veure projecte a Llum BCN"
    },
    en: {
      categoryLabel: "Ephemeral installations",
      type: "Ephemeral installations",
      client: "Llum BCN",
      description:
        "Light installation developed as a team for Llum BCN 2026, awarded in the Reflexions category. The piece represents the silhouette of a chimney from the old Poblenou power plant, recalling the past and projecting a vision of the future. Beyond design, I also handled the project's social media (@somllumub).",
      process:
        "Built with wood, mesh and LEDs, the piece reassembles the chimney's silhouette as a luminous volume that engages with the neighborhood's memory.",
      tools: ["Wood", "Mesh", "LEDs"],
      awardDetail: "Award · Llum BCN 2026",
      externalLinkLabel: "View project on Llum BCN"
    }
  },
  "finestres": {
    ca: {
      categoryLabel: "Muntatges efímers",
      type: "Muntatges efímers",
      client: "Proposta a concurs",
      description:
        "FINESTRES explora la idea de la connexió a través d'una intervenció a la paret principal del vestíbul, transformant-la en una superfície narrativa i emocional.\n\nEl projecte es basa en una retícula modular de 24 × 24 cm que organitza l'espai de manera estructurada. Sobre aquesta base, s'integren fragments de cartró ploma que suggereixen subtilment els mapes d'Espanya i Europa.\n\nEn contrast amb aquesta estructura, apareixen «finestres» disposades de forma aparentment aleatòria, cadascuna representant una història, un instant quotidià o una vida anònima.\n\nUbicació: Avinguda Diagonal 579, Barcelona.",
      process:
        "Una sèrie de plans translúcids disposats en seqüència fa que l'espai es vegi diferent des de cada posició. El que es revela depèn de qui mira.",
      tools: ["Fusta", "Vidre", "Llum natural"]
    },
    en: {
      categoryLabel: "Ephemeral installations",
      type: "Ephemeral installations",
      client: "Competition proposal",
      description:
        "FINESTRES explores the idea of connection through an intervention on the main wall of the lobby, turning it into a narrative and emotional surface.\n\nThe project is based on a modular grid of 24 × 24 cm that organizes the space in a structured way. On top of this base, foam-board fragments are integrated, subtly suggesting the maps of Spain and Europe.\n\nIn contrast with this structure, «windows» appear in an apparently random arrangement, each one representing a story, a daily moment or an anonymous life.\n\nLocation: Avinguda Diagonal 579, Barcelona.",
      process:
        "A series of translucent planes arranged in sequence makes the space look different from each position. What is revealed depends on who is looking.",
      tools: ["Wood", "Glass", "Natural light"]
    }
  },
  "pompadour": {
    ca: {
      categoryLabel: "Disseny industrial",
      type: "Disseny industrial",
      client: "Projecte propi",
      description:
        "Exercici acadèmic de redisseny gràfic i estructural del packaging de te Pompadour — una relectura de la marca que posa en valor el ritual i la varietat sense perdre familiaritat.",
      process:
        "Es reorganitza la jerarquia tipogràfica, s'introdueix un sistema cromàtic per família de te i es revisa la capsa per fer-la més intuïtiva al lineal.",
      tools: ["Illustrator", "Maqueta", "Impressió"],
      title: "Redisseny Pompadour"
    },
    en: {
      categoryLabel: "Industrial design",
      type: "Industrial design",
      client: "Personal project",
      description:
        "Academic exercise of graphic and structural redesign of Pompadour tea packaging — a re-reading of the brand that highlights the ritual and the variety without losing familiarity.",
      process:
        "The typographic hierarchy is reorganised, a colour system per tea family is introduced and the box is revisited to make it more intuitive on the shelf.",
      tools: ["Illustrator", "Mock-up", "Print"],
      title: "Pompadour Redesign"
    }
  },
  "glownest": {
    ca: {
      categoryLabel: "Disseny gràfic",
      type: "Disseny gràfic",
      client: "Projecte propi",
      description:
        "Projecte acadèmic de disseny d'interfície per a una marca fictícia de cosmètica ecològica i sostenible. Un sistema responsiu que acompanya la usuària entre ordinador i mòbil.",
      process:
        "El sistema es construeix sobre una retícula suau, amb tipografia serif per a l'editorial i detalls tipus fitxa de producte inspirats en l'herbolari.",
      tools: ["Figma", "Illustrator"]
    },
    en: {
      categoryLabel: "Graphic design",
      type: "Graphic design",
      client: "Personal project",
      description:
        "Academic interface design project for a fictional eco-friendly and sustainable cosmetics brand. A responsive system that accompanies the user between desktop and mobile.",
      process:
        "The system is built on a soft grid, with serif typography for editorial detail and product-card touches inspired by the herbalist's shop.",
      tools: ["Figma", "Illustrator"]
    }
  },
  "the-crunch": {
    ca: {
      categoryLabel: "Disseny gràfic",
      type: "Disseny gràfic",
      client: "Projecte propi",
      description:
        "Carta i petita identitat per a una cafeteria, acompanyada d'il·lustracions pròpies que donen personalitat al menú.",
      process:
        "Cada plat té el seu propi dibuix, fet a mà. La carta es llegeix com un quadern, propera i gairebé editorial.",
      tools: ["Procreate", "InDesign"]
    },
    en: {
      categoryLabel: "Graphic design",
      type: "Graphic design",
      client: "Personal project",
      description:
        "Menu and small identity for a coffee shop, accompanied by my own illustrations that give personality to the menu.",
      process:
        "Each dish has its own hand-drawn illustration. The menu reads like a notebook — close and almost editorial.",
      tools: ["Procreate", "InDesign"]
    }
  },
  "emergent": {
    ca: {
      categoryLabel: "Disseny gràfic",
      type: "Disseny gràfic",
      client: "Projecte propi",
      description:
        "Disseny de cartell per a un festival fictici d'artistes musicals emergents. Exploració gràfica entre la retolació de carrer, el cartell de concert i la imatge editorial.",
      process:
        "La tipografia principal es treballa com una escultura líquida, gairebé metàl·lica, que dialoga amb una silueta fantasmal del públic. El cartell existeix en tres variants —mockup de paret, versió neta i una derivada més bruta— per mostrar la família completa.",
      tools: ["Photoshop", "Illustrator"]
    },
    en: {
      categoryLabel: "Graphic design",
      type: "Graphic design",
      client: "Personal project",
      description:
        "Poster design for a fictional festival of emerging musical artists. A graphic exploration between street lettering, concert posters and editorial imagery.",
      process:
        "The main typography is treated as a liquid, almost metallic sculpture that dialogues with a ghostly silhouette of the audience. The poster exists in three variants —wall mockup, clean version and a grittier derivation— to show the full family.",
      tools: ["Photoshop", "Illustrator"]
    }
  }
};

/* ============================================================
   UI TRANSLATIONS (static texts marked with data-i18n / data-i18n-html)
   ============================================================ */

const ui = {
  ca: {
    "brand.role": "Dissenyadora multidisciplinar",
    "nav.about": "Sobre mi",
    "nav.contact": "Contacte",
    "hero.label.role": "B — ROL",
    "hero.label.base": "C — BASE",
    "hero.label.available": "D — DISPONIBLE",
    "hero.available": "Pràctiques & col·laboracions",
    "hero.section": "§ INTRODUCCIÓ",
    "hero.tag":
      "Pràctica de disseny entre l'objecte, la imatge i <em class=\"hl-rose\">l'espai</em> — amb una mirada oberta al quotidià.",
    "hero.cta": "Veure treball <span class=\"arrow\">↘</span>",
    "work.title": "Selected Work",
    "work.subtitle": "/Projectes seleccionats",
    "filter.all": "Tot",
    "filter.industrial": "Industrial",
    "filter.grafico": "Gràfic",
    "filter.efimero": "Efímer",
    "about.title": "Sobre mi",
    "label.intro": "INTRODUCCIÓ",
    "about.claim":
      "Soc Anna Aliagas, <em class=\"serif-italic rose\">estudiant.</em>",
    "about.p1":
      "Els meus projectes solen moure's entre l'objecte, la imatge i l'espai, explorant com el disseny pot transformar la percepció i generar nous significats. M'interessa especialment la relació entre el disseny industrial i el gràfic, on la funcionalitat i la narrativa es troben.",
    "about.p2":
      "Treballo des d'una mirada oberta i exploratòria. M'agrada donar la volta al quotidià, reinterpretant elements coneguts per convertir-los en alguna cosa nova. No segueixo un estil tancat: adapto l'enfocament a cada projecte, deixant que l'experimentació i el procés defineixin el resultat.",
    "label.base": "BASE",
    "label.formacion": "FORMACIÓ",
    "label.idiomas": "IDIOMES",
    "label.disponible": "DISPONIBLE",
    "about.languages": "Castellà, Català, Anglès",
    "about.available": "Pràctiques · Col·laboracions",
    "label.intereses": "INTERESSOS",
    "label.enfoque": "ENFOCAMENT",
    "interest.1": "La il·lustració com a eina narrativa",
    "interest.2": "Objectes industrials i exploració material",
    "interest.3": "Identitat visual i branding",
    "interest.4": "Disseny espacial i efímer",
    "interest.5": "Reinterpretació del quotidià",
    "approach.1": "Reinterpretar el familiar per generar noves lectures.",
    "approach.2": "Procés creatiu obert, no restrictiu.",
    "approach.3": "Equilibri entre concepte i funció.",
    "approach.4": "Experimentar fent — maquetes, proves, iteració.",
    "approach.5": "Pensament interdisciplinari.",
    "label.capacidades": "CAPACITATS",
    "caps.title": "Eines, mètodes i disciplines amb què treballo.",
    "label.herramientas": "EINES",
    "label.metodos": "MÈTODES",
    "label.disciplinas": "DISCIPLINES",
    "method.1": "Maquetes",
    "method.2": "Prototipat",
    "method.3": "Desenvolupament conceptual",
    "method.4": "Narrativa visual",
    "method.5": "Direcció gràfica",
    "method.6": "Identitat",
    "discipline.1": "Disseny industrial",
    "discipline.2": "Disseny gràfic",
    "discipline.3": "Packaging",
    "discipline.4": "Instal·lació efímera",
    "discipline.6": "Il·lustració",
    "contact.title": "Contacte<span class=\"dot-accent\">.</span>",
    "contact.lead":
      "Estic oberta a pràctiques, col·laboracions i petits encàrrecs.<br>Escriu-me i t'explico com treballo.",
    "contact.cta": "Escriu-me",
    "footer.copy": "© 2026 — Anna Aliagas. Tots els drets reservats.",
    "modal.year": "ANY",
    "modal.client": "CLIENT",
    "modal.type": "TIPOLOGIA",
    "modal.process": "PROCÉS",
    "modal.tools": "EINES",
    "modal.more": "VEURE MÉS"
  },
  es: {
    "brand.role": "Diseñadora multidisciplinar",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.label.role": "B — ROL",
    "hero.label.base": "C — BASE",
    "hero.label.available": "D — DISPONIBLE",
    "hero.available": "Prácticas & colaboraciones",
    "hero.section": "§ INTRODUCCIÓN",
    "hero.tag":
      "Práctica de diseño entre el objeto, la imagen y <em class=\"hl-rose\">el espacio</em> — con una mirada abierta a lo cotidiano.",
    "hero.cta": "Ver trabajo <span class=\"arrow\">↘</span>",
    "work.title": "Selected Work",
    "work.subtitle": "/Proyectos seleccionados",
    "filter.all": "Todo",
    "filter.industrial": "Industrial",
    "filter.grafico": "Gráfico",
    "filter.efimero": "Efímero",
    "about.title": "Sobre mí",
    "label.intro": "INTRODUCCIÓN",
    "about.claim":
      "Soy Anna Aliagas, <em class=\"serif-italic rose\">estudiante.</em>",
    "about.p1":
      "Mis proyectos suelen moverse entre el objeto, la imagen y el espacio, explorando cómo el diseño puede transformar la percepción y generar nuevos significados. Me interesa especialmente la relación entre el diseño industrial y el gráfico, donde la funcionalidad y la narrativa se encuentran.",
    "about.p2":
      "Trabajo desde una mirada abierta y exploratoria. Me gusta darle la vuelta a lo cotidiano, reinterpretando elementos conocidos para convertirlos en algo nuevo. No sigo un estilo cerrado: adapto mi enfoque a cada proyecto, dejando que la experimentación y el proceso definan el resultado.",
    "label.base": "BASE",
    "label.formacion": "FORMACIÓN",
    "label.idiomas": "IDIOMAS",
    "label.disponible": "DISPONIBLE",
    "about.languages": "Español, Catalán, Inglés",
    "about.available": "Prácticas · Colaboraciones",
    "label.intereses": "INTERESES",
    "label.enfoque": "ENFOQUE",
    "interest.1": "La ilustración como herramienta narrativa",
    "interest.2": "Objetos industriales y exploración material",
    "interest.3": "Identidad visual y branding",
    "interest.4": "Diseño espacial y efímero",
    "interest.5": "Reinterpretación de lo cotidiano",
    "approach.1": "Reinterpretar lo familiar para generar nuevas lecturas.",
    "approach.2": "Proceso creativo abierto, no restrictivo.",
    "approach.3": "Equilibrio entre concepto y función.",
    "approach.4": "Experimentar haciendo — maquetas, pruebas, iteración.",
    "approach.5": "Pensamiento interdisciplinar.",
    "label.capacidades": "CAPACIDADES",
    "caps.title": "Herramientas, métodos y disciplinas con las que trabajo.",
    "label.herramientas": "HERRAMIENTAS",
    "label.metodos": "MÉTODOS",
    "label.disciplinas": "DISCIPLINAS",
    "method.1": "Maquetas",
    "method.2": "Prototipado",
    "method.3": "Desarrollo conceptual",
    "method.4": "Narrativa visual",
    "method.5": "Dirección gráfica",
    "method.6": "Identidad",
    "discipline.1": "Diseño industrial",
    "discipline.2": "Diseño gráfico",
    "discipline.3": "Packaging",
    "discipline.4": "Instalación efímera",
    "discipline.6": "Ilustración",
    "contact.title": "Contacto<span class=\"dot-accent\">.</span>",
    "contact.lead":
      "Estoy abierta a prácticas, colaboraciones y pequeños encargos.<br>Escríbeme y te cuento cómo trabajo.",
    "contact.cta": "Escríbeme",
    "footer.copy": "© 2026 — Anna Aliagas. Todos los derechos reservados.",
    "modal.year": "AÑO",
    "modal.client": "CLIENTE",
    "modal.type": "TIPOLOGÍA",
    "modal.process": "PROCESO",
    "modal.tools": "HERRAMIENTAS",
    "modal.more": "VER MÁS"
  },
  en: {
    "brand.role": "Multidisciplinary designer",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.label.role": "B — ROLE",
    "hero.label.base": "C — BASE",
    "hero.label.available": "D — AVAILABLE",
    "hero.available": "Internships & collaborations",
    "hero.section": "§ INTRODUCTION",
    "hero.tag":
      "Design practice between object, image and <em class=\"hl-rose\">space</em> — with an open gaze on the everyday.",
    "hero.cta": "View work <span class=\"arrow\">↘</span>",
    "work.title": "Selected Work",
    "work.subtitle": "/Selected projects",
    "filter.all": "All",
    "filter.industrial": "Industrial",
    "filter.grafico": "Graphic",
    "filter.efimero": "Ephemeral",
    "about.title": "About",
    "label.intro": "INTRODUCTION",
    "about.claim":
      "I'm Anna Aliagas, <em class=\"serif-italic rose\">student.</em>",
    "about.p1":
      "My projects move between object, image and space, exploring how design can transform perception and generate new meanings. I'm especially interested in the link between industrial and graphic design, where function and narrative meet.",
    "about.p2":
      "I work from an open and exploratory perspective. I like to flip the everyday around, reinterpreting familiar elements to turn them into something new. I don't follow a fixed style: I adapt my approach to each project, letting experimentation and process shape the outcome.",
    "label.base": "BASED IN",
    "label.formacion": "EDUCATION",
    "label.idiomas": "LANGUAGES",
    "label.disponible": "AVAILABLE FOR",
    "about.languages": "Spanish, Catalan, English",
    "about.available": "Internships · Collaborations",
    "label.intereses": "INTERESTS",
    "label.enfoque": "APPROACH",
    "interest.1": "Illustration as a narrative tool",
    "interest.2": "Industrial objects and material exploration",
    "interest.3": "Visual identity and branding",
    "interest.4": "Spatial and ephemeral design",
    "interest.5": "Reinterpreting the everyday",
    "approach.1": "Reinterpret the familiar to generate new readings.",
    "approach.2": "Open creative process, not restrictive.",
    "approach.3": "Balance between concept and function.",
    "approach.4": "Learn by making — models, tests, iteration.",
    "approach.5": "Interdisciplinary thinking.",
    "label.capacidades": "CAPABILITIES",
    "caps.title": "Tools, methods and disciplines I work with.",
    "label.herramientas": "TOOLS",
    "label.metodos": "METHODS",
    "label.disciplinas": "DISCIPLINES",
    "method.1": "Models",
    "method.2": "Prototyping",
    "method.3": "Concept development",
    "method.4": "Visual narrative",
    "method.5": "Art direction",
    "method.6": "Identity",
    "discipline.1": "Industrial design",
    "discipline.2": "Graphic design",
    "discipline.3": "Packaging",
    "discipline.4": "Ephemeral installation",
    "discipline.6": "Illustration",
    "contact.title": "Contact<span class=\"dot-accent\">.</span>",
    "contact.lead":
      "Open to internships, collaborations and small commissions.<br>Drop me a line and I'll tell you how I work.",
    "contact.cta": "Write to me",
    "footer.copy": "© 2026 — Anna Aliagas. All rights reserved.",
    "modal.year": "YEAR",
    "modal.client": "CLIENT",
    "modal.type": "TYPE",
    "modal.process": "PROCESS",
    "modal.tools": "TOOLS",
    "modal.more": "READ MORE"
  }
};

/* ============================================================
   LANGUAGE LOGIC
   ============================================================ */

const SUPPORTED_LANGS = ["ca", "es", "en"];
let currentLang = (() => {
  const saved = localStorage.getItem("annaLang");
  return SUPPORTED_LANGS.includes(saved) ? saved : "ca";
})();

function pField(p, field) {
  // Per-project translations: try projectI18n first, fall back to base (ES) data
  const tr = projectI18n[p.id] && projectI18n[p.id][currentLang];
  if (tr && tr[field] !== undefined) return tr[field];
  return p[field];
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "ca";
  currentLang = lang;
  try { localStorage.setItem("annaLang", lang); } catch (_) {}
  document.documentElement.lang = lang;

  // Static UI strings
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = ui[lang] && ui[lang][key];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const text = ui[lang] && ui[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });

  // Active language button
  document.querySelectorAll(".lang-switcher button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Re-render dynamic content
  renderGrid(currentFilter);
  if (modal && !modal.hidden && activeProject) {
    openModal(activeProject.id);
  }
}

/* ============================================================
   RENDER (grid + modal)
   ============================================================ */

const grid = document.getElementById("projectsGrid");

function renderGrid(filter = "todo") {
  grid.innerHTML = "";
  const list = filter === "todo" ? projects : projects.filter(p => p.category === filter);

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.category = p.category;
    card.dataset.id = p.id;

    const img = p.cover
      ? `<img src="${p.cover}" alt="${pField(p, "title") || p.title}" loading="lazy" />`
      : `<div class="placeholder">${p.title}</div>`;

    const badgeWord =
      currentLang === "en" ? "AWARD" :
      currentLang === "ca" ? "PREMI" : "PREMIO";
    const badge = p.award ? `<span class="card-badge">★ ${badgeWord}</span>` : "";
    const titleText = pField(p, "title") || p.title;
    const meta = `${pField(p, "categoryLabel")}${p.year ? " · " + p.year : ""}`;

    card.innerHTML = `
      <div class="card-img">${badge}${img}</div>
      <div class="card-info">
        <div>
          <h3>${titleText}</h3>
          <p>${meta}</p>
        </div>
        <span class="card-arrow">↗</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(p.id));
    grid.appendChild(card);
  });
}

function updateCounts() {
  const counts = {
    todo: projects.length,
    industrial: projects.filter(p => p.category === "industrial").length,
    grafico: projects.filter(p => p.category === "grafico").length,
    efimero: projects.filter(p => p.category === "efimero").length
  };
  document.getElementById("projectCount").textContent = String(counts.todo).padStart(2, "0");
  document.getElementById("cTodo").textContent = String(counts.todo).padStart(2, "0");
  document.getElementById("cIndustrial").textContent = String(counts.industrial).padStart(2, "0");
  document.getElementById("cGrafico").textContent = String(counts.grafico).padStart(2, "0");
  document.getElementById("cEfimero").textContent = String(counts.efimero).padStart(2, "0");
}

/* ===============  FILTERS  =============== */

let currentFilter = "todo";

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGrid(currentFilter);
  });
});

/* ===============  MODAL  =============== */

const modal = document.getElementById("projectModal");
const galMain = document.getElementById("galMain");
const galThumbs = document.getElementById("galThumbs");
const galCurrent = document.getElementById("galCurrent");
const galTotal = document.getElementById("galTotal");

let activeProject = null;
let galIndex = 0;

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  activeProject = p;
  galIndex = 0;

  // Header
  const orderIdx = projects.findIndex(x => x.id === id) + 1;
  const typeText = pField(p, "type") || pField(p, "categoryLabel");
  document.getElementById("modalCatLabel").textContent =
    `${String(orderIdx).padStart(2, "0")} — ${typeText.toUpperCase()}`;
  document.getElementById("modalTitle").textContent = pField(p, "title") || p.title;

  // Meta
  document.getElementById("modalYear").textContent = p.year || "—";
  document.getElementById("modalClient").textContent = pField(p, "client") || "—";
  document.getElementById("modalType").textContent = typeText;

  // Description / process — multi-paragraph support
  const toParagraphs = (txt) =>
    (txt || "")
      .split(/\n\s*\n/)
      .map(s => s.trim())
      .filter(Boolean)
      .map(par => `<p>${par.replace(/\n/g, "<br>")}</p>`)
      .join("");

  const descFallback = {
    ca: "<p>Informació del projecte properament.</p>",
    es: "<p>Información del proyecto próximamente.</p>",
    en: "<p>Project info coming soon.</p>"
  };
  const procFallback = {
    ca: "<p>Procés per definir.</p>",
    es: "<p>Proceso por definir.</p>",
    en: "<p>Process to be defined.</p>"
  };

  document.getElementById("modalDesc").innerHTML =
    toParagraphs(pField(p, "description")) || descFallback[currentLang];
  document.getElementById("modalProcess").innerHTML =
    toParagraphs(pField(p, "process")) || procFallback[currentLang];

  // Tools
  const toolsEl = document.getElementById("modalTools");
  toolsEl.innerHTML = "";
  const tools = pField(p, "tools");
  if (tools && tools.length) {
    tools.forEach(t => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      toolsEl.appendChild(span);
    });
  } else {
    toolsEl.innerHTML = `<span class="tag" style="color: var(--text-muted)">—</span>`;
  }

  // Award pill
  const awardEl = document.getElementById("modalAward");
  if (p.award) {
    awardEl.hidden = false;
    document.getElementById("modalAwardText").textContent =
      pField(p, "awardDetail") || (currentLang === "en" ? "Award" : currentLang === "ca" ? "Premi" : "Premio");
  } else {
    awardEl.hidden = true;
  }

  // External link ("Ver más" / "Veure més" / "Read more")
  const extraEl = document.getElementById("modalExtraBlock");
  if (p.externalLink && p.externalLink.url) {
    extraEl.hidden = false;
    document.getElementById("modalExtraLink").href = p.externalLink.url;
    const linkLabel =
      pField(p, "externalLinkLabel") ||
      (p.externalLink && p.externalLink.label) ||
      (currentLang === "en" ? "View more" : currentLang === "ca" ? "Veure més" : "Ver más");
    document.getElementById("modalExtraLabel").textContent = linkLabel;
  } else {
    extraEl.hidden = true;
  }

  renderGallery();

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeProject = null;
}

function renderGallery() {
  if (!activeProject) return;
  const imgs = activeProject.gallery && activeProject.gallery.length
    ? activeProject.gallery
    : (activeProject.cover ? [activeProject.cover] : []);

  galTotal.textContent = String(Math.max(imgs.length, 1)).padStart(2, "0");
  galCurrent.textContent = String(galIndex + 1).padStart(2, "0");

  if (imgs.length) {
    galMain.innerHTML = `<img src="${imgs[galIndex]}" alt="${activeProject.title} ${galIndex + 1}" />`;
  } else {
    galMain.innerHTML = `<div class="placeholder">${activeProject.title}</div>`;
  }

  galThumbs.innerHTML = "";
  imgs.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.className = i === galIndex ? "active" : "";
    btn.innerHTML = `<img src="${src}" alt="" />`;
    btn.addEventListener("click", () => {
      galIndex = i;
      renderGallery();
    });
    galThumbs.appendChild(btn);
  });
}

document.querySelectorAll("[data-close]").forEach(el =>
  el.addEventListener("click", closeModal)
);

document.querySelector(".gal-nav.prev").addEventListener("click", () => {
  if (!activeProject) return;
  const total = activeProject.gallery.length || 1;
  galIndex = (galIndex - 1 + total) % total;
  renderGallery();
});
document.querySelector(".gal-nav.next").addEventListener("click", () => {
  if (!activeProject) return;
  const total = activeProject.gallery.length || 1;
  galIndex = (galIndex + 1) % total;
  renderGallery();
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") document.querySelector(".gal-nav.prev").click();
  if (e.key === "ArrowRight") document.querySelector(".gal-nav.next").click();
});

/* ===============  CLOCK BCN  =============== */

function updateClock() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Madrid",
    hour12: false
  });
  document.getElementById("time").textContent = fmt.format(now) + " BCN";
}
updateClock();
setInterval(updateClock, 30 * 1000);

/* ===============  COPY EMAIL  =============== */

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.innerHTML;
      const copied = currentLang === "en" ? "Copied" : currentLang === "ca" ? "Copiat" : "Copiado";
      btn.innerHTML = `<span class="ic">✓</span> ${copied}`;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove("copied");
      }, 1800);
    } catch (err) {
      console.warn("Clipboard error", err);
    }
  });
});

/* ===============  LANGUAGE SWITCHER  =============== */

document.querySelectorAll(".lang-switcher button").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

/* ===============  INIT  =============== */

updateCounts();
applyLanguage(currentLang);
