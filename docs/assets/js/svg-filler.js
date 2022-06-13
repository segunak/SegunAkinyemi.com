

let getParamValue = (paramName) => {
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split(';'); //get key-value pairs

    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}

let setGitHubCards = () => {
    let repoName = getParamValue("repoName");
    let repoDescription = decodeURI(getParamValue("repoDescription"));

    document.body.innerHTML = document.body.innerHTML.replace(/{repo-name}/g, repoName);
    document.body.innerHTML = document.body.innerHTML.replace(/{repo-description}/g, repoDescription);

};

window.onload = setGitHubCards;
