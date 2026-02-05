
const display = document.querySelector("#display");

async function fetchData() {
  console.log("This is fetchData function");
  const apiUrl = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
console.log(apiUrl);
const response =await apiUrl.json();
   return response;
}

async function displayData() {
  const response = await fetchData();
  console.log(response);

  const h2 = document.createElement("h2")
  h2.textContent = response.name;
  console.log(h2)
  display.appendChild(h2)

  const sprite = document.createElement("img")
  sprite.src = response.sprites.front_shiny;
  console.log(sprite)
  display.appendChild(sprite)

  const baseXp = document.createElement("h3")
  baseXp.textContent = response.base_experience
  console.log(baseXp)
  display.appendChild(baseXp)

  const pokeId = document.createElement("li")
  pokeId.textContent = response.id
  console.log(pokeId)
  display.appendChild(pokeId)
}

displayData();
