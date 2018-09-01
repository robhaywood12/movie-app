import axios from 'axios';
//const imdbTrivia = require('./imdb-trivia');
import imdbTrivia from './imdb-trivia';


export default class Trivia {
    constructor(id) {
        this.id = id;
    }

    // sayHi() {
    //     console.log('hi');
    // }

    // async getTrivia() {
    //     //let res;
    //     //this.title = "title here";
    //     const res = await axios(imdbTrivia(this.id, function (err, movie) {
    //         if (err) {
    //             return console.log(err);
    //         } else {
    //             //this.title = movie.data;
    //             // this.triviaCount = movie.trivia_count;
    //             //console.log(movie);
    //             console.log(movie);
    //             //console.log(movie.trivia);
                
    //         }

    //     //console.log(res);
    //     //this.title = 'hoo-haa';
    //     //sayHi();
        
    //     }));
    //     console.log(res);

        
    // }

    getTrivia(id) {
        return new Promise(function(resolve,reject){
            imdbTrivia(id, function(err,data){
                if(err !== null) return reject(err);
                resolve(data);
            })
        })
        
    }

    
    



    // async getTrivia() {
    //     try {
    //         const res = await axios('https://secret-ocean-49799.herokuapp.com/http://food2fork.com/api/search?key=462b1cc8d4f2730081462fbc65136320&q=croissant');
    //         //const res = await axios(imdbTrivia(this.id));
    //         this.result = res;
    //         console.log(this.result);
    //     } catch (error) {
    //         alert(error);
    //     }
    // }

}







//const imdbTrivia = require('./models/imdb-trivia');

// imdbTrivia('tt0137523', function (err, movie) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(movie);

//   /*
//   {
//     title: 'Fight Club (1999)',
//     trivia_count: 161,
//     trivia: [...]
//   }
//   */
// });