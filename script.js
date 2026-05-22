const projects = [
  {
    title: "Kaijura",
    description:
      "App de escritorio para leer issues de Jira Server/Data Center y organizar un kanban local sin modificar Jira.",
    href: "https://disboard.es/Kaijura/",
    tags: ["WPF", "Jira", "WebView2"],
    status: "Desktop",
    tone: "pink",
    piece: "♜",
  },
  {
    title: "Schedulime",
    description:
      "Calendario semanal de estrenos anime con recomendaciones, estados locales y soporte offline tras la primera carga.",
    href: "https://disboard.es/Schedulime/",
    tags: ["React", "PWA", "AniList"],
    status: "PWA",
    tone: "cyan",
    piece: "♖",
  },
  {
    title: "VeterinariaClaude",
    description:
      "Landing de Olmedical Academy para presentar cursos y programas de formacion avanzada en medicina veterinaria.",
    href: "https://disboard.es/VeterinariaClaude/",
    tags: ["HTML", "Landing", "Veterinaria"],
    status: "Web",
    tone: "gold",
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

  article.dataset.tone = project.tone || "pink";
  article.innerHTML = `
    <div class="project-thumb" aria-hidden="true">
      <span class="thumb-piece">${escapeHtml(project.piece || "♜")}</span>
    </div>
    <div class="project-body">
      <header>
        <h3>${escapeHtml(project.title)}</h3>
        <span class="status">${escapeHtml(project.status)}</span>
      </header>
      <p>${escapeHtml(project.description)}</p>
      <ul class="tag-list" aria-label="Tecnologias">${tags}</ul>
      <a class="project-link" href="${escapeAttribute(project.href)}">Abrir proyecto</a>
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
