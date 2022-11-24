
const quote_button = document.getElementById(`quote_button`);
const result = document.getElementById(`result`);

function quoteSuccess(response){
    let data = response.data
    result.innerHTML = `<h2>${data.quote}</h2>`
}

function quoteFailure(error) {
    result.innerHTML = `<h2>An error has occured</h2?`
}

function getRandomQuote(){
    axios.request({
    url : "https://api.kanye.rest"
}).then(quoteSuccess).catch(quoteFailure);
}

///quote changes everytime you click on new quote
quote_button.addEventListener(`click`, getRandomQuote )




