function getCards (callback, status, gender){
    const results=fetch("https://rickandmortyapi.com/api/character/?status="+status+"&gender="+gender);

    results
        .then(response => response.json())
        .then(cards => {
            callback(cards)
    });
}

function putCards(cards) {
    cards.results.forEach(personaje => {

        const article= document.createRange().createContextualFragment(`

        <article class="card">
            <div>
                <img class="imgCard" src="${personaje.image}" alt="personaje">
            </div>
            <h3>${personaje.name}</h3>
            <p>${personaje.status}</p>
        </article>

        `);

    const cajaCards = document.querySelector(".cajaCards");

    cajaCards.append(article);

    });
}




 

getCards(putCards, "","");

function getCardsAll(callback) {
    document.querySelector(".cajaCards").innerHTML = '';
    getCards(putCards, "","");
}

function getCardsFemale(callback) {
    document.querySelector(".cajaCards").innerHTML = '';
    getCards(putCards, "","Female");
}

function getCardsMale(callback) {
    document.querySelector(".cajaCards").innerHTML = '';
    getCards(putCards, "","Male");
}

function getCardsAlive(callback) {
    document.querySelector(".cajaCards").innerHTML = '';
    getCards(putCards, "Alive","");
}

function getCardsDead(callback) {
    document.querySelector(".cajaCards").innerHTML = '';
    getCards(putCards, "Dead","");
}