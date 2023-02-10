

const btn = document.querySelector("#v2");
btn.onclick = function () {
    console.log("you clicked me");
}

function scream() {
    console.log('ahhhhhhh');
    console.log('dont touch');
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked h1');
}