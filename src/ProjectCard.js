export class ProjectCard {
  constructor(name, description, labels, repoLink, pagesLink) {
    this.name = name;
    this.description = description;
    this.labels = labels;
    this.repoLink = repoLink;
    this.pagesLink = pagesLink;
  }

  createCardElement() {
    // empty container used for styling
    const article = document.createElement("article");

    // project name
    const projectName = document.createElement("h3");
    projectName.textContent = this.name;
    article.appendChild(projectName);

    // project description
    const projectDescription = document.createElement("p");
    projectDescription.textContent = this.description;
    article.appendChild(projectDescription);

    // project labels -> change to language icons
    const labelsContainer = document.createElement("section");
    labelsContainer.className = "label";
    this.labels.forEach((label) => {
      const labelElement = document.createElement("i");
      labelElement.className = "language";
      switch (label.toLowerCase()) {
        case "html":
          labelElement.className = "fa-brands fa-html5";
          labelElement.style.color = "#E34F26";
          break;
        case "css":
          labelElement.className = "fa-brands fa-css3-alt";
          labelElement.style.color = "#1572B6";
          break;
        case "bootstrap":
          labelElement.className = "fa-brands fa-bootstrap";
          labelElement.style.color = "#E34F26";
          break;
        case "javascript":
          labelElement.className = "fa-brands fa-square-js";
          labelElement.style.color = "#F7DF1E";
          break;
        case "nodejs":
          labelElement.className = "fa-brands fa-node";
          labelElement.style.color = "#43853D";
          break;
        case "java":
          labelElement.className = "fa-brands fa-java";
          labelElement.style.color = "#007396";
          break;
        case "mysql":
          labelElement.className = "fa-solid fa-database";
          labelElement.style.color = "#00758F";
          break;
        case "postgresql":
          labelElement.className = "fa-solid fa-database";
          labelElement.style.color = "#00758F";
          break;
      }
      labelsContainer.appendChild(labelElement);
    });
    article.appendChild(labelsContainer);

    const projectLinks = document.createElement("section");
    projectLinks.className = "project-links";

    const repoButton = document.createElement("button");
    projectLinks.appendChild(repoButton);
    repoButton.textContent = "Repository";
    repoButton.onclick = () => window.open(this.repoLink, "_blank");
    projectLinks.appendChild(repoButton);

    const websiteButton = document.createElement("button");
    projectLinks.appendChild(websiteButton);
    websiteButton.textContent = "Live Demo";
    websiteButton.onclick = () => window.open(this.pagesLink, "_blank");
    projectLinks.appendChild(websiteButton);

    article.appendChild(projectLinks);

    return article;
  }
}
