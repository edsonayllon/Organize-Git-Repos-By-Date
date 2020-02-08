const fetch = require("node-fetch");

const app = async (username) => {
    try {
        const userApi = await fetch(`https://api.github.com/users/${username}`);
        const userJson = await userApi.json();
        const numRepo = userJson.public_repos;
        const repoApi = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=asc&per_page=${numRepo}`);
        const repoJson = await repoApi.json();
        const reduced = repoJson.map(i => {
            return { name: i.name, created: i.created_at }
        });
        console.log(reduced);
    } catch (e) {
        console.log(e);
    }
}

app('edsonayllon')