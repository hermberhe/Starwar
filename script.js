document.addEventListener('DOMContentLoaded', (event) => {




const characterLink = document.getElementById('character')
const filmLink = document.getElementById('film')

console.log(filmLink)

console.log ("test")

function fetchCharacterData() {
    const apiUrl = 'https://swapi.dev/api/people/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const characterDiv = createCharacterDiv(data.results);
        const container = document.getElementById('character-container');
        container.appendChild(characterDiv);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  function createCharacterDiv(characters) {
    const characterDiv = document.createElement('div');
    characterDiv.id = 'character-data';
  
    characters.forEach((character) => {
      const characterElement = document.createElement('div');
      const characterName = document.createElement('h2');
      characterName.textContent = character.name;
  
      // You can add more details by creating additional elements like this:
      // const characterHeight = document.createElement('p');
      // characterHeight.textContent = `Height: ${character.height}`;
  
      characterElement.appendChild(characterName);
      // characterElement.appendChild(characterHeight);
  
      characterDiv.appendChild(characterElement);
    });
  
    return characterDiv;
  }
  
//   window.onload = function() {
//     fetchCharacterData(); // Call the function when the webpage loads
//   };
  

function fetchFilmData() {
    const apiUrl = 'https://swapi.dev/api/films/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filmDiv = createFilmDiv(data.results);
        const filmContainer = document.getElementById('film-container');
        filmContainer.appendChild(filmDiv);
      })
      .catch((error) => {
        console.error('Error fetching film data:', error);
      });
  }
  
  function createFilmDiv(films) {
    const filmDiv = document.createElement('div');
    filmDiv.id = 'film-data';
  
    films.forEach((film) => {
      const filmElement = document.createElement('div');
      const filmTitle = document.createElement('h2');
      filmTitle.textContent = film.title;
      
      // You can add more details by creating additional elements like this:
      // const filmDirector = document.createElement('p');
      // filmDirector.textContent = `Director: ${film.director}`;
      
      filmElement.appendChild(filmTitle);
      // filmElement.appendChild(filmDirector);
  
      filmDiv.appendChild(filmElement);
    });
  
    return filmDiv;
  }
  

characterLink.addEventListener('click', (event) => {
    fetchCharacterData(); // Call the function when the webpage loads
  })  


filmLink.addEventListener('click', (event) => {
    console.log('honey says hi');
})
})