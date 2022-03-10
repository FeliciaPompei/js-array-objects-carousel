/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */


const carouselInfo = [
    {
        image : 'img/01.jpg',
        title : 'Svezia',
        subtitle : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image : 'img/02.jpg',
        title : 'Svizzera',
        subtitle : 'Lorem ipsum',
    },
    {
        image : 'img/03.jpg',
        title : 'Gran Bretagna',
        subtitle : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image : 'img/04.jpg',
        title : 'Germania',
        subtitle : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image : 'img/05.jpg',
        title : 'Paradise',
        subtitle : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
    },
    
]


imageElement(carouselInfo.length);


function imageElement(max){
    for (let i = 0; i < max; i++){

        document.querySelector('.my-carousel-images').innerHTML += 
        `
        <div class= "img-wrapper">
            <img src="${carouselInfo[i].image}" alt="${carouselInfo[i].title}">
            <div class="img-description text-end">
                <h2>${carouselInfo[i].title} </h2>
                <p>${carouselInfo[i].subtitle}</p>
            </div>
        </div>
        `

        document.querySelector('.my-thumbnails').innerHTML +=
        `
        <div class= "thumbnail-wrapper">
            <img src="${carouselInfo[i].image}" alt="${carouselInfo[i].title}">
        </div>
        `;
    }
}


