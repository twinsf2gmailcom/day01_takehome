//const input = document.querySelector('input');
// const log = document.getElementById('values');
//input.addEventListener('input', getMoviesBySearchTerm)
const apikey = '7b39eea';
const baseurl= 'http://www.omdbapi.com'

export const getMoviesBySearchTerm = async (x) => {
    try {
        const input = document.getElementById('inputSrch');
        console.log(input.value)
        // searchTerm = e.target.value
        let searchTerm = input.value;
        //console.log(searchTerm);

        let response = await fetch(`${baseurl}/?apikey=${apikey}&s=${searchTerm}`);
        let omdires = await response.json();
        //console.log(omdires.Search.length);
        
        const searchDiv = document.getElementById('searchResults');
        searchDiv.innerHTML =  '';

        const search = omdires.Search;

        for (let i = 0; i < search.length; i++) {
            //console.log(search[i])
            let div = document.createElement("DIV");
            div.innerHTML = `<h3>Search Results</h3><hr><h4> ${search[i].Title} </h4><p>Year: ${search[i].Year} </p><p>imdb ID: ${search[i].imdbID} </p><img src="${search[i].Poster}" alt="no poster"><hr>`
            searchDiv.appendChild(div);
          } 
        // console.log('This is the last line of code in this function');
      } catch(error) {
        console.log("ERROR:", error)
      }
}

export const getMovieDetailsById = async (x) => {
    try {
        const input = document.getElementById('inputId');
        //console.log(input.value)
        // searchTerm = e.target.value
        let searchTerm = input.value;
        //console.log(searchTerm);
        let response = await fetch(`${baseurl}/?apikey=${apikey}&i=${searchTerm}`);
        let omdires = await response.json();
        //console.log(omdires);
        
        const searchDiv = document.getElementById('searchResults');
        searchDiv.innerHTML =  '';

        const search = omdires;

        //console.log(search)
        let div = document.createElement("DIV");
        div.innerHTML = `
        <h3>Search Results</h3>
        <hr>
        <h4> ${search.Title} </h4>
        <p><strong>Year:</strong> ${search.Year} </p>
        <p><strong>imdb ID:</strong> ${search.imdbID} </p>
        <p><strong>Rated:</strong> ${search.Rated} <strong>Metascore:</strong> ${search.Metascore}  <strong>imdb Rating:</strong> ${search.imdbRating} </p>
        <p><strong>Actors:</strong> ${search.Actors} </p>
        <p><strong>Plot:</strong> ${search.Plot} </p>
        <p><strong>Runtime:</strong> ${search.Runtime} </p>
        <img src="${search.Poster}" alt="no poster">
        <hr>
        
        
        `
        searchDiv.appendChild(div);

            // console.log('This is the last line of code in this function');
      } catch(error) {
        console.log("ERROR:", error)
      }
}



// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

