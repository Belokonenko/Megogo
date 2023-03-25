import { dataContent } from "../bd/bd.js";

export default function stars() {
    const ratings = document.querySelector(".rating");
    const ratingValue = document.querySelector(".rating__value");
    const ratingActive = document.querySelector(".rating__active");
    const ratingItems = document.querySelectorAll(".rating__item");

    if (ratings) {
        setRatingVal(dataContent[0].rating);

        ratingItems.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                setStars(element.value);
            });
            element.addEventListener("mouseleave", () => {
                setStars();
            });
            element.addEventListener("click", () => {
                // console.log(ratingValue.innerHTML);
                // console.log(element.value);
                // console.log( Math.abs((ratingValue.innerHTML - element.value) /2));
                console.log(dataContent[0].vote);
                setRatingVal(element.value);
            });
        });

        function setRatingVal(num) {
            if (num - Math.floor(num) == 0) {
                num = `${num}.0`;
            }

            ratingValue.innerHTML = num;
            setStars();
        }

        function setStars(index = ratingValue.innerHTML) {
            ratingActive.style.width = `${index / 0.05}%`;
        }

    }
}
