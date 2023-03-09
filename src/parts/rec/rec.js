export default function rec() {
    //-- size slide in css
    const numVewSlides = 6;
    const line = document.querySelector(".line");
    const vew = document.querySelector(".vew");

    let positionMarker = 0;

    //-- create cards
    for (let index = 0; index < 20; index++) {
        creatSlide();
    }

    const cardds = document.querySelectorAll(".cardd");
    const numCardds = cardds.length;

    //-- set size vewport
    const slide = document.querySelector(".cardd");
    let widthSlide = slide.getBoundingClientRect().width;
    vew.style.width = `${widthSlide * numVewSlides}px`;

    //-- btn
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const maxPositionMark = numCardds - numVewSlides;

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

    //-- functions --

    function creatSlide() {
        const div = document.createElement("div");
        div.classList.add("cardd");
        line.append(div);
    }

    function muveLine(num) {
        line.style.transform = `translateX(-${num * widthSlide}px)`;
    }

    //-- /functions --
}
