# Pokémon Search App

A Pen created on CodePen.io. Original URL: [https://codepen.io/Mouragheb/pen/dPbVvrP](https://codepen.io/Mouragheb/pen/dPbVvrP).

What the Pokémon App Does

The Pokémon Search App is a web application that allows users to search for Pokémon by name or ID. It retrieves and displays various details about the Pokémon, such as:
	1.	Basic Details:
	•	Name and ID.
	•	Weight and height.
	2.	Stats:
	•	HP, Attack, Defense, Special Attack, Special Defense, and Speed.
	3.	Type(s):
	•	The Pokémon’s type(s), such as Electric, Ghost, or Poison.
	4.	Sprite:
	•	A front-facing image of the Pokémon.

Features
	•	Search Functionality: Users can input either the Pokémon’s name (e.g., Pikachu) or ID (e.g., 94) to get detailed information.
	•	Error Handling: If the Pokémon is not found, an alert notifies the user.
	•	Mock Responses: For Pikachu and Gengar, predefined values are displayed without an API call.
	•	Dynamic Content Rendering: The app dynamically updates the HTML to display the Pokémon’s details and sprite.
	•	Responsive Design: The app is styled to be visually appealing and works well on different screen sizes.

Technologies and Languages Used
	1.	HTML:
	•	Used to structure the content of the app.
	•	Includes elements like input, button, table, and various div containers.
	2.	CSS:
	•	Styles the app to make it visually appealing with colors, gradients, and responsive design.
	•	Implements features like buttons, table layouts, and backgrounds.
	3.	JavaScript:
	•	Adds interactivity to the app.
	•	Handles user input, performs API requests, and dynamically updates the DOM.
	•	Includes event listeners for user interactions, such as clicking the “Search” button.
	•	Uses the Fetch API to retrieve Pokémon data from the PokeAPI.
	4.	PokeAPI:
	•	An open API providing Pokémon-related data.
	•	Used for real-time fetching of Pokémon details based on user input.

Development Workflow
	•	Frontend: Created using HTML, CSS, and JavaScript for UI and user interactions.
	•	Data Fetching: Integrated with the PokeAPI for dynamic data retrieval.
	•	Mock Data: Used hardcoded mock data for specific Pokémon (Pikachu and Gengar) to demonstrate specific scenarios.
	•	Error Handling: Implemented alerts for invalid searches or missing data.

This project showcases a beginner-friendly, interactive, and responsive web application that leverages modern web development technologies to fetch and display dynamic data.
