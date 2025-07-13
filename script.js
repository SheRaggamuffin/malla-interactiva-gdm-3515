const ramos = [
  { nombre: "Tecnología y Fundamentos de los Medios Audiovisuales", abre: ["Recursos Técnicos de la Industria del Entretenimiento", "Posproducción Audiovisual (Cine, TV, Multimedia)"] },
  { nombre: "Taller de Producción Audiovisual (TV, Radio, Cine y Medios Digitales)", abre: ["Taller de Producción y Realización Audiovisual 1 (Entretenimiento)"] },
  { nombre: "Expresión Oral y Escrita" },
  { nombre: "Taller de Producción de Espectáculos" },
  { nombre: "Introducción a la Hospitalidad" },
  { nombre: "Gestión y Organización de Eventos 1", abre: ["Gestión y Organización de Eventos 2"] },
  { nombre: "Teoría de la Comunicación" },
  { nombre: "Taller Multimedia" },
  { nombre: "Empresas de Entretenimiento", abre: ["Emprendimientos de Empresas de Entretenimiento"] },
  { nombre: "Gestión Contable de la Empresa de Hospitalidad" },
  { nombre: "Recursos Técnicos de la Industria del Entretenimiento" },
  { nombre: "Producción Periodística" },
  { nombre: "Historia del Entretenimiento" },
  { nombre: "Sociología del Ocio" },
  { nombre: "Economía de la Industria del Entretenimiento", abre: ["Modelos de Negocios en la Industria del Entretenimiento", "Finanzas Aplicadas a la Industria del Entretenimiento"] },
  { nombre: "Gestión y Organización de Eventos 2" },
  { nombre: "Guión", abre: ["Taller de Producción y Realización Audiovisual 2 (Ficción)"] },
  { nombre: "Artes Visuales y Escénicas" },
  { nombre: "Gerenciamiento de Proyectos" },
  { nombre: "Marketing de Servicios Para la Industria de la Hospitalidad", abre: ["Campañas Aplicadas a la Industria del Entretenimiento"] },
  { nombre: "Posproducción Audiovisual (Cine, TV, Multimedia)" },
  { nombre: "Taller de Producción y Realización Audiovisual 1 (Entretenimiento)" },
  { nombre: "Dirección Artística" },
  { nombre: "Convergencia y Paradigmas Tecnológicos" },
  { nombre: "Modelos de Negocios en la Industria del Entretenimiento", abre: ["Trabajo Integrador Final"] },
  { nombre: "Optativa 1" },
  { nombre: "Taller de Producción y Realización Audiovisual 2 (Ficción)" },
  { nombre: "Grandes Personalidades de la Cultura Argentina" },
  { nombre: "Metodologías y Técnicas de Investigación Cuantitativa y Cualitativa" },
  { nombre: "Campañas Aplicadas a la Industria del Entretenimiento" },
  { nombre: "Optativa 2" },
  { nombre: "Diseño y Organización de Grandes Espectáculos y Megaeventos" },
  { nombre: "Inglés" },
  { nombre: "Dirección Estratégica y de Recursos" },
  { nombre: "Emprendimientos de Empresas de Entretenimiento" },
  { nombre: "Optativa 3" },
  { nombre: "Marco Regulatorio e Instrumentos Jurídicos de las Empresas de Entretenimientos" },
  { nombre: "Representación y Management de Artistas y Deportistas" },
  { nombre: "Finanzas Aplicadas a la Industria del Entretenimiento" },
  { nombre: "Trabajo Integrador Final" },
  { nombre: "Práctica Profesional" }
];

const estado = {};
const grid = document.getElementById('malla');

// Inicializar estado
ramos.forEach(r => {
  estado[r.nombre] = {
    aprobado: false,
    habilitado: !ramos.some(r2 => r2.abre?.includes(r.nombre))
  };
});

// Renderizado de la malla
function render() {
  grid.innerHTML = '';
  ramos.forEach(r => {
    const div = document.createElement('div');
    div.className = 'ramo';
    if (estado[r.nombre].aprobado) div.classList.add('aprobado');
    if (estado[r.nombre].habilitado) div.classList.add('habilitado');

    const title = document.createElement('h3');
    title.textContent = r.nombre;

    const btn = document.createElement('button');
    btn.textContent = estado[r.nombre].aprobado ? "Aprobado" : "Aprobar";
    btn.disabled = !estado[r.nombre].habilitado || estado[r.nombre].aprobado;
    btn.onclick = () => aprobarRamo(r.nombre);

    div.appendChild(title);
    div.appendChild(btn);
    grid.appendChild(div);
  });
}

// Función para aprobar ramos
function aprobarRamo(nombre) {
  estado[nombre].aprobado = true;
  const ramo = ramos.find(r => r.nombre === nombre);
  if (ramo.abre) {
    ramo.abre.forEach(n => {
      estado[n].habilitado = true;
    });
  }
  render();
}

// Inicial
render();
