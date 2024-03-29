const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types")
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
let pokemonToSearch = "";

const reset = () => {
  pokemonName.innerHTML = "";
  pokemonId.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  types.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  specialAttack.innerHTML = "";
  specialDefense.innerHTML = "";
  speed.innerHTML = "";
};

searchButton.addEventListener("click", async () => {
  pokemonToSearch = searchInput.value.toLowerCase();
  reset();
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonToSearch}`
    );
    const data = await res.json();
    console.log(data);
    pokemonName.innerHTML = `${data.name.toUpperCase()}`;
    pokemonId.innerHTML = `${data.id}`;
    height.innerHTML = `${data.height}`;
    weight.innerHTML = `${data.weight}`;
    hp.innerHTML = `${data.stats[0].base_stat}`;
    attack.innerHTML = `${data.stats[1].base_stat}`;
    defense.innerHTML = `${data.stats[2].base_stat}`;
    specialAttack.innerHTML = `${data.stats[3].base_stat}`;
    specialDefense.innerHTML = `${data.stats[4].base_stat}`;
    speed.innerHTML = `${data.stats[5].base_stat}`;

    const image = document.getElementById("sprite");
    image.src = `${data.sprites.front_default}`

    const newType = document.createElement("p")
    const newContent = document.createTextNode(`${data.types[0].type.name.toUpperCase()}`);
    newType.appendChild(newContent);
    types.appendChild(newType)
    if (data.types.length > 0) {
      const newType2 = document.createElement("p")
      const newContent2 = document.createTextNode(`${data.types[1].type.name.toUpperCase()}`);
      newType2.appendChild(newContent2);
      types.appendChild(newType2)
    }

  } catch {
    alert("Pokémon not found");
  }
});
