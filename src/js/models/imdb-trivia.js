//import {cors} from '../config';
const request = require('request');
const scraper = require('cheerio');

let scrape = function (url, options, cb) {
  if (!cb) {
    cb = options;
  }

  request.get(url, function (err, res) {
    if (res.statusCode !== 200) {
      return cb({
        status_code: res.statusCode,
        details: res.body
      });
    }

    return cb(null, scraper.load(res.body));
  });
};

(function () {
  const imdbTrivia = (function () {    
    let imdbTrivia = function (movieId, cb) {
      const baseUrl = `https://secret-ocean-49799.herokuapp.com/https://www.imdb.com/title`;

      scrape(baseUrl + '/' + movieId + '/trivia', function (err, jq) {
        if (err) {
          return cb(err);
        }

        let onMobile = true;

        let movieTitle = jq('meta[property="og:title"]').attr('content');        
        let results = [];

        jq('div[class=sodatext]').each(function (index) {
          let item = jq(this);
          results[index] = item.text().trim().replace(/\\/g, '');
          onMobile = false;
        });

        if(results.length == 0 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          onMobile = true;
        }



        jq('div.drop-panel-content').each(function (index) {
          let item = jq(this);
          if (onMobile) {
            results[index] = item.text().trim().replace(/\\/g, '');
          }
          console.log("work");
        });
        
        


        return cb(null, {
          title: movieTitle,
          trivia_count: results.length,
          trivia: results
        });
      });
    };

    return imdbTrivia;
  })();
  module.exports = imdbTrivia;
}).call(this);