!function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],d=0,v=[];d<c.length;d++)o=c[d],i[o]&&v.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);v.length;)v.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([403,1]),n()}({191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.elements={movieList:document.querySelector(".movie-list"),searchInput:document.querySelector(".search-field"),searchButton:document.querySelector(".search-button"),triviaListTitle:document.querySelector(".trivia-list-title"),triviaList:document.querySelector(".trivia-list"),listContainer:document.querySelector(".list-container"),triviaListContainer:document.querySelector(".trivia-list-container")};var r=t.elementStrings={loader:"loader"};t.renderLoader=function(e){var t='\n    <div class="'+r.loader+' loader center-block">\n    </div>\n    ';e.insertAdjacentHTML("afterbegin",t)},t.clearLoader=function(){var e=document.querySelector("."+r.loader);e&&e.parentElement.removeChild(e)}},403:function(e,t,n){n(404),e.exports=n(606)},606:function(e,t,n){"use strict";(function(e){var t=u(n(609)),r=c(n(630)),i=c(n(631)),a=n(191),o=u(n(632));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,a){try{var o=t[i](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}var l={};window.location.hash="";var d,v,f=(d=s(regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(window.location.hash="",o=r.getInput(),r.clearInput(),!o){n.next=18;break}return l.search=new t.default(o),r.clearResults(),i.clearResults(),(0,a.renderLoader)(a.elements.movieList),n.prev=8,n.next=11,l.search.getMovies();case 11:(0,a.clearLoader)(),r.renderResults(l.search.titles),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(8),e.log(n.t0);case 18:case"end":return n.stop()}},n,void 0,[[8,15]])})),function(){return d.apply(this,arguments)}),p=(v=s(regeneratorRuntime.mark(function e(){var t,n,c,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.location.hash.replace("#",""))){e.next=23;break}return l.trivia=new o.default(t),r.clearResults(),i.clearResults(),(0,a.renderLoader)(a.elements.triviaListContainer),e.prev=6,n=function(){var e=l.trivia.getRandomListNum(u),t=l.trivia.getTriviaByIndex(e,u);i.renderTriviaItem(t)},e.next=10,l.trivia.getTrivia(t);case 10:e.sent,c=l.trivia.title,u=l.trivia.trivia,i.renderTitle(c),(0,a.clearLoader)(),n(),a.elements.triviaList.addEventListener("click",function(e){e.target.closest(".next-button")&&(i.clearTrivia(),n())}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),(0,a.clearLoader)(),i.renderError();case 23:case"end":return e.stop()}},e,void 0,[[6,19]])})),function(){return v.apply(this,arguments)});window.addEventListener("hashchange",p),a.elements.searchButton.addEventListener("click",function(e){e.preventDefault(),f()}),document.addEventListener("keypress",function(e){13!==e.keyCode&&13!==e.which||(e.preventDefault(),a.elements.searchButton.click())})}).call(this,n(53))},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(610),o=(r=a)&&r.__esModule?r:{default:r},c=n(629);var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.query=t}return i(e,[{key:"getMovies",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.default)("http://www.omdbapi.com/?apikey="+c.apikey+"&s="+this.query);case 3:t=e.sent,this.titles=t.data.Search,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,a){try{var o=t[i](a),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})});return function(){return t.apply(this,arguments)}}()}]),e}();t.default=u},629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.apikey="7771a2a0",t.cors="https://cors-anywhere.herokuapp.com/"},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearResults=t.renderResults=t.clearInput=t.getInput=void 0;var r=n(191),i=(t.getInput=function(){return r.elements.searchInput.value},t.clearInput=function(){return r.elements.searchInput.value=""},t.renderResults=function(e){if(e)for(var t=0;t<e.length;t++)i(e[t]);else a()},function(e){var t='\n        <li>\n            <div class="container"> \n                <div class="col-md-12">\n                <a class="movie-link" href="#'+e.imdbID+'">\n                    <div class="result-template">\n                        <div class="panel-heading">\n                            <h3 class="movie-title-spacing">'+e.Title+" ("+e.Year+")\n                            </h3>\n                        </div>\n                    </div>\n                </a>\n                </div>\n            </div>\n            \n        </li>\n    ";r.elements.movieList.insertAdjacentHTML("beforeend",t)}),a=function(){r.elements.movieList.insertAdjacentHTML("beforeend",'\n        <li>            \n            <div class="row">\n                <div class="col-md-12">\n                    <h3>No results found!</h3>\n                </div>\n            </div>            \n        </li>\n    ')};t.clearResults=function(){r.elements.movieList.innerHTML=""}},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearTrivia=t.clearResults=t.renderTitle=t.renderError=t.renderTriviaItem=t.renderTrivia=void 0;var r=n(191),i=(t.renderTrivia=function(e){e.forEach(function(e){var t='\n        <div class="row">\n            <div class="col-md-12">\n                <h4>'+e+"</h4>\n            </div>\n        </div>\n        ";r.elements.triviaList.insertAdjacentHTML("beforeend",t)})},t.renderTriviaItem=function(e){if(e){var t='\n            <div class="row container center-block">\n                <div class="col-md-12 panel panel-custom">\n                        <p class="center-block whiteFont factFont">'+e+'</p>                   \n                </div>\n            <button class="btn btn-custom next-button pull-right">Next Fact</button> \n            </div>                       \n            ';r.elements.triviaList.insertAdjacentHTML("beforeend",t)}else i()},function(){r.elements.triviaList.insertAdjacentHTML("beforeend",'\n        <div class="row">\n            <div class="col-md-12">\n                <h4>No trivia found!</h4>\n            </div>\n        </div>\n        ')});t.renderError=function(){r.elements.triviaList.insertAdjacentHTML("beforeend",'\n        <div class="row">\n            <div class="col-md-12">\n                <h4>Error reading trivia data! Sorry :(</h4>\n            </div>\n        </div>\n        ')},t.renderTitle=function(e){var t='\n    <div class="col-lg-12 text-center v-center">\n        <div class="container">\n            <h2 class="bigFont">'+e+"</h2>\n        </div>\n    </div>\n    ";r.elements.triviaListTitle.insertAdjacentHTML("afterbegin",t)},t.clearResults=function(){r.elements.triviaList.innerHTML="",r.elements.triviaListTitle.innerHTML=""},t.clearTrivia=function(){r.elements.triviaList.innerHTML=""}},632:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(633),o=(r=a)&&r.__esModule?r:{default:r};var c=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e}return i(t,[{key:"getTrivia",value:function(t){try{var n=this;return new Promise(function(e,n){(0,o.default)(t,function(t,r){if(null!==t)return n(t);e(r)})}).then(function(e){n.title=e.title,n.trivia=e.trivia,n.trivia_count=e.trivia_count})}catch(t){e.log("oh noo charlie")}}},{key:"getRandomListNum",value:function(e){var t;return t=e.length,Math.floor(Math.random()*Math.floor(t))}},{key:"getTriviaByIndex",value:function(e,t){return t[e]}}]),t}();t.default=c}).call(this,n(53))},633:function(e,t,n){"use strict";var r=n(634),i=n(839);(function(){var t=function(e,t){!function(e,t,n){n||(n=t),r.get(e,function(e,t){return 200!==t.statusCode?n({status_code:t.statusCode,details:t.body}):n(null,i.load(t.body))})}("https://cors-anywhere.herokuapp.com/http://www.imdb.com/title/"+e+"/trivia",function(e,n){if(e)return t(e);var r=n('meta[property="og:title"]').attr("content"),i=[];return n("div[class=sodatext]").each(function(e){var t=n(this);i[e]=t.text().trim().replace(/\\/g,"")}),t(null,{title:r,trivia_count:i.length,trivia:i})})};e.exports=t}).call(void 0)},647:function(e,t){},649:function(e,t){},681:function(e,t){},682:function(e,t){},749:function(e,t){},845:function(e,t){}});