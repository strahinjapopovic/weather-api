/* JavaScript Document */
/* =============================================================
	  First Name		: 	Strahinja     					    
	  Last Name			: 	Popovic					            
	  Developer Name    : 	codeXdeveloper			        
	  WebMaster Email	:	spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript CODE ************************************************************************* */
/* ***************************************************************************************** */
//----------------------------------------------
const message = "New assignment started...";
console.log(message);
//----------------------------------------------
city = "Brisbane";
key = "a08a5f2fccf910549f54f5b2314b472f";
//----------------------------------------------
const displayCityButtons = document.querySelector("#city-list");
const errorButtonsParagraph = document.createElement("p");
//----------------------------------------------
const BTN_GET_CITY_WEATHER = document.querySelector("#submit");
const BTN_CLEAR_ALL_DATA = document.querySelector("#clear");
//----------------------------------------------
const errorSelectedDiv = document.querySelector("#error-message");
const errorParagraph = document.createElement("p");
//----------------------------------------------
const inputSelectedCity = document.querySelector("#city");
//----------------------------------------------
const displayWeatherIcon = document.querySelector("#weather-icon");
const weatherImg_0 = document.createElement("img");
const displayCurrentWeather = document.querySelector("#current-weather");
const currentWeatherParagraph = document.createElement("p");
//----------------------------------------------
const day1SectionDesc = document.querySelector("#day-1-desc");
const day2SectionDesc = document.querySelector("#day-2-desc");
const day3SectionDesc = document.querySelector("#day-3-desc");
const day4SectionDesc = document.querySelector("#day-4-desc");
const day5SectionDesc = document.querySelector("#day-5-desc");
//----------------------------------------------
const day1Paragraph = document.createElement("p");
const day2Paragraph = document.createElement("p");
const day3Paragraph = document.createElement("p");
const day4Paragraph = document.createElement("p");
const day5Paragraph = document.createElement("p");
//----------------------------------------------
const day1SectionImg = document.querySelector("#day-1-icon");
const day2SectionImg = document.querySelector("#day-2-icon");
const day3SectionImg = document.querySelector("#day-3-icon");
const day4SectionImg = document.querySelector("#day-4-icon");
const day5SectionImg = document.querySelector("#day-5-icon");
//----------------------------------------------
const day1Img = document.createElement("img");
const day2Img = document.createElement("img");
const day3Img = document.createElement("img");
const day4Img = document.createElement("img");
const day5Img = document.createElement("img");
//----------------------------------------------
const cityBtn1 = document.querySelector("#history-city-1");
const cityBtn2 = document.querySelector("#history-city-2");
const cityBtn3 = document.querySelector("#history-city-3");
//----------------------------------------------
$(document).ready(function() {
	if(JSON.parse(localStorage.getItem("coordinate")) === null) {
		errorButtonsParagraph.textContent = `(${he.decode("&#8709;")}) - City history is empty`;
		displayCityButtons.appendChild(errorButtonsParagraph);
	}
	displayHistoryButton();
	if(document.querySelector("#history-city-1")) {
		getCoordinatesClone(JSON.parse(localStorage.getItem("coordinate"))[0].cityName, key);
	}
});
//----------------------------------------------
//Testing functions and properties--------------
const displayCityWeatherCon = function (city, key) {
	const W_API_URL_GET_LAT_LON = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
	fetch(W_API_URL_GET_LAT_LON).then(function (response) {
		if (response.ok) {
			response.json().then(function (data) {
				console.log(data);
				console.log(`Latitude: ${data[0].lat}\nLongitude: ${data[0].lon}`);

				const W_API_URL_GET_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${key}`;

				fetch(W_API_URL_GET_WEATHER).then(function (response) {
					if (response.ok) {
						response.json().then(function (weather_api_call_data) {
							console.log(weather_api_call_data);
							//let date_txt_1 = weather_api_call_data.list[1].dt_txt.toString().slice(0, 9);
							const DATE = new Date();
							let today = DATE.toString().slice(4, 15).split(" ").join("-");
							console.log(`(${today})`);
							let today_plus_1day = new Date(Date.now() + 24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
							let today_plus_2day = new Date(Date.now() + 2*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
							let today_plus_3day = new Date(Date.now() + 3*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
							let today_plus_4day = new Date(Date.now() + 4*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
							let today_plus_5day = new Date(Date.now() + 5*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
							console.log(today_plus_1day);
							console.log(`
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[0].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today} )
Temperature: ${Math.ceil(weather_api_call_data.list[0].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[0].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[0].main.humidity} (%)
---
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[1].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today_plus_1day.toString()} )
Temperature: ${Math.ceil(weather_api_call_data.list[1].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[1].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[1].main.humidity} (%)
---
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[2].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today_plus_2day.toString()} )
Temperature: ${Math.ceil(weather_api_call_data.list[2].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[2].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[2].main.humidity} (%)
---
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[3].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today_plus_3day.toString()} )
Temperature: ${Math.ceil(weather_api_call_data.list[3].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[3].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[3].main.humidity} (%)
---
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[4].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today_plus_4day.toString()} )
Temperature: ${Math.ceil(weather_api_call_data.list[4].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[4].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[4].main.humidity} (%)
---
Icon: https://openweathermap.org/img/wn/${weather_api_call_data.list[5].weather[0].icon}.png
City: ${weather_api_call_data.city.name}
Date: ( ${today_plus_5day.toString()} )
Temperature: ${Math.ceil(weather_api_call_data.list[5].main.temp)} (\u00B0C)
Wind: ${Math.ceil(weather_api_call_data.list[5].wind.speed*3600/1000)} (km/h)
Humidity: ${weather_api_call_data.list[5].main.humidity} (%)`);
						});
					}
				});
			});
		}
	});
}
//----------------------------------------------
displayCityWeatherCon("Brisbane", "a08a5f2fccf910549f54f5b2314b472f");
//----------------------------------------------
const displayHistoryButton = function() {
	if(JSON.parse(localStorage.getItem("coordinate")) !== null) {
		errorButtonsParagraph.textContent = "";
		displayCityButtons.appendChild(errorButtonsParagraph);

		if(JSON.parse(localStorage.getItem("coordinate")).length === 1) {
			cityBtn1.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[0].cityName}`;
			cityBtn1.style.display = "block";
		}
		else if(JSON.parse(localStorage.getItem("coordinate")).length === 2) {
			cityBtn1.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[1].cityName}`;
			cityBtn1.style.display = "block";
			cityBtn2.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[0].cityName}`;
			cityBtn2.style.display = "block";
		}
		else if(JSON.parse(localStorage.getItem("coordinate")).length === 3) {
			cityBtn1.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[2].cityName}`;
			cityBtn1.style.display = "block";
			cityBtn2.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[1].cityName}`;
			cityBtn2.style.display = "block";
			cityBtn3.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[0].cityName}`;
			cityBtn3.style.display = "block";
		}
		else  if(JSON.parse(localStorage.getItem("coordinate")).length === 4){
			cityBtn1.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[2].cityName}`;
			cityBtn1.style.display = "block";
			cityBtn2.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[1].cityName}`;
			cityBtn2.style.display = "block";
			cityBtn3.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[0].cityName}`;
			cityBtn3.style.display = "block";
			errorButtonsParagraph.textContent = `(${he.decode("&#9888;")}) - Display max 3 cities`;
			displayCityButtons.appendChild(errorButtonsParagraph);
		}
		else {
			cityBtn1.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[2].cityName}`;
			cityBtn1.style.display = "block";
			cityBtn2.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[1].cityName}`;
			cityBtn2.style.display = "block";
			cityBtn3.innerHTML = `${JSON.parse(localStorage.getItem("coordinate"))[0].cityName}`;
			cityBtn3.style.display = "block";
			errorButtonsParagraph.textContent = "";
			displayCityButtons.appendChild(errorButtonsParagraph);
		}
	}
}
//----------------------------------------------
const getCoordinates = function(city, key) {
	if(!city) {
		errorParagraph.textContent = "(*) - Insert city name";
		errorSelectedDiv.appendChild(errorParagraph);
	}
	else{
		inputSelectedCity.value = "";
		errorParagraph.textContent = "";
		errorSelectedDiv.appendChild(errorParagraph);
		const getCityCoordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
		fetch(getCityCoordinatesURL).then(function(response) {
			if(response.ok) {
				response.json().then(function(coordinates) {
					if(coordinates.length !== 0) {
						errorParagraph.textContent = "";
						errorSelectedDiv.appendChild(errorParagraph);
						currentWeather(coordinates);
						let objArray = [];
						const cityCoordinateObj = {
							cityName: coordinates[0].name,
							latitude: coordinates[0].lat,
							longitude: coordinates[0].lon,
						};
						objArray.push(cityCoordinateObj);
						objArray = objArray.concat(JSON.parse(localStorage.getItem("coordinate")) || []);

						localStorage.setItem("coordinate", JSON.stringify(objArray));
						displayHistoryButton();
					}
					else {
						errorParagraph.textContent = `(${he.decode("&#9888;")}) - Enter valid city name`;
						errorSelectedDiv.appendChild(errorParagraph);
					}
				});
			}
			else {
				errorParagraph.textContent = `Server response status code: ( ${response.status.toString()} )`;
				errorSelectedDiv.appendChild(errorParagraph);
			}
		});
	}
}
//----------------------------------------------
const getCoordinatesClone = function(city, key) {
	errorButtonsParagraph.textContent = "";
	displayCityButtons.appendChild(errorButtonsParagraph);
	const getCityCoordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
	fetch(getCityCoordinatesURL).then(function(response) {
		if(response.ok) {
			response.json().then(function(coordinates) {
				currentWeather(coordinates);
			});
		}
	});
}					
//----------------------------------------------
const currentWeather = function(coordinates) {
	const getCityWeatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&units=metric&appid=${key}`;
	fetch(getCityWeatherDataURL).then(function(response) {
		if(response.status === 200) {
			response.json().then(function(weatherData) {

				const DATE = new Date();
				let today = DATE.toString().slice(4, 15).split(" ").join("-");
				let today_plus_1day = new Date(Date.now() + 24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
				let today_plus_2day = new Date(Date.now() + 2*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
				let today_plus_3day = new Date(Date.now() + 3*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
				let today_plus_4day = new Date(Date.now() + 4*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
				let today_plus_5day = new Date(Date.now() + 5*24*60*60*1000).toString().slice(4, 15).split(" ").join("-");
				
				weatherImg_0.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`);
				weatherImg_0.setAttribute("alt", "Weather API Icon");
				displayWeatherIcon.appendChild(weatherImg_0);
				currentWeatherParagraph.textContent = `
				${weatherData.city.name} (${today})\n 
				Temperature: ${Math.ceil(weatherData.list[0].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[0].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[0].main.humidity} (%)`;
				displayCurrentWeather.appendChild(currentWeatherParagraph);

				day1Img.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`);
				day1Img.setAttribute("alt", "Weather API Icon");
				day1SectionImg.appendChild(day1Img);
				day1Paragraph.textContent = `
				${weatherData.city.name} (${today_plus_1day})\n 
				Temperature: ${Math.ceil(weatherData.list[1].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[1].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[1].main.humidity} (%)`;
				day1SectionDesc.appendChild(day1Paragraph);
				
				day2Img.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}.png`);
				day2Img.setAttribute("alt", "Weather API Icon");
				day2SectionImg.appendChild(day2Img);
				day2Paragraph.textContent = `
				${weatherData.city.name} (${today_plus_2day})\n 
				Temperature: ${Math.ceil(weatherData.list[2].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[2].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[2].main.humidity} (%)`;
				day2SectionDesc.appendChild(day2Paragraph);
				
				day3Img.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}.png`);
				day3Img.setAttribute("alt", "Weather API Icon");
				day3SectionImg.appendChild(day3Img);
				day3Paragraph.textContent = `
				${weatherData.city.name} (${today_plus_3day})\n 
				Temperature: ${Math.ceil(weatherData.list[3].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[3].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[3].main.humidity} (%)`;
				day3SectionDesc.appendChild(day3Paragraph);
				
				day4Img.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`);
				day4Img.setAttribute("alt", "Weather API Icon");
				day4SectionImg.appendChild(day4Img);
				day4Paragraph.textContent = `
				${weatherData.city.name} (${today_plus_4day})\n 
				Temperature: ${Math.ceil(weatherData.list[4].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[4].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[4].main.humidity} (%)`;
				day4SectionDesc.appendChild(day4Paragraph);
				
				day5Img.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.list[5].weather[0].icon}.png`);
				day5Img.setAttribute("alt", "Weather API Icon");
				day5SectionImg.appendChild(day5Img);
				day5Paragraph.textContent = `
				${weatherData.city.name} (${today_plus_5day})\n 
				Temperature: ${Math.ceil(weatherData.list[5].main.temp)} (\u00B0C)\n
				Wind: ${Math.ceil(weatherData.list[5].wind.speed*3600/1000)} (km/h)\n
				Humidity: ${weatherData.list[5].main.humidity} (%)`;
				day5SectionDesc.appendChild(day5Paragraph);
			});
		}
		else {
			errorParagraph.textContent = `Status code: (${response.status.toString()})`;
			errorSelectedDiv.appendChild(errorParagraph);
		}
	});
}
//----------------------------------------------
BTN_GET_CITY_WEATHER.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let city = document.querySelector("#city").value;
	let key = "a08a5f2fccf910549f54f5b2314b472f";
	getCoordinates(city, key);
});
//----------------------------------------------
BTN_CLEAR_ALL_DATA.addEventListener("click", function(event) {
	event.preventDefault();
	event.stopPropagation();
	localStorage.clear();
	window.location.reload();
});
//----------------------------------------------
cityBtn1.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let city = document.querySelector("#history-city-1").innerHTML;
	let key = "a08a5f2fccf910549f54f5b2314b472f";
	getCoordinatesClone(city, key);
});
//----------------------------------------------
cityBtn2.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let city = document.querySelector("#history-city-2").innerHTML;
	let key = "a08a5f2fccf910549f54f5b2314b472f";
	getCoordinatesClone(city, key);
});
//----------------------------------------------
cityBtn3.addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();
	let city = document.querySelector("#history-city-3").innerHTML;
	let key = "a08a5f2fccf910549f54f5b2314b472f";
	getCoordinatesClone(city, key);
});