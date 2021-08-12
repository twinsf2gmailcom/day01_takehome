//const input = document.querySelector('input');
// const log = document.getElementById('values');
//input.addEventListener('input', getMoviesBySearchTerm)


const getMoviesBySearchTerm = async (x) => {
    try {
        const input = document.querySelector('input');
        // console.log(input.value)
        // searchTerm = e.target.value
        searchTerm = input.value;
        //console.log(searchTerm);
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`);
        let omdires = await response.json();
        //console.log(omdires.Search.length);
        
        const searchDiv = document.getElementById('searchResults');
        searchDiv.innerHTML =  '';

        const search = omdires.Search;

        for (let i = 0; i < search.length; i++) {
            //console.log(search[i])
            let div = document.createElement("DIV");
            div.innerHTML = `<h3>Search Results</h3><hr><h4> ${search[i].Title} </h4><p>Year: ${search[i].Year} </p><img src="${search[i].Poster}" alt="no poster"><hr>`
            searchDiv.appendChild(div);
          } 
        // console.log('This is the last line of code in this function');
      } catch(error) {
        console.log("ERROR:", error)
      }
}

document.getElementById("btn").addEventListener("click", getMoviesBySearchTerm);


// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

