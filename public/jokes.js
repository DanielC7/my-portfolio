const jokes = document.querySelector("#jokes");
const button = document.querySelector("#new-joke-btn");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  //   const newLI = document.createElement("LI");
  jokes.innerHTML = jokeText;
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
