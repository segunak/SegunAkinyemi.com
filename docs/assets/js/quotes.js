
const randomBtn = document.querySelector('#random-quote-btn');
randomBtn.addEventListener('click', () => {
    const quoteContainer = document.querySelector('.quote-container');
    const quotes = quoteContainer.querySelectorAll('blockquote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].innerHTML;

    const quoteDisplay = document.querySelector('#random-quote-display');
    quoteDisplay.innerHTML = randomQuote;
});

const twitterShareButton = document.querySelector('#twitter-share-button');
twitterShareButton.addEventListener('click', () => {
    const quoteElement = document.querySelector('#random-quote-display p');
    const quoteText = quoteElement.innerText;

    const authorElement = document.querySelector('#random-quote-display cite');
    const authorName = authorElement.innerText;

    const encodedQuoteText = encodeURIComponent(`${quoteText}\n\n-${authorName}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuoteText}`;

    window.open(twitterUrl);
});
