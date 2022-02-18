let url = 'https://brave-discovered-sponge.glitch.me/movies';

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i < 899; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
            .then((res) => res.json()))
    }


    Promise.all(promises).then(results => {
        const pokemon = results.map((data) =>

            ({
                name: data.name,
                id: data.id,
                image: data.sprites.other.home.front_shiny,
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')
            }));
        displayPokemon(pokemon);
        $("#submit").click(function (event) {
            event.preventDefault();
            searchPokemons(pokemon)

        })
    });

};


const displayPokemon = (pokemon) => {
    const pokemonHtmlS = pokemon.map(pokeman =>

        `<div class="card-group">
<div class="card" style="width:18px;">
<img src="${pokeman.image}">
        <div class="card-body text-center">
        <h5>${pokeman.name}</h5>
        <p class="card-text">
            Pokedex #${pokeman.id}<br>
            Height: ${pokeman.height}<br>
            Types: ${pokeman.type}<br>
        </p>
        <div class="str_and_weak"></div>
        </div>
        </div> 
</div>`)

    $("#poke").append(pokemonHtmlS)
    console.log(pokemon);

}


fetchPokemon();

function searchPokemons(pokemon) {
    let pokemonName = $("#input").val();
    for (let i = 1; i < pokemon.length; i++) {
        if (pokemon[i].name === pokemonName) {
            $("#poke").empty();
            displayPokemons(pokemon[i]);
            getBattleInfo(pokemon[i].type)
            break;
        }
    }
}


const displayPokemons = (pokeman) => {
    const html =
        `<div class="card-group">
<div class="card" style="width:18px;">
<img src="${pokeman.image}">
        <div class="card-body text-center">
        <h5>${pokeman.name}</h5>
        <p class="card-text">
            Pokedex #${pokeman.id}<br>
            Height: ${pokeman.height}<br>
            Types: ${pokeman.type}<br>
        </p>
        </div>
        </div> 
</div>`

    $("#poke").append(html)

}

