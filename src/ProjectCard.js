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
          labelElement.style.color = "#7952B3";
          break;
        case "javascript":
          labelElement.className = "fa-brands fa-js-square";
          labelElement.style.color = "#F7DF1E";
          break;
        case "react":
          labelElement.className = "fa-brands fa-react";
          labelElement.style.color = "#61DAFB";
          break;
        case "angular":
          labelElement.className = "fa-brands fa-angular";
          labelElement.style.color = "#DD0031";
          break;
        case "nodejs":
          labelElement.className = "fa-brands fa-node";
          labelElement.style.color = "#43853D";
          break;
        case "java":
          labelElement.className = "fa-brands fa-java";
          labelElement.style.color = "#007396";
          break;
        case "python":
          labelElement.className = "fa-brands fa-python";
          labelElement.style.color = "#3776AB";
          break;
        case "mysql":
          labelElement.className = "fa-solid fa-database";
          labelElement.style.color = "#4479A1";
          break;
        case "postgresql":
          labelElement.className = "fa-solid fa-database";
          labelElement.style.color = "#336791";
          break;
        case "docker":
          labelElement.className = "fa-brands fa-docker";
          labelElement.style.color = "#2496ED";
          break;
        case "aws":
          labelElement.className = "fa-brands fa-aws";
          labelElement.style.color = "#232F3E";
          break;
        case "jenkins":
          labelElement.className = "fa-brands fa-jenkins";
          labelElement.style.color = "#D24939";
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
