export const elements = {
    movieList: document.querySelector('.movie-list'),
    searchInput: document.querySelector('.search-field'),
    searchButton: document.querySelector('.search-button'),
    triviaListTitle: document.querySelector('.trivia-list-title'),
    triviaList: document.querySelector('.trivia-list'),
    listContainer: document.querySelector('.list-container'),
    triviaListContainer: document.querySelector('.trivia-list-container')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = (parent) => {
    const loader = `
    <div class="${elementStrings.loader} loader center-block">
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};
