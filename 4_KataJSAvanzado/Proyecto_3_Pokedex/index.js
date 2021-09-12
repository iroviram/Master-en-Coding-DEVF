const URIpokemon = 'https://pokeapi.co/api/v2/pokemon/';
const URIpokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
const URItypes = 'https://pokeapi.co/api/v2/type/';

var pokemonCountMax = 3;

const pokemonTypeColors = {
    grass: '#9BCC50',
    poison: '#B97FC9',
    fire: '#B97FC9',
    flying: '#3DC7EF',
    bug: '#729F3F',
    water: '#4592C4',
    normal: '#A4ACAF',
    electric: '#EED535',
    ground: '#EED535',
    fairy: '#FDB9E9',
    fighting: '#D56723',
    psychic: '#F366B9',
    rock: '#A38C21',
    steel: '#9EB7B8',
    ice: '#51C4E7',
    ghost: '#7B62A3',
    dragon: '#F16E57',
    dark:'#707070'
};

function liPokemonCreator() {

    for (let i = 1; i <= pokemonCountMax; i++) {
        let ul = document.getElementById("listaPokemon");
        let li = document.createElement("li");
        ul.appendChild(li);
        let node = ul.getElementsByTagName("li")[i-1];
        node.setAttribute("class", "pokemon-box");
        node.setAttribute("id", `pokemon-${i}`);
    };
    pokemonNumberSearch();
    buttonPokemonCreator();
}

function buttonPokemonCreator(){
    for (let i = 1; i <= pokemonCountMax; i++) {
        let li = document.getElementById(`pokemon-${i}`);
        let button = document.createElement("button");
        li.appendChild(button);
        let node = li.getElementsByTagName("button")[0];
        node.setAttribute("class", "pokemon-button");
        node.setAttribute("data-bs-toggle", "modal");
        node.setAttribute("data-bs-target", "#exampleModal");
        node.setAttribute("id", `pokemonButton-${i}`);
    }
}

