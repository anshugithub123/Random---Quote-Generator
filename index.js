const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


const apiURL = "https://api.quotable.io/random";

async function getQuote(){
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerHTML = "~" + quoteAuthor;
    console.log(data);
}

btnEl.addEventListener("click", getQuote);