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

let activeElement = 0;
const imgWrapper = document.getElementsByClassName('img-wrapper');
const imgDescriptionWrapper = document.getElementsByClassName('img-description');
const thumbnailWrapper = document.getElementsByClassName('thumbnail-wrapper');

addClasses (imgWrapper, thumbnailWrapper, imgDescriptionWrapper, activeElement)


const previousButton = document.querySelector('.my-previous');
const nextButton = document.querySelector('.my-next');

// setInterval(timeLapse, 2000, activeElement);


nextButton.addEventListener('click', function(){
    removeClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);

    if(activeElement == (5 -1)){
        activeElement = 0;
    } else {
        activeElement++;
    }
    
    addClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);
});

previousButton.addEventListener('click', function(){
    removeClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);

    if(activeElement == 0){
        activeElement = (5 -1);
    } else {
        activeElement--;
    }
    
    addClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);
});


/**
 * 
 * FUNCTIONS
 */

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

function removeClasses (imageWrapper, imgDescriptionWrapper, thumbnailWrapper, active){

    imageWrapper[active].classList.remove('d-block');
    imgDescriptionWrapper[active].classList.remove('d-block');
    thumbnailWrapper[active].classList.remove('thumbnail-active');
}


function addClasses (imageWrapper, imgDescriptionWrapper, thumbnailWrapper, active){
    imageWrapper[active].classList.add('d-block');
    imgDescriptionWrapper[active].classList.add('d-block');
    thumbnailWrapper[active].classList.add('thumbnail-active');

}

// function timeLapse (active){

//     removeClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);

//     for(let i = 0; i < 5; i++){
//         if(active == (5 -1)){
//             active = 0;
//         } else {
//             active++;
//         }
//     }
//     addClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);
// }
