import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {
		// project Quote Generator
		const projectQuoteGenerator = new ProjectCard("Quote Generator", "A dynamic quote generator that leverages API" +	" Ninjas Quotes API.", ["HTML", "CSS", "JavaScript", "NodeJS"], "https://github.com/marjoriekohn/quote-generator", "https://quotes.marjoriekohn.org");
		const projectCardQuoteGenerator = projectQuoteGenerator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardQuoteGenerator);

		// project Javascript Functions
		const projectJSFunctions = new ProjectCard("JavaScript Functions", "A repository of versatile JavaScript" +	" functions.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/javascript-functions", "https://algorithms.marjoriekohn.org");
		const projectCardJSFunctions = projectJSFunctions.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardJSFunctions);

		// project Byte Weather
		const projectByteWeather = new ProjectCard("Byte Weather", "A real-time weather data platform that uses OpenWeather API.", ["HTML", "CSS", "Javascript", "NodeJS"], "https://github.com/Byte-Buddies/ByteWeather", "https://weather.marjoriekohn.org");
		const projectCardByteWeather = projectByteWeather.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardByteWeather);

		// project Calculator
		const projectCalculator = new ProjectCard("Calculator", "A simple calculator built using jQuery.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/calculator", "https://calculator.marjoriekohn.org");
		const projectCardCalculator = projectCalculator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCalculator);

		// project Cheese Crave
		const projectCheeseCrave = new ProjectCard("Cheese Crave", "A full-stack e-commerce website that utilizes a MySQL database.", ["HTML", "CSS", "Javascript", "Java", "MySQL"], "https://github.com/Cheese-Crave/cheese-crave", "https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseCrave = projectCheeseCrave.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseCrave);
}
