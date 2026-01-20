import { useEffect, useState } from "react";
import UserCard from "./UserCard.jsx";
import "./style.css";

export default function GitHubProfileFinder() {
  const [username, setUsername] = useState("MahidharBoppana");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      console.log(data);

      if (data) {
        setUserData(data);
        setLoading(false);
        setUsername("");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  function handleSubmit(params) {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data please wait...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> : null}
    </div>
  );
}
