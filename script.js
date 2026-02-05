// import displayData from "https://pokeapi.co/api/v2/pokemon/ditto"
const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch("https://pokeapi.co/api/v2/pokemon/ditto")

const display = document.querySelector("#display");

async function fetchData() {
  console.log("This is fetchData function");
  return;
}

async function displayData() {
  const response = await fetchData();
  console.log(response);
}

displayData();
