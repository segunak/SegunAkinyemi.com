function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const setDesiredTheme = (desiredTheme) => {
    var lightTheme = document.getElementById('theme_source');  // Reference to the main theme stylesheet. Light mode.
    var darkTheme = document.getElementById('theme_source_2'); // Reference to an alternate theme stylesheet. Dark mode.
    var currentTheme = lightTheme.getAttribute('rel') === 'stylesheet' ? 'light' : 'dark';

    if (currentTheme === desiredTheme) {
        localStorage.setItem('theme', desiredTheme);
        return;
    }

    if (desiredTheme === "light") {
        // Change the 'rel' attribute of the light theme stylesheet to 'stylesheet'.
        lightTheme.setAttribute('rel', 'stylesheet');

        // Store the theme state ('light') in the local storage to remember it.
        localStorage.setItem('theme', 'light');

        // Schedule the following code to run after a specified delay
        setTimeout(function () {
            // After the delay, change the 'rel' attribute of the dark theme stylesheet to 'stylesheet alternate'.
            darkTheme.setAttribute('rel', 'stylesheet alternate');
        }, 100); // Adjust the delay duration as needed
    }
    else if (desiredTheme === "dark") {
        // Change the 'rel' attribute of the dark theme stylesheet to 'stylesheet'.
        darkTheme.setAttribute('rel', 'stylesheet');

        // Store the theme state ('dark') in the local storage to remember it.
        localStorage.setItem('theme', 'dark');

        // Schedule the following code to run after a specified delay
        setTimeout(function () {
            // After the delay, change the 'rel' attribute of the light theme stylesheet to 'stylesheet alternate'.
            lightTheme.setAttribute('rel', 'stylesheet alternate');
        }, 100); // Adjust the delay duration as needed
    }
}

const setThemeBasedOnTime = () => {
    // Get the current date/time in Eastern Time
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const easternTime = new Date(currentTime);
    const easternHours = easternTime.getHours();
    var hasUserClickedThemeButton = localStorage.getItem('hasUserClickedThemeButton');

    if (hasUserClickedThemeButton === "true") {
        const userChosenTheme = localStorage.getItem('theme');
        setDesiredTheme(userChosenTheme);
        return;
    }

    // Check if the current time in Eastern Time is between 7 PM (19:00) and 9 AM (09:00).
    if (easternHours >= 19 || easternHours < 9) {
        setDesiredTheme("dark");
    } else {
        setDesiredTheme("light");
    }
}

const switchSiteTheme = () => {
    var themeSwitcher = document.getElementById('theme-switcher');
    var lightTheme = document.getElementById('theme_source');
    localStorage.setItem('hasUserClickedThemeButton', 'true');

    // Check the current state of the main theme stylesheet.
    if (lightTheme.getAttribute('rel') == 'stylesheet') {
        // If the light theme is currently active (linked as a stylesheet), do the following:
        setDesiredTheme("dark");
    } else {
        // Else If the dark theme is active, do the following:
        setDesiredTheme("light");
    }

    themeSwitcher.classList.toggle('darkThemeToggled');
}

const initializeThemeSwitcherButtonState = () => {
    var themeSwitcher = document.getElementById('theme-switcher');
    var currentTheme = localStorage.getItem('theme');

    if (currentTheme === "light") {
        themeSwitcher.classList.remove('darkThemeToggled');
    }
    else if (currentTheme === "dark") {
        themeSwitcher.classList.add('darkThemeToggled');
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

// Function to update the target attribute of all links based on the detected device type and if the link is internal
const updateLinkTargets = () => {
    // Retrieve all 'a' elements (links) in the document
    const links = document.getElementsByTagName('a');

    // Iterate over each link to determine the correct target attribute
    [...links].forEach(link => {
        // Check if the link's target is explicitly set to '_blank' and skip updating it. Allow override if I really want a new tab opened.
        if (link.target === '_blank') {
            return;
        }
        // Check if the link is internal by comparing the link's host with the current window's host
        else if (link.hostname === window.location.hostname) {
            // If the link is internal, open it in the same tab
            link.target = '_self';
        }
        // Check if the link's target is explicitly set to '_blank' and skip updating it. Allow override if I really want a new tab opened.
        else if (link.target === '_blank') {
            return;
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
    // Get the theme-switcher element and add the event listener to the theme-switcher element
    const themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', switchSiteTheme);

    // Dynamically set the theme based on time of day. Users can override this using the theme switch button.
    setThemeBasedOnTime();

    // On pages that use the random quote button, set the functionality.
    setupQuoteButtons();

    // Call the function to initially set the target attributes for all links
    updateLinkTargets();

    // Add an event listener to the window to handle resizing This ensures that link targets are updated if the window size changes, which might change the device classification (e.g., from portrait to landscape)
    window.addEventListener('resize', updateLinkTargets);
});

window.addEventListener('load', function () {
    // Ensure the theme switcher button reflects whatever theme is active.
    initializeThemeSwitcherButtonState();
});
