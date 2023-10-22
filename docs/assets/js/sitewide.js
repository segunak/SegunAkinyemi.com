// You can change this to "load" to wait for literally everything to be loaded if you're running into issues.
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the color of the blockquote's border-left
    function getBlockquoteBorderColor() {
        const blockquote = document.querySelector('blockquote');
        const computedStyle = getComputedStyle(blockquote);
        return computedStyle.getPropertyValue('border-left-color');
    }

    const randomBtn = document.querySelector('#random-quote-btn');
    const twitterShareButton = document.querySelector('#twitter-share-button')
    const quoteButtonsExist = randomBtn !== null && twitterShareButton !== null;

    if (quoteButtonsExist) {
        randomBtn.addEventListener('click', () => {
            const quoteContainer = document.querySelector('.quote-container');
            const quotes = quoteContainer.querySelectorAll('blockquote');
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex].innerHTML;
            const quoteDisplay = document.querySelector('#random-quote-display');
            quoteDisplay.innerHTML = randomQuote;
        });

        twitterShareButton.addEventListener('click', () => {
            const quoteElement = document.querySelector('#random-quote-display p');
            const quoteText = quoteElement.innerText;
            const authorElement = document.querySelector('#random-quote-display cite');
            const authorName = authorElement.innerText;
            const encodedQuoteText = encodeURIComponent(`${quoteText}\n\n-${authorName}`);
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuoteText}`;
            window.open(twitterUrl);
        });
    }

    function setDesiredTheme(desiredTheme) {
        var lightTheme = document.getElementById('theme_source');  // Reference to the main theme stylesheet. Light mode.
        var darkTheme = document.getElementById('theme_source_2'); // Reference to an alternate theme stylesheet. Dark mode.

        var currentTheme = lightTheme.getAttribute('rel') === 'stylesheet' ? 'light' : 'dark';

        if (currentTheme === desiredTheme) {
            return;
        }

        if (desiredTheme === "light") {
            // Change the 'rel' attribute of the light theme stylesheet to 'stylesheet'.
            lightTheme.setAttribute('rel', 'stylesheet');
            // Schedule the following code to run after a 10ms delay.
            setTimeout(function () {
                // After the delay, change the 'rel' attribute of the dark theme stylesheet to 'stylesheet alternate'.
                darkTheme.setAttribute('rel', 'stylesheet alternate');
            }, 10);
            // Store the theme state ('light') in the session storage to remember it.
            sessionStorage.setItem('theme', 'light');
        }
        else if (desiredTheme === "dark") {
            // Change the 'rel' attribute of the dark theme stylesheet to 'stylesheet'.
            darkTheme.setAttribute('rel', 'stylesheet');
            // Schedule the following code to run after a 10ms delay.
            setTimeout(function () {
                // After the delay, change the 'rel' attribute of the light theme stylesheet to 'stylesheet alternate'.
                lightTheme.setAttribute('rel', 'stylesheet alternate');
            }, 10);
            // Store the theme state ('dark') in the session storage to remember it.
            sessionStorage.setItem('theme', 'dark');
        }
    }

    function themeSwitch() {
        var lightTheme = document.getElementById('theme_source');  // Reference to the main theme stylesheet. Light mode.
        var darkTheme = document.getElementById('theme_source_2'); // Reference to an alternate theme stylesheet. Dark mode.
        sessionStorage.setItem('hasUserClickedThemeButton', 'true');

        // Check the current state of the main theme stylesheet.
        if (lightTheme.getAttribute('rel') == 'stylesheet') {
            // If the light theme is currently active (linked as a stylesheet), do the following:
            setDesiredTheme("dark");
        } else {
            // Else If the dark theme is active, do the following:
            setDesiredTheme("light");
        }
    }

    function setThemeBasedOnTime() {
        const currentTime = new Date();
        const currentUTCHours = currentTime.getUTCHours();
        var hasUserClickedThemeButton = sessionStorage.getItem('hasUserClickedThemeButton');

        if (hasUserClickedThemeButton === "true") {
            // Respect a user who has chosen a theme by clicking the button. If so, do nothing, leave it as they requested.
            return;
        }

        // Check if the current time is between 5 PM (17:00) and 11 AM (11:00) UTC.
        if (currentUTCHours >= 17 || currentUTCHours < 11) {
            setDesiredTheme("dark");
        }
        else {
            setDesiredTheme("light");
        }
    }

    const themeSwitchButton = document.getElementById('theme-switch-button');
    themeSwitchButton.addEventListener('click', themeSwitch);
    setThemeBasedOnTime();
});
