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
    // render result
    const markup = `
        <div class="row">
            <div class="col-md-12">
                <h4>${item}</h4>
            </div>
        </div>
        <button class="next-button pull-right">Next Fact</button>
        `;
        elements.triviaList.insertAdjacentHTML('beforeend', markup);
}


export const renderTitle = (triviaTitle) => {
    const markup = `
    <div class="col-lg-12 text-center v-center">
        <h1>${triviaTitle}</h1>
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

