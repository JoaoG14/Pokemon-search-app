const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const pokemonName = document.getElementById("pokemon-name")
const pokemonId = document.getElementById("pokemon-id")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const types = document.getElementById("types")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack")
const specialDefense = document.getElementById("special-defense")
const speed = document.getElementById("speed")
let pokemonToSearch = ""

searchButton.addEventListener("click", async () => {
  pokemonToSearch = searchInput.value;
  try {
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonToSearch}`)
      const data = await res.json();
      console.log(data)
      pokemonName.innerHTML +=
      height.innerHTML += `${data.height}`
  } catch {
    console.log(err);
  }
    
  
})