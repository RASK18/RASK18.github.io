const projects = [
  {
    title: "Proyecto ejemplo",
    description:
      "Sustituye esta tarjeta por una herramienta real publicada en GitHub Pages.",
    href: "https://disboard.es/proyecto-ejemplo/",
    tags: ["Static", "GitHub Pages"],
    status: "Plantilla",
    tone: "pink",
    piece: "♜",
  },
  {
    title: "Laboratorio web",
    description:
      "Un espacio para prototipos, pruebas visuales o pequenas utilidades de navegador.",
    href: "https://disboard.es/laboratorio-web/",
    tags: ["HTML", "CSS", "JS"],
    status: "Demo",
    tone: "cyan",
    piece: "♖",
  },
  {
    title: "Herramienta personal",
    description:
      "Ejemplo de ficha para una app ligera con una ruta propia dentro del dominio.",
    href: "https://disboard.es/herramienta-personal/",
    tags: ["App", "Productividad"],
    status: "Editable",
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
