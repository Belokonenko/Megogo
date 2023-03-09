export default function hit() {
    const hitViewport = document.querySelector(".hit__vew-port");
    const hitSliderLine = document.querySelector(".hit__line");
    const hitSliderItems = document.querySelectorAll(".hit__item");

    const hitBtnPrev = document.querySelector(".hit__btn-prev");
    const hitBtnNext = document.querySelector(".hit__btn-next");

    let hitWidthVewPort;
    let hitAmountItems;
    let hitCurrentSlide = 0;

    let hitAmoutItemVeu = 6;


    hitBtnNext.addEventListener("click", () => {
        hitCurrentSlide++;
        if (hitCurrentSlide >= hitAmountItems) {
            hitCurrentSlide = 0;
        }
        hitSliderLine.style.right = `${hitWidthVewPort * hitCurrentSlide}px`;
    });

    hitBtnPrev.addEventListener("click", () => {
        hitCurrentSlide--;
        if (hitCurrentSlide < 0) {
            hitCurrentSlide = hitAmountItems - 1;
        }
        hitSliderLine.style.right = `${hitWidthVewPort * hitCurrentSlide}px`;
    });

    window.addEventListener("resize", setHitParam);
    
    setHitParam();


    // -- data --

    // --tmp data for test add card in slide line
    const hitArrCards = [
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "./img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 480,
            rating: 4.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
        {
            imgPath: "../../img/img-cat.jpg",
            resolution: 1080,
            rating: 5.5,
        },
    ];

    // -- /data --

    //-- functions --


    function creatHitCards(arrCards, line) {
        arrCards.forEach((item) => {
            const hitCard = document.createElement("div");
            hitCard.classList.add("card");
            hitCard.classList.add("hit__item");

            hitCard.innerHTML = `
            <img class="card__img" src=${item.imgPath} alt="movie card" />
            <div class="card__resolution">
                <p class="card__resolution-num">${item.resolution}</p>
                <p class="card__resolution-pix">p</p>
            </div>
            <div class="card__rating">
                <p class="card__rating-num">${item.rating}</p> 
            </div>
        `;
            line.append(hitCard);
        });
    setHitParam();
    }

    // function getAmountElements() {
    //     return hitSliderItems.length;
    // }

    // function setVewPortLangth() {
    //    hitSliderLine = hitViewport / hitAmoutItemVeu * hitAmountItems; 
    // }
    
    
    function setHitParam() {


        
        hitWidthVewPort = hitViewport.getBoundingClientRect().width;
        hitAmountItems = hitSliderItems.length;

        let arrItems = Array.from(hitSliderItems);

        arrItems.forEach((item) => {
            item.style.width = `${hitWidthVewPort / hitAmoutItemVeu}px`;
        });

        hitSliderLine.style.right = `${hitWidthVewPort * hitCurrentSlide}px`;

        // console.log(` width item ${ arrItems[0].getBoundingClientRect().width }`);
        
        // console.log(` width line ${ hitSliderLine.getBoundingClientRect().width }`);

        // console.log(` width vewport ${ hitViewport.getBoundingClientRect().width }`);
        hitSliderLine.style.width =  `${(hitViewport.getBoundingClientRect().width / hitAmoutItemVeu) * hitAmountItems}px`;
    }

    //-- /functions --
}
