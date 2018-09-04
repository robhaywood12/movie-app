import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const renderResults = (titlesObj) => {
    //const titlesArray = objToArray(titlesObj);
    for (var i = 0; i < titlesObj.length; i++) {
        //console.log(titlesObj[i].Title);
        renderMovieEntry(titlesObj[i]);
    }
}

const renderMovieEntry = (movie) => {
    const markup = `
        <li>
            
                <div class="row">
                    <div class="col-md-12">
                    <a class="movie-link" href="#${movie.imdbID}">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="">${movie.Title}</h3>
                            </div>
                            <div class="panel-body">${movie.imdbID}</div>
                        </div>
                    </a>
                    </div>
                </div>
            
        </li>
    `;
    elements.movieList.insertAdjacentHTML('beforeend', markup);
}

export const clearResults = () => {
    elements.movieList.innerHTML = "";
}