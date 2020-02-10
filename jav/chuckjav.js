`use strict`
const apiurl = `https://api.chucknorris.io/jokes/random?category=dev`;
const Quotebutton = document.querySelector('#refreshQuote');

function getQuote() {
    const chuckSaysParagraph = document.querySelector('#chuckSays');
    chuckSaysParagraph.innerHTML = 'chuck in an iife';
    get(apiurl)
        .then(function (response) {
            chuckSaysParagraph.innerHTML = response.value;
            //     console.log(response.value);
        }
        );
};


Quotebutton.addEventListener('click', function (e) {
    e.preventDefault();
    getQuote();
});
getQuote();