function spanModalTypeCreator(types){
    for (let i = 0; i < types.length; i++) {
        let div = document.getElementById("pokemonType");
        let span = document.createElement("span");
        div.appendChild(span);
        let node = div.getElementsByTagName("span")[i];
        node.setAttribute("class", `pokemon-type-${i}`);
        node.setAttribute("id", `pokemonType-${i}`);
        let typeName = types[i]['type']['name'];
        document.getElementById(`pokemonType-${i}`).innerHTML = `${typeName}`;
        document.getElementById(`pokemonType-${i}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
    }
    let typeName = types[0]['type']['name'];
    document.getElementById("title-bars").style.backgroundColor = `${pokemonTypeColors[typeName]}`;
}

function weaknessTypeDivCreator(types){
    console.log(types)
    for (let i = 0; i < types.length; i++) {
        let div = document.getElementById("typeDamage");
        let div1 = document.createElement("div");
        div.appendChild(div1);
        let node = div.getElementsByTagName("div")[i];
        node.setAttribute("class", `type-damag-section`);
        let typeName = types[i]['type']['name'];
        node.setAttribute("id", `typeDamage-${typeName}`);
        //weaknessTypeSpanCreator(types,i);
    }
}

function weaknessTypeSpanCreator(types,i){
        let div = document.getElementById(`typeDamage${i}`);
        let div1 = document.createElement("div");
        div.appendChild(div1);
        let node = div.getElementsByTagName("div")[i];
        node.setAttribute("class", `type-damag-bar${i}`);
        node.setAttribute("id", `typeDamageBar${i}`);

        let typeName = types[i]['type']['name'];
        document.getElementById(`typeDamageBar${i}`).innerHTML = `${typeName}`;
        document.getElementById(`typeDamageBar${i}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
}

function deleteSpanModal() {
    const myNode = document.getElementById("pokemonType");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
};

function pokemonStats(data) {
    let typeName = data['types'][0]['type']['name'];
    //HP
    let highestBaseHp = 255; //Blissey
    let currentPokemonBaseHP = data['stats'][0]['base_stat'];
    let hpStatName = data['stats'][0]['stat']['name'];
    document.getElementById(`${hpStatName}Number`).innerHTML = `${currentPokemonBaseHP}`;
    let hpPercentage = (currentPokemonBaseHP/highestBaseHp)*100;
    document.getElementById(`${hpStatName}Bar`).style.width = `${hpPercentage}%`;
    document.getElementById(`${hpStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Attack
    let highestBaseAttack = 181; //Kartana
    let currentPokemonBaseAttack = data['stats'][1]['base_stat'];
    let attackStatName = data['stats'][1]['stat']['name'];
    document.getElementById(`${attackStatName}Number`).innerHTML = `${currentPokemonBaseAttack}`;
    let attackPercentage = (currentPokemonBaseAttack/highestBaseAttack)*100;
    document.getElementById(`${attackStatName}Bar`).style.width = `${attackPercentage}%`;
    document.getElementById(`${attackStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Defense
    let highestBaseDefense = 230; //Shuckle
    let currentPokemonBaseDefense = data['stats'][2]['base_stat'];
    let defenseStatName = data['stats'][2]['stat']['name'];
    document.getElementById(`${defenseStatName}Number`).innerHTML = `${currentPokemonBaseDefense}`;
    let defensePercentage = (currentPokemonBaseDefense/highestBaseDefense)*100;
    document.getElementById(`${defenseStatName}Bar`).style.width = `${defensePercentage}%`;
    document.getElementById(`${defenseStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //SpecialAttack
    let highestBaseSpecialAttack = 173; //Xurkitree
    let currentPokemonBaseSpecialAttack = data['stats'][3]['base_stat'];
    let specialAttackStatName = data['stats'][3]['stat']['name'];
    document.getElementById(`${specialAttackStatName}Number`).innerHTML = `${currentPokemonBaseSpecialAttack}`;
    let specialAttackPercentage = (currentPokemonBaseSpecialAttack/highestBaseSpecialAttack)*100;
    document.getElementById(`${specialAttackStatName}Bar`).style.width = `${specialAttackPercentage}%`;
    document.getElementById(`${specialAttackStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //SpecialDefense
    let highestBaseSpecialDefense = 230; //Shuckle
    let currentPokemonBaseSpecialDefense = data['stats'][4]['base_stat'];
    let specialDefenseStatName = data['stats'][4]['stat']['name'];
    document.getElementById(`${specialDefenseStatName}Number`).innerHTML = `${currentPokemonBaseSpecialDefense}`;
    let specialDefensePercentage = (currentPokemonBaseSpecialDefense/highestBaseSpecialDefense)*100;
    document.getElementById(`${specialDefenseStatName}Bar`).style.width = `${specialDefensePercentage}%`;
    document.getElementById(`${specialDefenseStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Speed
    let highestBaseSpeed = 200; //Regieleki
    let currentPokemonBaseSpeed = data['stats'][5]['base_stat'];
    let speedStatName = data['stats'][5]['stat']['name'];
    document.getElementById(`${speedStatName}Number`).innerHTML = `${currentPokemonBaseSpeed}`;
    let speedPercentage = (currentPokemonBaseSpeed/highestBaseSpeed)*100;
    document.getElementById(`${speedStatName}Bar`).style.width = `${speedPercentage}%`;
    document.getElementById(`${speedStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
    
};

function pokemonProfile1(data) {

    // Height & Weight

    let heightNumber = (data['height']/10);
    let weightNumber = (data['weight']/10);

    document.getElementById("height-number").innerHTML = `${heightNumber} m`;
    document.getElementById("weight-number").innerHTML = `${weightNumber} kg`;

    // Abilities

    let abilities = data['abilities'];
    const abilitiesNameArray = [];
    for (let i = 0; i < abilities.length; i++) {
        let abilitiesName = abilities[i]['ability']['name'];
        abilitiesNameArray.push(abilitiesName)
    }
    let abilitiesFull = abilitiesNameArray.join(", ");
    document.getElementById("abilities-number").innerHTML = `${abilitiesFull}`;

    // EVs

    let stats = data['stats'];
    for (let i = 0; i < stats.length; i++) {
        let effort = stats[i]['effort'];
        if(effort > 0){
            let statName = stats[i]['stat']['name'] 
            document.getElementById("evs-number").innerHTML = `${effort} ${statName}`;
        }
    }
};

function pokemonProfile2(data) {
    // Capture Rate
    let maxCaptureRate = 255;
    let captureRateNumber = Math.floor((data['capture_rate']/maxCaptureRate)*100);
    document.getElementById("captureRate-number").innerHTML = `${captureRateNumber}%`;

    // Egg Groups
    let eggGroups = data['egg_groups'];
    const eggGroupsNameArray = [];
    for (let i = 0; i < eggGroups.length; i++) {
        eggGroupsName = eggGroups[i]['name'];
        eggGroupsNameArray.push(eggGroupsName)
    }
    let eggGroupsFull = eggGroupsNameArray.join(", ");
    document.getElementById("eggGroups-number").innerHTML = `${eggGroupsFull}`;

    // Hatch Steps
    let hatchSteps = 255*(data['hatch_counter']+1); //"one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches
    document.getElementById("hatchSteps-number").innerHTML = `${hatchSteps}`;
};

window.onload = liPokemonCreator;

//Modal Button Click
window.onclick = e => {
    let clickTarget = e.target.id;
    let clickTargetString = clickTarget.replace(/[^a-zA-Z]/g, '');
    if(clickTargetString == "pokemonButton"){
        let pokemonIdNumber = clickTarget.replace( /^\D+/g, '');
        fetch(URIpokemon+pokemonIdNumber)
        .then(response => response.json())
        .then(function(data){
            document.getElementById("exampleModalLabelTitle").innerHTML = `${data.species.name}`;
            pokemonImageModal(data);
            spanModalTypeCreator(data.types);
            weaknessTypeDivCreator(data.types)
            document.getElementById("pokemonNumber").innerHTML = `#${data.id}`;
            pokemonStats(data);
            pokemonProfile1(data);
        })
    } else if(clickTargetString=="modalxbutton"){
        deleteSpanModal();
    }

    if(clickTargetString == "pokemonButton"){
        let pokemonIdNumber = clickTarget.replace( /^\D+/g, '');
        fetch(URIpokemonSpecies+pokemonIdNumber)
        .then(response => response.json())
        .then(function(data){
            pokemonProfile2(data);
        })
    } else if(clickTargetString=="modalxbutton"){
        deleteSpanModal();
    }
};

function pokemonImage(pokemon,id){
    let pokemonOrderNum = pokemon.id;
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpriteFront})`;

    let li = document.getElementById(`pokemon-${id}`);
    let span = document.createElement("span");
    li.appendChild(span);
    let node = li.getElementsByTagName("span")[0];
    node.setAttribute("class", "pokemon-name");
    node.setAttribute("id", `pokemonName-${id}`);
    document.getElementById(`pokemonName-${id}`).innerHTML = `${pokemon['species']['name']}`;
    let typeName = pokemon['types'][0]['type']['name'];
    document.getElementById(`pokemonName-${id}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`;
}

function pokemonImageModal(data) {
    let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
    document.getElementById("pokemonModalDetailsImage").style.backgroundImage = `url(${pokemonSpriteFront})`;
}

function consultarPokemon(id) {
    fetch(URIpokemon+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon,id));
}

function pokemonNumberSearch(){
    for (let i = 1; i <= pokemonCountMax; i++) {
        consultarPokemon(i)
    }
}

/* function searchHidePokemon() {

    const pokemonSearched = document.getElementById("searchBar").value.toLowerCase();
    if (pokemonSearched === '') {
        for (let i = 1; i <= pokemonCountMax; i++) {
            document.getElementById(`pokemon-${i}`).style.display = "";      
        }  
    } else {
        for (let i = 0; i < pokemonCountMax; i++) {
        let j = pokemonSearched.length;
        let pokemonName = document.getElementById(`pokemonName-${i+1}`).innerHTML;
        let letterPokemonName = pokemonName.charAt(j-1);
        let letterPokemonSearched = pokemonSearched.charAt(j-1);
        console.log("letterPokemon Name: ",letterPokemonName)
        console.log("letter Pokemon SSearched: ",letterPokemonSearched)
        console.log("count: ", i)
        
            if (letterPokemonSearched !== letterPokemonName) {
                document.getElementById(`pokemon-${i+1}`).style.display = "none";
            }
        }
    }  
}; */

function searchHidePokemon() {

    const pokemonSearched = document.getElementById("searchBar").value.toLowerCase();
    if (pokemonSearched === '') {
        for (let i = 1; i <= pokemonCountMax; i++) {
            document.getElementById(`pokemon-${i}`).style.display = "";      
        }  
    } else {
        for (let i = 0; i < pokemonCountMax; i++) {
        let j = pokemonSearched.length;
        let pokemonName = document.getElementById(`pokemonName-${i+1}`).innerHTML;
        let letterPokemonName = pokemonName.charAt(j-1);
        let letterPokemonSearched = pokemonSearched.charAt(j-1);
        
            if (letterPokemonSearched !== letterPokemonName) {
                document.getElementById(`pokemon-${i+1}`).style.display = "none";
            }
        }
    }
};
