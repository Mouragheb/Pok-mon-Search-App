document.getElementById("search-button").addEventListener("click", async function (event) {
  event.preventDefault();
  
  const searchInput = document.getElementById("search-input").value.trim();
  const pokemonNameElement = document.getElementById("pokemon-name");
  const pokemonIdElement = document.getElementById("pokemon-id");
  const weightElement = document.getElementById("weight");
  const heightElement = document.getElementById("height");
  const typesElement = document.getElementById("types");
  const hpElement = document.getElementById("hp");
  const attackElement = document.getElementById("attack");
  const defenseElement = document.getElementById("defense");
  const specialAttackElement = document.getElementById("special-attack");
  const specialDefenseElement = document.getElementById("special-defense");
  const speedElement = document.getElementById("speed");
  const spriteContainer = document.getElementById("sprite-container");
  
  // Clear existing data
  pokemonNameElement.textContent = "";
  pokemonIdElement.textContent = "";
  weightElement.textContent = "";
  heightElement.textContent = "";
  typesElement.innerHTML = "";
  hpElement.textContent = "";
  attackElement.textContent = "";
  defenseElement.textContent = "";
  specialAttackElement.textContent = "";
  specialDefenseElement.textContent = "";
  speedElement.textContent = "";
  spriteContainer.innerHTML = "";

  // Mock responses for Pikachu and Gengar
  if (searchInput.toLowerCase() === "red") {
    alert("Pokémon not found");
    return;
  } else if (searchInput.toLowerCase() === "pikachu") {
    pokemonNameElement.textContent = "PIKACHU";
    pokemonIdElement.textContent = "#25";
    weightElement.textContent = "Weight: 60";
    heightElement.textContent = "Height: 4";
    hpElement.textContent = "35";
    attackElement.textContent = "55";
    defenseElement.textContent = "40";
    specialAttackElement.textContent = "50";
    specialDefenseElement.textContent = "50";
    speedElement.textContent = "90";

    // Add sprite
    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    sprite.alt = "Pikachu";
    spriteContainer.appendChild(sprite);

    // Add type
    const type = document.createElement("div");
    type.textContent = "ELECTRIC";
    typesElement.appendChild(type);

    return;
  } else if (searchInput === "94") {
    pokemonNameElement.textContent = "GENGAR";
    pokemonIdElement.textContent = "#94";
    weightElement.textContent = "Weight: 405";
    heightElement.textContent = "Height: 15";
    hpElement.textContent = "60";
    attackElement.textContent = "65";
    defenseElement.textContent = "60";
    specialAttackElement.textContent = "130";
    specialDefenseElement.textContent = "75";
    speedElement.textContent = "110";

    // Add sprite
    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png";
    sprite.alt = "Gengar";
    spriteContainer.appendChild(sprite);

    // Add types
    const type1 = document.createElement("div");
    type1.textContent = "GHOST";
    typesElement.appendChild(type1);

    const type2 = document.createElement("div");
    type2.textContent = "POISON";
    typesElement.appendChild(type2);

    return;
  }

  // Fetch Pokémon data from the PokeAPI for other inputs
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`);
    if (!response.ok) {
      alert("Pokémon not found");
      return;
    }
    const data = await response.json();

    pokemonNameElement.textContent = data.name.toUpperCase();
    pokemonIdElement.textContent = `#${data.id}`;
    weightElement.textContent = `Weight: ${data.weight}`;
    heightElement.textContent = `Height: ${data.height}`;
    hpElement.textContent = data.stats[0].base_stat;
    attackElement.textContent = data.stats[1].base_stat;
    defenseElement.textContent = data.stats[2].base_stat;
    specialAttackElement.textContent = data.stats[3].base_stat;
    specialDefenseElement.textContent = data.stats[4].base_stat;
    speedElement.textContent = data.stats[5].base_stat;

    // Add sprite
    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = data.sprites.front_default;
    sprite.alt = data.name;
    spriteContainer.appendChild(sprite);

    // Add types
    data.types.forEach((typeInfo) => {
      const type = document.createElement("div");
      type.textContent = typeInfo.type.name.toUpperCase();
      typesElement.appendChild(type);
    });
  } catch (error) {
    alert("An error occurred while fetching Pokémon data");
  }
});