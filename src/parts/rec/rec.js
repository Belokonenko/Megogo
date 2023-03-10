export default function rec() {
    //-- size slide in css
    const numVewSlides = 6;
    const line = document.querySelector(".line");
    const vew = document.querySelector(".vew");


    //-- create cards
    for (let index = 0; index < 20; index++) {
        creatSlide();
    }

    const cardds = document.querySelectorAll(".card-wrap");
    const numCardds = cardds.length;
     
    //-- set size vewport
    const slide = document.querySelector(".card-wrap");
    let widthSlide = slide.getBoundingClientRect().width;
    vew.style.width = `${widthSlide * numVewSlides}px`;

    //-- btn
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const maxPositionMark = numCardds - numVewSlides;
    let positionMarker = 0;

    next.addEventListener("click", () => {
        if (positionMarker == maxPositionMark) {
            positionMarker = 0;
        } else {
            positionMarker += numVewSlides;

            if (positionMarker > maxPositionMark) {
                positionMarker = maxPositionMark;
            }
        }
        muveLine(positionMarker);
    });

    prev.addEventListener("click", () => {
        if (positionMarker == 0) {
            positionMarker = maxPositionMark;
        } else {
            positionMarker -= numVewSlides;

            if (positionMarker < 0) {
                positionMarker = 0;
            }
        }
        muveLine(positionMarker);
    });
    
    //set position line
    muveLine(Math.round(maxPositionMark / 2));


    //-- functions --

    function creatSlide() {
        const div = document.createElement("div");
        div.classList.add("card-wrap");
        div.innerHTML = `
            <div class="card">
                <img class="card__img" src="../../img/img-cat.jpg" alt="movie card" />
                <div class="card__resolution">
                    <p class="card__resolution-num">1080</p>
                    <p class="card__resolution-pix">p</p>
                </div>
                <div class="card__rating">
                    <p class="card__rating-num">5.5</p> 
                </div>
            </div>
        `
        line.append(div);
    }

    function muveLine(num) {
        line.style.transform = `translateX(-${num * widthSlide}px)`;
    }

    //-- /functions --
}
