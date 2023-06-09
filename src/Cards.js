import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {
    // project 1
    const project1 = new ProjectCard(
        "Quote Me",
        "A dynamic quote generator that leverages API Ninjas Quotes API.",
        ["HTML", "CSS", "Javascript", "NodeJS"],
        "https://github.com/marymkohn/Quote-Me",
        "https://marymkohn.github.io/Quote-Me/"
    );
    const projectCard1 = project1.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard1);

    // project 2
    const project2 = new ProjectCard(
        "What the Func!",
        "A repository of versatile JavaScript functions.",
        ["HTML", "CSS", "Javascript", "Java", "MySQL"],
        "https://github.com/marymkohn/javascript-functions",
        "https://marymkohn.github.io/javascript-functions/"
    );
    const projectCard2 = project2.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard2);

    // project 3
    const project3 = new ProjectCard(
        "Byte Weather",
        "A real-time weather data platform that uses OpenWeather API.",
        ["HTML", "CSS", "Javascript", "NodeJS"],
        "https://github.com/Byte-Buddies/ByteWeather",
        "https://byte-buddies.github.io/ByteWeather/"
    );
    const projectCard3 = project3.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard3);

    // project 4
    const project4 = new ProjectCard(
        "Cheese Crave",
        "A full-stack e-commerce website that utilizes a MySQL database.",
        ["HTML", "CSS", "Javascript", "Java", "MySQL"],
        "https://github.com/Cheese-Crave/cheese-crave",
        "https://cheese-crave.github.io/cheese-crave/"
    );
    const projectCard4 = project4.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard4);

    // project 5
    const project5 = new ProjectCard(
        "jQulator",
        "A simple calculator built using jQuery.",
        ["HTML", "CSS", "Javascript"],
        "https://github.com/marymkohn/jQuery-calculator",
        "https://marymkohn.github.io/jQuery-calculator/"
    );
    const projectCard5 = project5.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard5);

    // project 6
    const project6 = new ProjectCard(
        "Cheese Crave",
        "A full-stack e-commerce website that utilizes a MySQL database.",
        ["HTML", "CSS", "Javascript", "Java", "MySQL"],
        "https://github.com/Cheese-Crave/cheese-crave",
        "https://cheese-crave.github.io/cheese-crave/"
    );
    const projectCard6 = project6.createCardElement();
    document.querySelector(".grid-container").appendChild(projectCard6);
}
