import {getMoviesBySearchTerm} from './script.js'
import {getMovieDetailsById} from './script.js'

document.getElementById("btn").addEventListener("click", getMoviesBySearchTerm);
document.getElementById("btnid").addEventListener("click", getMovieDetailsById);

