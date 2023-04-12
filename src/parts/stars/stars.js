import { dataContent } from "../bd/bd.js";

export default function stars() {
    const ratings = document.querySelector(".rating");
    const ratingValue = document.querySelector(".rating__value");
    const ratingActive = document.querySelector(".rating__active");
    const ratingItems = document.querySelectorAll(".rating__item");

    if (ratings) {
        const arrVotes = [];
        let rating = 0;

        setRatingVal(rating);

        ratingItems.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                setStars(element.value);
            });
            element.addEventListener("mouseleave", () => {
                setStars();
            });
            element.addEventListener("click", () => {
                arrVotes.push(element.value);

                const sumWithInitial = arrVotes.reduce(
                    (accumulator, currentValue) => accumulator + parseFloat(currentValue) ,
                    0
                );

                setRatingVal((sumWithInitial / arrVotes.length).toFixed(1));
            });
        });

        function setRatingVal(num) {

            ratingValue.innerHTML = parseFloat(num).toFixed(1);
            setStars();
        }

        function setStars(index = ratingValue.innerHTML) {
            ratingActive.style.width = `${index / 0.05}%`;
        }
    }
}
