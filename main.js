
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
        // setTimeout(pokeColor, 3000);



        $("#submit").click(function (event) {
            event.preventDefault();
            searchPokemons(pokemon);


        })
    });

};


// let typeArr = pokemon.type;
// console.log(typeArr)
// setTimeout(color, 5000);
// function color(){
//     $("#color").addClass(colorTypes(typeArr))
// const pokeColor =(pokemon)=> {
//     pokemon.map(poke => {
//         let typeArr = poke.type.split(", ");
//         console.log(typeArr)
//         $("#color").addClass(colorTypes(typeArr[0]))
//     })
//     // for(let i = 1; i < 78; i++){
//
//
// }


const displayPokemon = (pokemon) => {
    const pokemonHtmlS = pokemon.map(pokeman =>
    //     const pokemonHtmlS = (pokeman) =>{
    //         for (let i = 1; i < pokeman.length ; i++) {
    //             let typeArr = pokeman.type.split(", ");
                `<div class="card-group p-1">
<div id="color" class="bg-dark card px-3" style="width:18px; color:whitesmoke;">
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
</div>`
    )



    $("#poke").append(pokemonHtmlS);
    console.log(pokemon);
}




fetchPokemon();

function searchPokemons(pokemon) {
    let pokemonName = $("#input").val();
    for (let i = 1; i < pokemon.length; i++) {
        if (pokemon[i].name === pokemonName) {
            $("#poke").empty();
            displayPokemons(pokemon[i]);
            $('#Weak_Strength').empty();
            getBattleInfo(pokemon[i].type)
            break;
        }
    }
}


const displayPokemons = (pokeman) => {
    let typeArr = pokeman.type.split(", ");

    const html =
        `<div class="card-group">
<div class="card ${colorTypes(typeArr[0])}" style="width:18px;">
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
    console.log(typeArr)

}

