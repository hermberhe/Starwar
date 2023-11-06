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
        console.log(data)
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
      const characterList = document.createElement('ul')
      const characterList1 = document.createElement('li')
      const characterList2 = document.createElement('li')
      const characterList3 = document.createElement('li')
      characterName.textContent = character.name;
      characterList1.textContent =`Height: ${character.height}`;
      characterList2.textContent = `Hair Color: ${character.hair_color}`;
      characterList3.textContent = `Gender: ${character.gender}`;
      characterList.appendChild(characterList1);
      characterList.appendChild(characterList2);
      characterList.appendChild(characterList3);
      characterElement.appendChild(characterName);

      characterElement.appendChild(characterList);
  
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
        console.log(data)

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
      const filmList = document.createElement('ul')
      const filmList1 = document.createElement('li')
      const filmList2 = document.createElement('li')
      const filmList3 = document.createElement('li')
    
      filmList1.textContent =`Director: ${film.director}`;
      filmList2.textContent = `Producer: ${film.producer}`;
      filmList3.textContent = `Release Date: ${film.release_date}`;
      filmList.appendChild(filmList1);
      filmList.appendChild(filmList2);
      filmList.appendChild(filmList3);
  
      
      filmElement.appendChild(filmTitle);
      filmElement.appendChild(filmList);
      // filmElement.appendChild(filmDirector);
  
      filmDiv.appendChild(filmElement);
    });
  
    return filmDiv;
  }
  
  if (filmLink) {
    filmLink.addEventListener('click', (event) => {

    fetchFilmData();
  })
    
  }  
  if(characterLink){
    characterLink.addEventListener('click', (event) => {
      fetchCharacterData(); 
  
    })  

  }
    
})