/*===============================================
This Function's pupose returns the weaknesses and strenghts of the current pokemon;
You should pass the pokemon's search result and append it to the html.

when the user searches a pokemon, the we are passing that search value into the currentPokemon parameter
then showing that information to the user by getting it from the JSON.
* ==============================================
* */
/*let currentPokemonTypes = 'grass, flying';*/
let pokeWeakAndStr = '';

function getBattleInfo(currentPokemonTypes) {
/*    console.log(currentPokemonTypes);*/
    let typeOne = currentPokemonTypes.split(', ');
    fetch('./package.json')
        .then(response => response.json())
        .then(pokemonTypes => {

            for (let i = 0; i < pokemonTypes.pokemonTypes.length; i++) {
                if (pokemonTypes.pokemonTypes[i].type.toLowerCase().includes(typeOne[0]))
                // if (typeOne.length === 2)
                {
                    let strong = pokemonTypes.pokemonTypes[i].strong.toString();
                    let weak = pokemonTypes.pokemonTypes[i].weak.toString();
                    let resist = pokemonTypes.pokemonTypes[i].Resistant.toString();
                    let vulnerable = pokemonTypes.pokemonTypes[i].Vulnerable.toString();
                    let noEffectA = pokemonTypes.pokemonTypes[i].NoEffectA.toString();
                    let noEffectB = pokemonTypes.pokemonTypes[i].NoEffectB.toString();
                    //console.log(`strong: ${strong} weak: ${weak} resist: ${resist} vul: ${vulnerable}`);
                    pokeWeakAndStr =
                        `<ul class="list-group list-group-flush mt-5">
                            <li class="list-group-item">Super Effective Against (X2 Damage): ${strong}</li>
                            <li class="list-group-item">Not Very Effective Against (X1/2 Damage): ${weak}</li>
                            <li class="list-group-item">No Effect Against(X0 Damage): ${noEffectA}</li>
                            <li class="list-group-item">Not Effected By(X0 Damage): ${noEffectB}</li>
                            <li class="list-group-item">Resistant To (X1/2 Effected By): ${resist}</li>
                            <li class="list-group-item">RUN. (X2 EffectedBy): ${vulnerable}</li>
                        </ul>`
                    //  <ul class="list-group list-group-flush">
                    //     <li class="list-group-item">An item</li>
                    //     <li class="list-group-item">A second item</li>
                    //     <li class="list-group-item">A third item</li>
                    //   </ul>
                    //console.log(pokeWeakAndStr)
                    $('#Weak_Strength').append(pokeWeakAndStr);
                    $('#data_container').addClass(colorTypes(typeOne[0]))
                    break;
                }
                // else{
                //     let strong = pokemonTypes.pokemonTypes[i].strong.toString();
                //     let weak = pokemonTypes.pokemonTypes[i].weak.toString();
                //     let resist = pokemonTypes.pokemonTypes[i].Resistant.toString();
                //     let vulnerable = pokemonTypes.pokemonTypes[i].Vulnerable.toString();
                //     let noEffectA = pokemonTypes.pokemonTypes[i].NoEffectA.toString();
                //     let noEffectB = pokemonTypes.pokemonTypes[i].NoEffectB.toString();
                //     //console.log(`strong: ${strong} weak: ${weak} resist: ${resist} vul: ${vulnerable}`);
                //     pokeWeakAndStr =
                //         `<ul class="list-group list-group-flush mt-5">
                //             <li class="list-group-item">Super Effective Against (X2 Damage): ${strong}</li>
                //             <li class="list-group-item">Not Very Effective Against (X1/2 Damage): ${weak}</li>
                //             <li class="list-group-item">No Effect Against(X0 Damage): ${noEffectA}</li>
                //             <li class="list-group-item">Not Effected By(X0 Damage): ${noEffectB}</li>
                //             <li class="list-group-item">Resistant To (X1/2 Effected By): ${resist}</li>
                //             <li class="list-group-item">RUN. (X2 EffectedBy): ${vulnerable}</li>
                //         </ul>`
                //     //  <ul class="list-group list-group-flush">
                //     //     <li class="list-group-item">An item</li>
                //     //     <li class="list-group-item">A second item</li>
                //     //     <li class="list-group-item">A third item</li>
                //     //   </ul>
                //     //console.log(pokeWeakAndStr)
                //     $('#Weak_Strength').append(pokeWeakAndStr);
                //     $('#data_container').addClass(colorTypes(typeOne[0]))
                //     break;
                //
                // }
            }
        })
}

//testing
/*getBattleInfo(currentPokemonTypes)*/


