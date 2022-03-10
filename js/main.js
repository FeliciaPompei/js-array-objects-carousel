/**
 *
 *
 *

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */


const carouselInfo = [
    {
        image : 'http://cdn.shopify.com/s/files/1/0560/8744/5712/products/EnTL8E7XUAEFyp7_1200x1200.jpg?v=1633707699',
        title : 'Chicken were T-rexs',
        subtitle : 'Chickens are the closest living relative to the T. rex, though perhaps not quite as scary!',
    },
    {
        image : 'https://odditymall.com/includes/content/you-can-now-get-arms-for-your-chickens-thumb.jpg',
        title : 'Chicken play',
        subtitle : 'Chickens love to play and will run, jump and sunbathe when given the chance\, yet billions of them spend their entire lives in cramped sheds with less floor space than an A4 piece of paper',
    },
    {
        image : 'https://i.ebayimg.com/images/g/BkIAAOSw8zZg4~NW/s-l400.jpg',
        title : 'Chicken can dream',
        subtitle : 'Chickens dream just like we do. They experience REM (rapid eye movement) during sleep, indicating that their minds may be wandering far from the four walls of the factory farms where they are imprisoned\.',
    },
    {
        image : 'https://i.etsystatic.com/26833745/r/il/c8bde9/3204005065/il_fullxfull.3204005065_7ssy.jpg',
        title : 'Spaghetti grass',
        subtitle : 'They slurp grass like spaghetti. Yes, you read that right!',
    },
    {
        image : 'https://ae01.alicdn.com/kf/H5963fcbd32d14ca6a7adf7e6ad499cd7w/Chicken-Arm-Toy-Gag-Gift-Chicken-Arms-Props-Chicken-Forelimb-Decoration-Spoof-For-Pet-Themed-Party.jpg_Q90.jpg_.webp',
        title : 'Chicken films',
        subtitle : 'One of the best films made about chicken is \"Chicken Run \", it\'s about a hen called Ginger who has to save her friends and herself from the farm called tweedy\'s farm',
    },
    
]


imageElement(carouselInfo.length);


// Variabili
let activeElement = 0;
const imgWrapper = document.getElementsByClassName('img-wrapper');
const imgDescriptionWrapper = document.getElementsByClassName('img-description');
const thumbnailWrapper = document.getElementsByClassName('thumbnail-wrapper');
const previousButton = document.querySelector('.my-previous');
const nextButton = document.querySelector('.my-next');


addClasses (imgWrapper, thumbnailWrapper, imgDescriptionWrapper, activeElement)


// EventListener
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

// setTimeout(timeLapse, 2000, activeElement);

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

//         removeClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);
//         if(active == (5 -1)){
//             active = 0;
//         } else {
//             active++;
//         }
//         addClasses (imgWrapper, imgDescriptionWrapper, thumbnailWrapper, activeElement);

// }
