export class ProjectCard {
    constructor(name, description, pagesLink, repoLink, labels) {
        this.name = name;
        this.description = description;
        this.pagesLink = pagesLink;
        this.repoLink = repoLink;
        this.labels = labels;
    }

    createCardElement() {
        const article = document.createElement('article');
        article.setAttribute('role', 'article');

        const section = document.createElement('section');

        const projectName = document.createElement('h3');
        projectName.textContent = this.name;
        section.appendChild(projectName);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = this.description;
        section.appendChild(projectDescription);

        const projectIcons = document.createElement('div');
        projectIcons.className = 'project-icons';

        const repoIcon = this.createIconElement('GitHub Repository', this.repoLink, 'fa-brands fa-square-github fa-2xl');
        projectIcons.appendChild(repoIcon);

        const pagesIcon = this.createIconElement('Project Website', this.pagesLink, 'fa-solid fa-globe fa-2xl');
        projectIcons.appendChild(pagesIcon);

        section.appendChild(projectIcons);

        const labelsContainer = document.createElement('div');
        labelsContainer.className = 'label';
        this.labels.forEach(label => {
            const labelElement = document.createElement('span');
            labelElement.className = 'languages label';
            labelElement.textContent = label;
            labelsContainer.appendChild(labelElement);
        });
        section.appendChild(labelsContainer);

        article.appendChild(section);
        return article;
    }

    createIconElement(tooltipText, link, icons) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.setAttribute('data-tooltip', tooltipText);

        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.setAttribute('aria-label', tooltipText);

        const icon = document.createElement('i');
        icon.className = icons;
        anchor.appendChild(icon);

        tooltip.appendChild(anchor);
        return tooltip;
    }
}