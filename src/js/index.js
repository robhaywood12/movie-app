// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as triviaView from './views/triviaView';
import {elements, renderLoader, clearLoader} from './views/base';
import Trivia from './models/Trivia';


const state = {}
window.location.hash = '';


const searchTest = async () => {
    window.location.hash = '';
    // 1) get query from view
    const query = searchView.getInput();
    searchView.clearInput();

    if (query) {
        // new search object added
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearResults();
        triviaView.clearResults();
        renderLoader(elements.movieList);
        

        try {
            // search for movies
            await state.search.getMovies();

            // render movies to page
            clearLoader();
            searchView.renderResults(state.search.titles);
            //console.log(state.search);
        } catch (err) {
            console.log(err);
        }
    }
}


const controlTrivia = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Create new trivia object
        state.trivia = new Trivia(id);

        // Prepare UI for changes
        searchView.clearResults();
        triviaView.clearResults(); 
        renderLoader(elements.triviaListContainer);   

        try {
        // Get trivia data
        const x = await state.trivia.getTrivia(id);

        // Assign trivia data
        const movieTitle = state.trivia.title;
        const movieTrivia = state.trivia.trivia;

        triviaView.renderTitle(movieTitle);

        function getAndRenderRandomTrivia() {
            let movieRandomListItem = state.trivia.getRandomListNum(movieTrivia);
            let movieRandomItem = state.trivia.getTriviaByIndex(movieRandomListItem, movieTrivia);
            triviaView.renderTriviaItem(movieRandomItem);
        }

        clearLoader();
        getAndRenderRandomTrivia();


        elements.triviaList.addEventListener('click', event => {
            const btn = event.target.closest('.next-button');
            if (btn) {
                triviaView.clearTrivia();
                getAndRenderRandomTrivia();
            }
        })
        
        } catch (error) {
            clearLoader();
            triviaView.renderError();
        }
    }
}


window.addEventListener('hashchange', controlTrivia);

elements.searchButton.addEventListener('click', event => { 
    event.preventDefault();   
    searchTest();
});

document.addEventListener('keypress', function(event) {
    //event.preventDefault();
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        elements.searchButton.click();
    }
});



