const tipoTexto = document.getElementById("tipoTexto");
const tono = document.getElementById("tono");
const titulo = document.getElementById("titulo");
const fecha = document.getElementById("fecha");
const lugar = document.getElementById("lugar");
const audiencia = document.getElementById("audiencia");
const hechos = document.getElementById("hechos");
const cita = document.getElementById("cita");
const responsable = document.getElementById("responsable");

const resultado = document.getElementById("resultado");
const contadorPalabras = document.getElementById("contadorPalabras");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const estadoRevision = document.getElementById("estadoRevision");

function obtenerFechaLegible(valorFecha) {
  if (!valorFecha) return "fecha por confirmar";

  const fechaObjeto = new Date(valorFecha + "T00:00:00");
  return fechaObjeto.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function frasePorTono(valorTono) {
  const frases = {
    institucional: "La institución reafirma su compromiso con la comunicación clara, responsable y oportuna.",
    formal: "La información se presenta de manera formal para conocimiento de la comunidad y de los medios correspondientes.",
    informativo: "El propósito de este texto es informar de forma clara los puntos más relevantes del acontecimiento.",
    urgente: "Debido a la importancia del tema, se emite este comunicado para informar de manera inmediata a la comunidad."
  };

  return frases[valorTono] || frases.institucional;
}

function encabezadoPorTipo(valorTipo) {
  if (valorTipo === "nota") {
    return "NOTA DE PRENSA";
  }

  return "COMUNICADO DE PRENSA";
}

function generarBorrador() {
  const datos = {
    tipo: tipoTexto.value,
    tono: tono.value,
    titulo: titulo.value.trim() || "Título del comunicado pendiente",
    fecha: obtenerFechaLegible(fecha.value),
    lugar: lugar.value.trim() || "Lugar por confirmar",
    audiencia: audiencia.value.trim() || "la comunidad en general",
    hechos: hechos.value.trim() || "los hechos clave aún se encuentran en proceso de recopilación",
    cita: cita.value.trim() || "Este avance representa una acción importante para fortalecer la comunicación y la toma de decisiones.",
    responsable: responsable.value.trim() || "Equipo de Comunicación"
  };

  const borrador = `${encabezadoPorTipo(datos.tipo)}

${datos.titulo}

${datos.lugar}, ${datos.fecha}.

${frasePorTono(datos.tono)}

Se informa a ${datos.audiencia} que ${datos.hechos}.

De acuerdo con la información proporcionada, este acontecimiento representa un punto relevante para la organización, ya que permite comunicar de forma directa los datos más importantes y facilitar la comprensión del mensaje por parte del público.

"${datos.cita}"

El presente borrador fue generado automáticamente a partir de hechos clave ingresados por el usuario. Antes de su publicación, se recomienda que el equipo responsable revise nombres, fechas, cifras, cargos y cualquier dato sensible.

Atentamente,

${datos.responsable}

--- 
Borrador generado por IA Redactora de Comunicados y Notas de Prensa.
Estado: pendiente de revisión humana.`;

  resultado.textContent = borrador;
  actualizarMetricas(borrador);
}

function actualizarMetricas(texto) {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  contadorPalabras.textContent = palabras;
  contadorCaracteres.textContent = texto.length;
  estadoRevision.textContent = "Revisión";
}

async function copiarBorrador() {
  const texto = resultado.textContent.trim();

  if (!texto || texto.includes("El borrador aparecerá aquí")) {
    alert("Primero genera un borrador.");
    return;
  }

  try {
    await navigator.clipboard.writeText(texto);
    alert("Borrador copiado al portapapeles.");
  } catch (error) {
    alert("No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.");
  }
}

function limpiarFormulario() {
  tipoTexto.value = "comunicado";
  tono.value = "institucional";
  titulo.value = "";
  fecha.value = "";
  lugar.value = "";
  audiencia.value = "";
  hechos.value = "";
  cita.value = "";
  responsable.value = "";

  resultado.innerHTML = '<p class="placeholder">El borrador aparecerá aquí. Completa los datos clave y presiona “Generar borrador”.</p>';
  contadorPalabras.textContent = "0";
  contadorCaracteres.textContent = "0";
  estadoRevision.textContent = "Pendiente";
}
