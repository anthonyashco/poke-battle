const opponentSprite = document.getElementById("opponentPKMN");
const trainerSprite = document.getElementById("trainerPKMN");
const textZone = document.getElementById("textZone")

const bulbasaur = catchPokemon("bulbasaur");
const charmander = catchPokemon("charmander");
const squirtle = catchPokemon("squirtle");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function catchPokemon(pokemonName = "Ditto") {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    result = await response.json();
    return result
};

function changeOpponent(pokemon) {
    opponentSprite.src = pokemon.sprites.front_default;
    opponentSprite.alt = pokemon.name;
    textZone.innerText = `BLUE sent out ${pokemon.name.toUpperCase()}!`
};

function changeTrainer(pokemon) {
    trainerSprite.src = pokemon.sprites.back_default;
    trainerSprite.alt = pokemon.name;
    textZone.innerText = textZone.innerText + `\nGo! ${pokemon.name.toUpperCase()}!`;
};

async function bulbasaurButton() {
    changeOpponent(await charmander);
    await sleep(1000);
    changeTrainer(await bulbasaur);
};
async function charmanderButton() {
    changeOpponent(await squirtle);
    await sleep(1000);
    changeTrainer(await charmander);
};
async function squirtleButton() {
    changeOpponent(await bulbasaur);
    await sleep(1000);
    changeTrainer(await squirtle)
};
