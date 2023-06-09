import {ProjectCard} from "./ProjectCard.js";

export function generateCardContent() {
		// project Quote Me
		const projectQuoteMe = new ProjectCard("Quote Me",	"A dynamic quote generator that leverages API Ninjas Quotes API.",	["HTML", "CSS", "Javascript", "NodeJS"],	"https://github.com/marymkohn/Quote-Me",	"https://marymkohn.github.io/Quote-Me/");
		const projectCardQuoteMe = projectQuoteMe.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardQuoteMe);

		// project What the Func!
		const projectWhatTheFunc = new ProjectCard("What the Func!",	"A repository of versatile JavaScript functions.",	["HTML", "CSS", "Javascript", "Java", "MySQL"],	"https://github.com/marymkohn/javascript-functions",	"https://marymkohn.github.io/javascript-functions/");
		const projectCardWhatTheFunc = projectWhatTheFunc.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardWhatTheFunc);

		// project Byte Weather
		const projectByteWeather = new ProjectCard("Byte Weather",	"A real-time weather data platform that uses OpenWeather API.",	["HTML", "CSS", "Javascript", "NodeJS"],	"https://github.com/Byte-Buddies/ByteWeather",	"https://byte-buddies.github.io/ByteWeather/");
		const projectCardByteWeather = projectByteWeather.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardByteWeather);

		// project Cheese Scraper
		const projectCheeseScraper = new ProjectCard("Cheese Scraper",	"A tool that harvests cheese data, forming a PostgreSQL database.",	["Java", "Spring", "PostgreSQL"],	"https://github.com/Cheese-Crave/cheese-crave",	"https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseScraper = projectCheeseScraper.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseScraper);

		// project Cheese API
		const projectCheeseAPI = new ProjectCard("Cheese API",	"A service that retrieves cheese data from a PostgreSQL database.",	["Java", "Spring", "PostgreSQL"],	"https://github.com/Cheese-Crave/cheese-crave",	"https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseAPI = projectCheeseAPI.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseAPI);

		// project jQulator
		const projectjQulator = new ProjectCard("jQulator",	"A simple calculator built using jQuery.",	["HTML", "CSS", "Javascript"],	"https://github.com/marymkohn/jQuery-calculator",	"https://marymkohn.github.io/jQuery-calculator/");
		const projectCardjQulator = projectjQulator.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardjQulator);

		// project Cheese Crave
		const projectCheeseCrave = new ProjectCard("Cheese Crave",	"A full-stack e-commerce website that utilizes a MySQL database.",	["HTML", "CSS", "Javascript", "Java", "MySQL"],	"https://github.com/Cheese-Crave/cheese-crave",	"https://cheese-crave.github.io/cheese-crave/");
		const projectCardCheeseCrave = projectCheeseCrave.createCardElement();
		document.querySelector(".grid-container").appendChild(projectCardCheeseCrave);
}
