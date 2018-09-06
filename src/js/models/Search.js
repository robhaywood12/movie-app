import axios from 'axios';
import {apikey} from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getMovies() {
        try {
            const mov = await axios(`http://www.omdbapi.com/?apikey=${apikey}&s=${this.query}`);
            // this is an OBJECT of search results
            this.titles = mov.data.Search;
        } catch (error) {
            alert(error);
        }
    }
}