
let generateGitHubCards = (repo) => {
    const div = document.createElement('div');
    div.className = 'svg-box';

    console.log(repo.name);
    console.log(repo.updated_at);
    console.log(repo.description);

    // Somehow need to pass stuff like repo.description to the iframe template aso that it has the 
    // right data.
    div.innerHTML = `
    <iframe frameborder="0" scrolling="0" allowtransparency="true" 
        src="/assets/htmlcards/svgtemplate.html?repoName=${repo.name};repoDescription=${repo.description}" width="500" height="150">
    </iframe>
    `;

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
                .forEach(repo =>
                    // filter to only those repos you want to show on the site.
                    generateGitHubCards(repo)
                )
        );
});
