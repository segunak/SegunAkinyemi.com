let metaImageTag = document.querySelector('meta[property="og:image"]');

if (metaImageTag) { 
    console.log("Found a meta tag with og:image. Creating equivalent twitter:image meta tag");
    let imageURL = metaImageTag.getAttribute("content");
    let twitterImageTag = document.createElement("meta");

    twitterImageTag.setAttribute("name", "twitter:image");
    twitterImageTag.setAttribute("content", imageURL);
    document.head.appendChild(twitterImageTag);
}
