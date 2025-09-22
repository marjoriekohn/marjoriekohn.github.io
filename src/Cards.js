import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {

		// project Ask AI
		const projectBNFO620 = new ProjectCard("Ask AI", "An asynchronous python program to query AI models.", ["Python", "R"], "https://github.com/marjoriekohn/bnfo620_ai_caller", "https://github.com/marjoriekohn/bnfo620_ai_caller");
		const projectCardBNFO620 = projectBNFO620.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardBNFO620);

		// project Rosalind
		const projectRosalind = new ProjectCard("Rosalind", "A repository of solutions to bioinformatics coding challenges.", ["Python"], "https://github.com/marjoriekohn/rosalind", "https://marjoriekohn-rosalind.streamlit.app/");
		const projectCardRosalind = projectRosalind.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardRosalind);

		// project Code Solutions
		const projectJSFunctions = new ProjectCard("Code Solutions", "A repository of solutions to coding challenges.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/code-solutions", "https://codesolutions.marjoriekohn.com");
		const projectCardJSFunctions = projectJSFunctions.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardJSFunctions);

		// project Calculator
		const projectCalculator = new ProjectCard("Calculator", "A simple calculator built using jQuery.", ["HTML", "CSS", "Javascript"], "https://github.com/marjoriekohn/calculator", "https://calculator.marjoriekohn.com");
		const projectCardCalculator = projectCalculator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCalculator);
	
		// project Quote Generator
		const projectQuoteGenerator = new ProjectCard("Quotes", "Fetches random quotes from an external API.", ["HTML", "CSS", "JavaScript", "NodeJS"], "https://github.com/marjoriekohn/quote-generator", "https://quotes.marjoriekohn.com");
		const projectCardQuoteGenerator = projectQuoteGenerator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardQuoteGenerator);

		// project Weather
		const projectByteWeather = new ProjectCard("Weather", "A real-time weather data platform that uses OpenWeather API.", ["HTML", "CSS", "Javascript", "NodeJS"], "https://github.com/marjoriekohn/weather", "https://weather.marjoriekohn.com");
		const projectCardByteWeather = projectByteWeather.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardByteWeather);
}
