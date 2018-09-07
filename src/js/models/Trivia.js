//const imdbTrivia = require('./imdb-trivia');
import imdbTrivia from './imdb-trivia';


export default class Trivia {
    constructor(id) {
        this.id = id;
    }

    getTrivia(id) {
        try {
            var self = this;
            return new Promise(function(resolve,reject){
                imdbTrivia(id, function(err,data){
                    if(err !== null) return reject(err);
                    resolve(data);
                })
            }).then(function(data) {
                self.title = data.title;
                self.trivia = data.trivia;
                self.trivia_count = data.trivia_count;
                console.log(data.title);
                console.log(data.trivia_count);
                console.log(data.trivia);
            })
        } catch (error) {
            console.log("oh noo charlie");
        }  

        
    }

    getRandomListNum(list) {
        let max = 0;
        max = list.length;
        return Math.floor(Math.random() * Math.floor(max));
    }

    getTriviaByIndex(num, list) {
        return list[num];
    }

}

