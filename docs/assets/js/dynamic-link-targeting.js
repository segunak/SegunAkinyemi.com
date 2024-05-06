// Wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

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

    // Function to update the target attribute of all links based on the detected device type
    const updateLinkTargets = () => {
        // Retrieve all 'a' elements (links) in the document
        const links = document.getElementsByTagName('a');

        // Determine the appropriate target attribute value based on whether the device is mobile
        // Use '_self' to open links in the same tab for mobile devices and '_blank' to open links in a new tab for non-mobile devices
        const targetAttribute = isMobileDevice() ? '_self' : '_blank';

        // Convert the HTMLCollection of links into an array and iterate over each link
        [...links].forEach(link => {
            // Set the 'target' attribute of each link to the appropriate value determined above
            link.target = targetAttribute;
        });
    };

    // Call the function to initially set the target attributes for all links
    updateLinkTargets();

    // Add an event listener to the window to handle resizing
    // This ensures that link targets are updated if the window size changes, which might change the device classification (e.g., from portrait to landscape)
    window.addEventListener('resize', updateLinkTargets);
});
