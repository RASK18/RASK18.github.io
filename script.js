const projects = [
  {
    title: "Kaijura",
    description:
      "Aplicación de escritorio para leer incidencias de Jira Server/Data Center y organizar un kanban local sin modificar Jira.",
    href: "https://disboard.es/Kaijura/",
    image: "assets/projects/kaijura.png",
    imageAlt: "Página principal de Kaijura",
    tags: ["WPF", "Jira", "WebView2"],
    status: "Desktop",
    tone: "pink",
    piece: "♜",
  },
  {
    title: "Schedulime",
    description:
      "Calendario semanal de estrenos de anime con recomendaciones, estados locales y soporte offline tras la primera carga.",
    href: "https://disboard.es/Schedulime/",
    image: "assets/projects/schedulime.png",
    imageAlt: "Calendario semanal de Schedulime",
    imagePosition: "left",
    tags: ["React", "PWA", "AniList"],
    status: "PWA",
    tone: "cyan",
    piece: "♖",
  },
  {
    title: "Currículum",
    description:
      "CV estático en español, preparado para GitHub Pages y para impresión en formato A4.",
    href: "https://disboard.es/Curriculum/",
    image: "assets/projects/curriculum.png",
    imageAlt: "Presentación del repositorio Currículum",
    tags: ["Python", "HTML", "CV"],
    status: "Web",
    tone: "gold",
    piece: "♜",
  },
  {
    title: "Tebloqueo",
    description:
      "Aplicación para la bandeja del sistema de Windows que indica si hay fútbol y se actualiza automáticamente.",
    href: "https://disboard.es/Tebloqueo/",
    image: "assets/projects/tebloqueo.png",
    imageAlt: "Página principal de Tebloqueo",
    imagePosition: "left",
    tags: ["C#", "WinForms", "Windows"],
    status: "Desktop",
    tone: "pink",
    piece: "♖",
  },
  {
    title: "RpgLingo",
    description:
      "Traductor automático para juegos RPG Maker MV/MZ con soporte para DeepL, Google Cloud y Azure.",
    href: "https://github.com/RASK18/RpgLingo",
    linkLabel: "Ver en GitHub",
    image: "assets/projects/rpglingo.png",
    imageAlt: "Logotipo de RpgLingo",
    imageFit: "contain",
    tags: ["C#", "RPG Maker", "Traducción"],
    status: "Desktop",
    tone: "cyan",
    piece: "♜",
  },
  {
    title: "JiraCopyTitleButton",
    description:
      "Utilidad para copiar desde Jira el identificador y el título de una tarea, incluido su enlace.",
    href: "https://github.com/RASK18/JiraCopyTitleButton",
    linkLabel: "Ver en GitHub",
    image: "assets/projects/jiracopytitlebutton.png",
    imageAlt: "Icono de JiraCopyTitleButton",
    imageFit: "contain",
    tags: ["JavaScript", "Jira", "Extensión"],
    status: "GitHub",
    tone: "gold",
    piece: "♖",
  },
  {
    title: "TopTag",
    description:
      "Analizador estático de las etiquetas más frecuentes de una biblioteca de Steam, respaldado por un Worker de Cloudflare.",
    href: "https://disboard.es/TopTag/",
    image: "assets/projects/toptag.png",
    imageAlt: "Página principal de TopTag",
    tags: ["HTML", "Landing", "Steam"],
    status: "Web",
    tone: "pink",
    piece: "♜",
  },
];

const projectGrid = document.querySelector("#project-grid");

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const tags = project.tags
    .map((tag) => `<li>${escapeHtml(tag)}</li>`)
    .join("");

  const previewClasses = ["project-preview"];
  if (project.imageFit === "contain") previewClasses.push("is-contain");
  if (project.imagePosition === "left") previewClasses.push("is-left");

  const preview = project.image
    ? `<img class="${previewClasses.join(" ")}" src="${escapeAttribute(project.image)}" alt="${escapeAttribute(project.imageAlt || `Previsualización de ${project.title}`)}" loading="lazy" decoding="async">`
    : `<span class="thumb-piece" aria-hidden="true">${escapeHtml(project.piece || "♜")}</span>`;

  article.dataset.tone = project.tone || "pink";
  article.innerHTML = `
    <div class="project-thumb">
      ${preview}
    </div>
    <div class="project-body">
      <header>
        <h3>${escapeHtml(project.title)}</h3>
        <span class="status">${escapeHtml(project.status)}</span>
      </header>
      <p>${escapeHtml(project.description)}</p>
      <ul class="tag-list" aria-label="Tecnologías">${tags}</ul>
      <a class="project-link" href="${escapeAttribute(project.href)}">${escapeHtml(project.linkLabel || "Abrir proyecto")}</a>
    </div>
  `;

  return article;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

projectGrid.replaceChildren(...projects.map(createProjectCard));
