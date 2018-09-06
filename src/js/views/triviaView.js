import {elements} from './base';

export const renderTrivia = (triviaData) => {
    // render results
    triviaData.forEach(function(element) {
        const markup = `
        <div class="row">
            <div class="col-md-12">
                <h4>${element}</h4>
            </div>
        </div>
        `;
        elements.triviaList.insertAdjacentHTML('beforeend', markup);
    });
}

export const renderTriviaItem = (item) => {
    if (item) {
        // render result
        const markup = `
            <div class="row container center-block">
                <div class="col-md-12 panel panel-custom">
                        <p class="center-block whiteFont factFont">${item}</p>                   
                </div>
            <button class="btn btn-custom next-button pull-right">Next Fact</button> 
            </div>                       
            `;
            elements.triviaList.insertAdjacentHTML('beforeend', markup);
    } else {
        renderNoResult();
    }
}

const renderNoResult = () => {
    const markup = `
        <div class="row">
            <div class="col-md-12">
                <h4>No trivia found!</h4>
            </div>
        </div>
        `;
        elements.triviaList.insertAdjacentHTML('beforeend', markup);

}

export const renderError = () => {
    const markup = `
        <div class="row">
            <div class="col-md-12">
                <h4>Error reading trivia data! Sorry :(</h4>
            </div>
        </div>
        `;
        elements.triviaList.insertAdjacentHTML('beforeend', markup);
}


export const renderTitle = (triviaTitle) => {
    const markup = `
    <div class="col-lg-12 text-center v-center">
        <div class="container">
            <h2 class="bigFont">${triviaTitle}</h2>
        </div>
    </div>
    `;
    elements.triviaListTitle.insertAdjacentHTML('afterbegin', markup);
}

export const clearResults = () => {
    elements.triviaList.innerHTML = "";
    elements.triviaListTitle.innerHTML = "";
}

export const clearTrivia = () => {
    elements.triviaList.innerHTML = "";
}

