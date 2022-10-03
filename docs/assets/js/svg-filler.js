
let getParamValue = (paramName) => {
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split(';'); //get key-value pairs

    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

let descriptionToLines = (description) => {
    const splitter = " ";
    const words = description.split(splitter);
    let line = "";
    const lines = [];

    for (const word of words) {
        line += word + splitter;

        if (line.length > 55) {
            lines.push(line);
            line = "";
        }
    }

    if (line !== "") {
        lines.push(line);
    }

    return lines;
}

let insertDescriptionLine = (yAxis, description) => {
    return htmlToElement(`
    <g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" 
    stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
        <text fill="#586069" fill-opacity="1" stroke="none" xml:space="preserve" x="17" y="${yAxis}"
        font-family="sans-serif" font-size="14" font-weight="400" font-style="normal">${description}</text>
    </g>
    `);
}

let setGitHubCard = async () => {
    let repoName = getParamValue("repoName");
    let repoLanguage = decodeURIComponent(getParamValue("repoLanguage"));
    let repoDescription = decodeURIComponent(getParamValue("repoDescription"));
    let descriptionLines = descriptionToLines(repoDescription);
    let descriptionTags = [];

    // 65 is the starting height of the first line of the description.
    // yOffset is the space between lines.
    let y = 65;
    const yOffset = 21;

    for (let desc of descriptionLines) {
        // if the description is too long, stop.
        if (y >= 120) {
            break;
        }
        else {
            descriptionTags.push(insertDescriptionLine(y, desc));
            y += yOffset;
        }
    }

    // Getting colors associated with GitHub languages.
    let colors;
    await fetch("/assets/json/colors.json")
        .then(response => response.json())
        .then(data => colors = data);

    // The value of y at this stage should be the y value of the last description tag that was made.
    let heightSetting = 150; // 150px is the maximum height of the SVG.
    let descriptionString = descriptionTags.map(tag => tag.outerHTML).join("\n");

    document.getElementById("heightSetting1").setAttribute("height", heightSetting);
    document.getElementById("heightSetting2").setAttribute("height", heightSetting);
    document.getElementById("heightSetting3").setAttribute("height", heightSetting);

    document.getElementById("languageTag").setAttribute("y", 140);
    document.getElementById("languageCircle").setAttribute("cy", 136);

    console.log(descriptionString);

    document.body.innerHTML = document.body.innerHTML.replace(/{repo-name}/g, repoName);
    document.body.innerHTML = document.body.innerHTML.replace(/{repo-language}/g, repoLanguage.trim() == "null" ? "N/A" : repoLanguage);
    document.getElementById("languageCircle").setAttribute("fill", colors[repoLanguage] == null ? "#7851a9": colors[repoLanguage].color);
    document.body.innerHTML = document.body.innerHTML.replace(/{repo-description}/g, descriptionString.replace("null", "N/A"));
};

window.onload = setGitHubCard;
