// window.addEventListener('DOMContentload',chistesAleatorios)

// let chisteParte1 = document.getElementById('text-initial');
// let chisteParte2 = document.getElementById('text-answer');
// let boton = document.getElementById('one-more');

// boton.addEventListener('click', chistesAleatorios)

// function chistesAleatorios(){
//     const endpoint='https://api.dadjokes.io/api/random/joke';
//     async function apiAsync()
//     {
//         const responsive= await fetch(endpoint);
//         const data = await Response.json()
//         console.log(data)
//         const listachistes = data.body;
//         constprimer
//     }
// }

window.addEventListener('DOMContentLoaded', chistesAleatorios)

const botton = document.getElementById("oneMore");

if(botton) {
    botton.addEventListener('click', chistesAleatorios)
}

function chistesAleatorios (){ 
    const endpoint="https://api.dadjokes.io/api/random/joke";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chiste").textContent= data.body[0].setup
            document.getElementById("respuesta").textContent= data.body[0].punchline
        }).catch(error => {
            document.getElementById("chiste").textContent= "Upss, Parece que no hay chiste para ti"
        })
}
