// <imh src="..." class="car-img-top" alt="...">

// Arceus
var _condition = "pokemon"
var _pocketmonster = "arceus"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    // console.log(img)
    selector = document.querySelector('#arceus');
    pokeIMG = `<img src="${img.front_default}" id="arceus">`;
    selector.innerHTML = pokeIMG;
}
    );

    // pikachu
var _condition = "pokemon"
var _pocketmonster = "pikachu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    // console.log(img)
    selector = document.querySelector('#pikachu');
    pokeIMG = `<img src="${img.front_default}" id="pikachu">`;
    selector.innerHTML = pokeIMG;
}
    );

     // mew
var _condition = "pokemon"
var _pocketmonster = "mew"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    // console.log(img)
    selector = document.querySelector('#mew');
    pokeIMG = `<img src="${img.front_default}" id="mew">`;
    selector.innerHTML = pokeIMG;
}
    );