const img = document.getElementById('img');
const input = document.getElementById('input');
const btn = document.getElementById('data-btn');
const nameElement = document.getElementById('name');
const portfolioElement = document.getElementById('portfolio');
const locationElement = document.getElementById('location');
const repoElement = document.getElementById('repo');
const followersElement = document.getElementById('followers');
const bioElement = document.getElementById('bio');
const repositoriesDiv = document.getElementById('repositoriesDiv');

const fetchData = async () => {
    const username = input.value.trim(); // Get the trimmed username from the input field

    if (username === '') {
        return; // Exit the function if the username is empty
    }

    try {
        const { avatar_url, name, blog, location, public_repos, followers, bio } = await (await fetch(`https://api.github.com/users/${username}`)).json();

        img.src = avatar_url;
        nameElement.textContent = name;
        portfolioElement.textContent = blog;
        locationElement.textContent = location;
        repoElement.textContent = public_repos;
        followersElement.textContent = followers;
        bioElement.textContent = bio;

        if (fetch) {
            document.getElementById('container').style.display = "block"
        }
        const repositoriesData = await (await fetch(`https://api.github.com/users/${username}/repos`)).json();

        repositoriesDiv.innerHTML = ''; // Clear previous repository data

        repositoriesData.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.classList.add('repository');

            repoDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p><strong>Language:</strong> ${repo.language || 'Not specified'}</p>
                <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
                <p><a href="${repo.html_url}">View Repository</a></p>
            `;

            repositoriesDiv.appendChild(repoDiv);
        });
    } catch (error) {
        console.log('Error:', error);
    }
};

// click button and call the function 
btn.addEventListener('click', fetchData);

// if anyone press enter then also they get the respone 
input.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        fetchData();
    }
});