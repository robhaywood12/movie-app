// Global app controller
import num from './test';
import Search from './models/Search';
import * as searchView from './views/searchView';
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
        // Prepare UI for changes

        // Create new trivia object
        state.trivia = new Trivia(id);
    

        // Get trivia data
        const x = await state.trivia.getTrivia(id);

        // Render trivia
        console.log(state.trivia.title);
        console.log(state.trivia.trivia_count);
        console.log(state.trivia.trivia);
        //state.trivia.sayHi();
        //console.log(x);

    }
}

window.addEventListener('hashchange', controlTrivia);