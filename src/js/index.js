// Global app controller
import num from './test';
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as triviaView from './views/triviaView';
import {elements} from './views/base';
import Trivia from './models/Trivia';

// const searchTest = async () => {
//     var searchObject = new Search('Sherlock');
//     await searchObject.getMovies();
//     console.log(searchObject.titles);
//     searchView.renderResults(searchObject.titles);
// }

//searchTest();

/** Global state of the app
 * - 
 * 
 * 
 */

const state = {}



const searchTest = async () => {
    // 1) get query from view
    const query = searchView.getInput();

    if (query) {
        // new search object added
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearResults();
        //triviaView ? triviaView.clearResults() : "";
        

        try {
            // search for movies
            await state.search.getMovies();

            // render movies to page
            searchView.renderResults(state.search.titles);
            //console.log(state.search);
        } catch (err) {
            console.log(err);
        }
    }
}

elements.searchButton.addEventListener('click', event => {    
    searchTest();
});


const controlTrivia = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Create new trivia object
        state.trivia = new Trivia(id);

        // Prepare UI for changes
        searchView.clearResults();
        triviaView.clearResults();    

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

        getAndRenderRandomTrivia();

        // let movieRandomListItem = state.trivia.getRandomListNum(movieTrivia);
        // let movieRandomItem = state.trivia.getTriviaByIndex(movieRandomListItem, movieTrivia);

        // Render trivia on UI        
        //triviaView.renderTitle(movieTitle);
        //triviaView.renderTriviaItem(movieRandomItem);

        elements.triviaList.addEventListener('click', event => {
            const btn = event.target.closest('.next-button');
            if (btn) {
                triviaView.clearTrivia();
                getAndRenderRandomTrivia();
            }
        })

    }
}


window.addEventListener('hashchange', controlTrivia);

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// const getRandomNumber = () => {
//     return (getRandomInt(3) + 1);
// }



