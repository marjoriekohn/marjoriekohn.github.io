import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {
		// project Quote Me
		const projectQuoteGenerator = new ProjectCard("Quote Generator", "A dynamic quote generator that leverages API" +	" Ninjas Quotes API.", ["HTML", "CSS", "Javascript", "NodeJS"], "https://github.com/marjoriekohn/quote-generator", "https://marjoriekohn.github.io/quote-generator/");
		const projectCardQuoteGenerator = projectQuoteGenerator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardQuoteGenerator);

		// project What the Func!
		const projectJSFunctions = new ProjectCard("JavaScript Functions", "A repository of versatile JavaScript" +	" functions.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/javascript-functions", "https://marjoriekohn.github.io/javascript-functions/");
		const projectCardJSFunctions = projectJSFunctions.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardJSFunctions);

		// project Byte Weather
		const projectByteWeather = new ProjectCard("Byte Weather", "A real-time weather data platform that uses OpenWeather API.", ["HTML", "CSS", "Javascript", "NodeJS"], "https://github.com/Byte-Buddies/ByteWeather", "https://byte-buddies.github.io/ByteWeather/");
		const projectCardByteWeather = projectByteWeather.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardByteWeather);

		// project jQulator
		const projectCalculator = new ProjectCard("Calculator", "A simple calculator built using jQuery.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/calculator", "https://marjoriekohn.github.io/calculator/");
		const projectCardCalculator = projectCalculator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCalculator);

		// project Cheese Crave
		const projectCheeseCrave = new ProjectCard("Cheese Crave", "A full-stack e-commerce website that utilizes a MySQL database.", ["HTML", "CSS", "Javascript", "Java", "MySQL"], "https://github.com/Cheese-Crave/cheese-crave", "https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseCrave = projectCheeseCrave.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseCrave);
}
