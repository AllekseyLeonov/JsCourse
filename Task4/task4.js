class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  }
  throw new HttpError(response);
}

async function demoGithubUser() {
  while (true) {
    const name = prompt("Login?", "iliakan");
    try {
      const user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (e) {
      if (e instanceof HttpError && e.response.status === 404) {
        alert("We can’t find such user.");
      }
    }
  }
}

demoGithubUser();
