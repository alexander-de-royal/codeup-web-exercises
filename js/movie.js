// LOADING ANIMATION
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); // 30ms

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    // text fades out as it loads from 0 to 100 (opacity goes from '1' to '0')
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // blur starts at 30px and ends at 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// API FETCH
fetch("https://third-repeated-saffron.glitch.me/books")
    .then(response => response.json())
    .then(data => console.log(data));

const newMovie = {title: "Do Andriods Dream of Electric Sheep?", author: "Philip K. Dick"}
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie)
}
// fetch("https://third-repeated-saffron.glitch.me/books", options).then(() =>
//     fetch("https://third-repeated-saffron.glitch.me/books"))
//         .then(response => response.json())
//         .then(data => console.log(data));

fetch("https://glitch.com/edit/#!/tulip-enchanted-tellurium?path=README.md%3A1%3A0", {
    method: "PATCH",
    headers: {
        'Content-Type': 'Application'
    },
    body: JSON.stringify({title})
})