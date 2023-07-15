import React, { useState, useRef } from 'react';

const ProfileFinder = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [name, setName] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [location, setLocation] = useState('');
  const [repoCount, setRepoCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [bio, setBio] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [containerVisible, setContainerVisible] = useState(false);

  const fetchData = async () => {
    const username = inputRef.current.value.trim();

    if (username === '') {
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();
      const { avatar_url, name, blog, location, public_repos, followers, bio } = userData;

      setAvatarUrl(avatar_url);
      setName(name);
      setPortfolio(blog);
      setLocation(location);
      setRepoCount(public_repos);
      setFollowersCount(followers);
      setBio(bio);

      const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const repositoriesData = await repositoriesResponse.json();
      setRepositories(repositoriesData);

      if (repositoriesData.length > 0) {
        setContainerVisible(true);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const inputRef = useRef();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div>
      <div className="inputbox-button">
        <h1>GitHub User Finder</h1>
        <input
          type="text"
          placeholder="Enter Username Here"
          ref={inputRef}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchData} id="data-btn">Get Data</button>
      </div>

      <div className="container" style={{ display: containerVisible ? 'block' : 'none' }}>
        <div className="image">
          <img src={avatarUrl} alt="User Avatar" />
        </div>
        <div className="info">
          <div className="profile-info">
            <label>Name:</label>
            <div id="name">{name}</div>
          </div>

          <div className="profile-info">
            <label>Portfolio:</label>
            <div id="portfolio">{portfolio}</div>
          </div>

          <div className="profile-info">
            <label>Location:</label>
            <div id="location">{location}</div>
          </div>

          <div className="profile-info">
            <label>Repo:</label>
            <div id="repo">{repoCount}</div>
          </div>

          <div className="profile-info">
            <label>Bio:</label>
            <div id="bio">{bio}</div>
          </div>

          <div className="profile-info">
            <label>Followers:</label>
            <div id="followers">{followersCount}</div>
          </div>
        </div>

        <div id="repositoriesDiv" className="grid-container">
          {repositories.map((repo) => (
            <div className="repository" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>
                <strong>Language:</strong> {repo.language || 'Not specified'}
              </p>
              <p>
                <strong>Stars:</strong> {repo.stargazers_count}
              </p>
              <p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileFinder;