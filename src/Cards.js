import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {
		// project Quotes
		const projectQuoteGenerator = new ProjectCard("Quotes", "Fetches random quotes from an external API.", ["HTML", "CSS", "JavaScript", "NodeJS"], "https://github.com/marjoriekohn/quote-generator", "https://quotes.marjoriekohn.com");
		const projectCardQuoteGenerator = projectQuoteGenerator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardQuoteGenerator);

		// project Rosalind
		const projectRosalind = new ProjectCard("Rosalind", "A repository of solutions to bioinformatics coding challenges.", ["Python"], "https://github.com/marjoriekohn/rosalind", "https://rosalind.marjoriekohn.com");
		const projectCardRosalind = projectRosalind.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardRosalind);

		// project Code Solutions
		const projectJSFunctions = new ProjectCard("Code Solutions", "A repository of solutions to coding challenges.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/code-solutions", "https://codesolutions.marjoriekohn.com");
		const projectCardJSFunctions = projectJSFunctions.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardJSFunctions);

		// project Weather
		const projectByteWeather = new ProjectCard("Weather", "A real-time weather data platform that uses OpenWeather API.", ["HTML", "CSS", "Javascript", "NodeJS"], "https://github.com/marjoriekohn/weather", "https://weather.marjoriekohn.com");
		const projectCardByteWeather = projectByteWeather.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardByteWeather);

		// project Calculator
		const projectCalculator = new ProjectCard("Calculator", "A simple calculator built using jQuery.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/calculator", "https://calculator.marjoriekohn.com");
		const projectCardCalculator = projectCalculator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCalculator);

		// project Cheese Crave
		const projectCheeseCrave = new ProjectCard("Cheese Crave", "A full-stack e-commerce website that utilizes a MySQL database.", ["HTML", "CSS", "Javascript", "Java", "MySQL"], "https://github.com/Cheese-Crave/cheese-crave", "https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseCrave = projectCheeseCrave.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseCrave);
}
