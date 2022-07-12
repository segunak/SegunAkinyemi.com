
let generateGitHubCards = (repo) => {
    let repoName = repo.name;
    let repoDescription = encodeURIComponent(repo.description);
    let repoLanguage = encodeURIComponent(repo.language);
    let sourceString = `/assets/html/svgtemplate.html?repoName=${repoName};repoDescription=${repoDescription};repoLanguage=${repoLanguage}`

    const div = document.createElement('div');
    div.className = 'svg-box';
    div.id = `${repoName}-frameId`;
    div.innerHTML = `<iframe frameborder="0" scrolling="0" allowtransparency="true" src="${sourceString}" width="500" height="150"></iframe>`;
    document.getElementById('github-cards-container').appendChild(div);
};

let excludedRepos = ["SegunAkinyemi.com", "segunak"]

window.addEventListener('load', function () {
    fetch('https://api.github.com/users/segunak/repos')
        .then(response => response.json())
        .then(repoData =>
            // Get the 6 most recently updated repos, excluding those specifically chosen to be ignored
            repoData
                .filter(repo => !excludedRepos.includes(repo.name))
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6)
                .forEach(repo => generateGitHubCards(repo))
        );
});
