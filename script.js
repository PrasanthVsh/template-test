// let apidata = [];
const quoteContainer = document.getElementById('quote-container');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
const loader = document.getElementById('loader');

// show loading
function showLoadingSpinner(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function removeLoadingSpinner(){
  if(!loader.hidden){
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

//show new quote
const newQuote = () => {
  // loading
  showLoadingSpinner();
  // pick a random quote from apidata array
  const quote = localquotes[Math.floor(Math.random() * localquotes.length)];
  if (!quote.author) {
    authorText.innerText = "Unknown";
  } else {
    authorText.innerText = quote.author;
  }

  if(quote.text.length > 50){
    quoteText.classList.add('long-quote');
  }else{
    quoteText.classList.add('long-quote');
  }
  quoteText.innerText = quote.text;
  removeLoadingSpinner();

};

// tweet code
const tweetQuote = () =>{
    const twitterUrl = `https://twitter.com/intent/tweet`;
    window.open('twitterUrl', '_blank');
}

//Event Listeners
document.getElementById('new-quote').addEventListener('click', newQuote);
document.getElementById('twitter').addEventListener('click', tweetQuote);

newQuote();


// getting quote list from API
// const getQuotes = () => {
//   try {
//     fetch("https://type.fit/api/quotes")
//       .then((response) => response.json())
//       .then((apidata) => {
//         newQuote();
//       });
//   } catch (error) {
//     //catch error here
//   }
// }

