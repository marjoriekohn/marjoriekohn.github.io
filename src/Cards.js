import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent () {
    // project 1
    const project1 = new ProjectCard(
        'Quote Generator',
        'A website that generates a random quote.',
        'https://marymkohn.github.io/quote-generator/',
        'https://github.com/marymkohn/quote-generator',
        ['Javascript', 'HTML', 'CSS']
);
    const projectCard1 = project1.createCardElement();
    document.querySelector('.grid-container').appendChild(projectCard1);

    // project 2
    const project2 = new ProjectCard(
        'What the Func!',
        'A website of simple javascript functions.',
        'https://marymkohn.github.io/javascript-functions/',
        'https://github.com/marymkohn/javascript-functions',
        ['Javascript', 'HTML', 'CSS']
);
    const projectCard2 = project2.createCardElement();
    document.querySelector('.grid-container').appendChild(projectCard2);

    // project 3
    const project3 = new ProjectCard(
        'Byte Weather',
        'A website that displays the current weather in your area.',
        'https://byte-buddies.github.io/ByteWeather/',
        'https://github.com/Byte-Buddies/ByteWeather',
        ['Javascript', 'HTML', 'CSS']
    );
    const projectCard3 = project3.createCardElement();
    document.querySelector('.grid-container').appendChild(projectCard3);

    // project 4
    const project4 = new ProjectCard(
        'Cheese Crave',
        'A cheesy website.',
        'https://cheese-crave.github.io/cheese-crave/',
        'https://github.com/Cheese-Crave/cheese-crave',
        ['Javascript', 'HTML', 'CSS']
    );
    const projectCard4 = project4.createCardElement();
    document.querySelector('.grid-container').appendChild(projectCard4);
}