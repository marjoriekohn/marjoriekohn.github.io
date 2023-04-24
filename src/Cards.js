import { ProjectCard } from "./ProjectCard.js";

export function generateCardContent() {
  // project 1
  const project1 = new ProjectCard(
    "Quote Me",
    "A dynamic quote generator that leverages API Ninjas Quotes API.",
    "https://marymkohn.github.io/quote-generator/",
    "https://github.com/marymkohn/quote-generator",
    ["Javascript", "API Ninjas", "Quotes API"]
  );
  const projectCard1 = project1.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard1);

  // project 2
  const project2 = new ProjectCard(
    "What the Func!",
    "A repository of versatile JavaScript functions.",
    "https://marymkohn.github.io/javascript-functions/",
    "https://github.com/marymkohn/javascript-functions",
    ["Javascript", "Java", "Spring", "MySQL"]
  );
  const projectCard2 = project2.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard2);

  // project 3
  const project3 = new ProjectCard(
    "Byte Weather",
    "A real-time weather data platform that uses OpenWeather API.",
    "https://byte-buddies.github.io/ByteWeather/",
    "https://github.com/Byte-Buddies/ByteWeather",
    ["Javascript", "OpenWeather API"]
  );
  const projectCard3 = project3.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard3);

  // project 4
  const project4 = new ProjectCard(
    "Cheese Crave",
    "A full-stack e-commerce website that utilizes a MySQL database.",
    "https://cheese-crave.github.io/cheese-crave/",
    "https://github.com/Cheese-Crave/cheese-crave",
    ["Javascript", "Java", "Spring", "MySQL"]
  );
  const projectCard4 = project4.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard4);

  // project 5
  const project5 = new ProjectCard(
    "Cheese Crave",
    "A full-stack e-commerce website that utilizes a MySQL database.",
    "https://cheese-crave.github.io/cheese-crave/",
    "https://github.com/Cheese-Crave/cheese-crave",
    ["Javascript", "Java", "Spring", "MySQL"]
  );
  const projectCard5 = project5.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard5);

  // project 6
  const project6 = new ProjectCard(
    "Cheese Crave",
    "A full-stack e-commerce website that utilizes a MySQL database.",
    "https://cheese-crave.github.io/cheese-crave/",
    "https://github.com/Cheese-Crave/cheese-crave",
    ["Javascript", "Java", "Spring", "MySQL"]
  );
  const projectCard6 = project6.createCardElement();
  document.querySelector(".grid-container").appendChild(projectCard6);
}
