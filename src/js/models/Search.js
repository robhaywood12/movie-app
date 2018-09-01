import axios from 'axios';
import apikeyclear from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getMovies() {
        try {
            const mov = await axios(`http://www.omdbapi.com/?apikey=thewdb&s=${this.query}`);
            // this is an OBJECT of search results
            this.titles = mov.data.Search;
        } catch (error) {
            alert(error);
        }
    }
}