function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to set the desired theme (light or dark)
const setDesiredTheme = (desiredTheme) => {
    // Get references to the light and dark theme stylesheets
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');
    const currentTheme = lightTheme.getAttribute('rel') === 'stylesheet' ? 'light' : 'dark';

    if (currentTheme === desiredTheme) {
        localStorage.setItem('theme', desiredTheme);
        return;
    }

    // Check if the desired theme is "light"
    if (desiredTheme === "light") {
        // Set the light theme as the active stylesheet by setting its 'rel' attribute to 'stylesheet'
        lightTheme.setAttribute('rel', 'stylesheet');

        setTimeout(function () {
            // Set the dark theme as the alternate stylesheet by setting its 'rel' attribute to 'stylesheet alternate'
            darkTheme.setAttribute('rel', 'stylesheet alternate');
        }, 10); // Adjust the delay duration as needed
    }
    // Check if the desired theme is "dark"
    else if (desiredTheme === "dark") {
        // Set the dark theme as the active stylesheet by setting its 'rel' attribute to 'stylesheet'
        darkTheme.setAttribute('rel', 'stylesheet');

        setTimeout(function () {
            // Set the light theme as the alternate stylesheet by setting its 'rel' attribute to 'stylesheet alternate'
            lightTheme.setAttribute('rel', 'stylesheet alternate');
        }, 10); // Adjust the delay duration as needed
    }
    // If the desired theme is neither "light" nor "dark", log an error message
    else {
        console.log("setDesiredTheme(): Something is wrong with the theme logic. The provided desiredTheme value is neither light nor dark.")
    }

    // Store the desired theme in the browser's local storage for future reference
    localStorage.setItem('theme', desiredTheme);
}

const setSiteThemeOnLoad = () => {
    // Get the current date/time in Eastern Time
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const easternTime = new Date(currentTime);
    const easternHours = easternTime.getHours();

    const savedTheme = localStorage.getItem('theme');
    const userSetTheme = localStorage.getItem('userSetTheme');

    // If the user hasn't set a theme manually, set the theme based on time
    if (!userSetTheme) {
        if (easternHours >= 19 || easternHours < 9) {
            setDesiredTheme('dark');
        } else {
            setDesiredTheme('light');
        }
    } else {
        setDesiredTheme(savedTheme);
    }
}

// Function to switch the site theme between light and dark
const switchSiteTheme = () => {
    // Get a reference to the light theme stylesheet
    const lightTheme = document.getElementById('light-theme');
    // Set a flag in the browser's local storage to indicate that the user has manually set the theme
    localStorage.setItem('userSetTheme', 'true');

    // Check the current state of the light theme stylesheet
    if (lightTheme.getAttribute('rel') === 'stylesheet') {
        // If the light theme is currently active (its 'rel' attribute is 'stylesheet'),
        // switch to the dark theme by calling the setDesiredTheme function with "dark" as the argument
        setDesiredTheme("dark");
    } else {
        // If the dark theme is currently active (the light theme's 'rel' attribute is not 'stylesheet'),
        // switch to the light theme by calling the setDesiredTheme function with "light" as the argument
        setDesiredTheme("light");
    }
}

// Function to determine if the device is likely a mobile
const isMobileDevice = () => {
    // Set the breakpoint for mobile vs tablet/desktop
    const mobileBreakpoint = 768; // Typical tablet size in portrait mode

    // Access the user-agent string and convert it to lowercase for case-insensitive matching
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the window's inner width is less than or equal to the breakpoint or if the user agent contains 'mobile'
    // This helps determine if the device is mobile based on screen size or user-agent indications
    const isMobile = window.innerWidth <= mobileBreakpoint || /mobile/i.test(userAgent);

    // Return true if either condition is met (indicating a mobile device), otherwise false
    return isMobile;
};

function setupQuoteButtons() {
    const randomBtn = document.querySelector('#random-quote-btn');
    const twitterShareButton = document.querySelector('#twitter-share-button');
    const quoteButtonsExist = randomBtn !== null && twitterShareButton !== null;

    if (quoteButtonsExist) {
        randomBtn.addEventListener('click', () => {
            const quoteContainers = document.querySelectorAll('.quote-container');
            const randomQuoteContainersIndex = Math.floor(Math.random() * quoteContainers.length);
            const quotes = quoteContainers[randomQuoteContainersIndex].querySelectorAll('blockquote');
            const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomQuoteIndex].innerHTML;
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
}

const updateLinkTargets = () => {
    // Retrieve all 'a' elements (links) in the document
    const links = document.getElementsByTagName('a');

    // Iterate over each link to determine the correct target attribute
    [...links].forEach(link => {
        // Check if the link belongs to the masthead menu and skip updating it
        if (link.closest('.visible-links')) {
            return;
        }
        // Check if the link's target is explicitly set to '_blank' and skip updating it. Allow override if I really want a new tab opened.
        else if (link.target === '_blank') {
            return;
        }
        // Check if the link is internal by comparing the link's host with the current window's host
        else if (link.hostname === window.location.hostname) {
            // If the link is internal, open it in the same tab
            link.target = '_self';
        }
        else {
            // Determine the appropriate target attribute value based on whether the device is mobile
            // Use '_self' to open links in the same tab for mobile devices and '_blank' to open links in a new tab for non-mobile devices
            const targetAttribute = isMobileDevice() ? '_self' : '_blank';
            link.target = targetAttribute;
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    // On pages that use the random quote button, set the functionality.
    setupQuoteButtons();

    // Call the function to initially set the target attributes for all links
    updateLinkTargets();

    // Add an event listener to the window to handle resizing This ensures that link targets are updated if the window size changes, which might change the device classification (e.g., from portrait to landscape)
    //window.addEventListener('resize', updateLinkTargets);

    // Get the theme-switcher element and add the event listener to the theme-switcher element
    const themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', switchSiteTheme);

    // Dynamically set the theme of the site.
    setSiteThemeOnLoad();
});
