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
    selector = document.querySelector('.flip-card-front');
    pokeIMG = `<img src="${img.front_default}" class="flip-card-front">`;
    selector.innerHTML = pokeIMG;
}
    );