import { dataContent } from "../bd/bd.js";

export default function rec() {
    //-- size slide in css
    const numVewSlides = 6;
    const line = document.querySelector(".line");
    const vew = document.querySelector(".vew");

    if (vew) {

        //-- create cards

        creatSlide(dataContent.slice(0, 20));

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

        function creatSlide(arr) {
            line.innerHTML = "";

            arr.forEach((element) => {
                line.innerHTML += `
            <div class="card-wrap">
                <div class="card">
                    <img class="card__img" src=${element.img} alt="movie img" />
                    <div class="card__resolution">
                        <p class="card__resolution-num">${element.resolution}</p>
                        <p class="card__resolution-pix">p</p>
                    </div>
                    <div class="card__rating">
                        <p class="card__rating-num">${element.rating}</p> 
                    </div>
                </div>
            </div>
        `;
            });
        }

        function muveLine(num) {
            line.style.transform = `translateX(-${num * widthSlide}px)`;
        }

        //-- /functions --
    }
}
