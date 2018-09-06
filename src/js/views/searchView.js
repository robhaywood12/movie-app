import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = "";

export const renderResults = (titlesObj) => {
    //const titlesArray = objToArray(titlesObj);
    if (titlesObj) {
        for (var i = 0; i < titlesObj.length; i++) {
            //console.log(titlesObj[i].Title);
            renderMovieEntry(titlesObj[i]);
        }
    } else {
        renderNoResults();
    }
}

const renderMovieEntry = (movie) => {
    const markup = `
        <li>
            <div class="container"> 
                <div class="col-md-12">
                <a class="movie-link" href="#${movie.imdbID}">
                    <div class="result-template">
                        <div class="panel-heading">
                            <h3 class="movie-title-spacing">${movie.Title} (${movie.Year})
                            </h3>
                        </div>
                    </div>
                </a>
                </div>
            </div>
            
        </li>
    `;
    elements.movieList.insertAdjacentHTML('beforeend', markup);
}

const renderNoResults = () => {
    const markup = `
        <li>            
            <div class="row">
                <div class="col-md-12">
                    <h3>No results found!</h3>
                </div>
            </div>            
        </li>
    `;
    elements.movieList.insertAdjacentHTML('beforeend', markup);
}

export const clearResults = () => {
    elements.movieList.innerHTML = "";
}