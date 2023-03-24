export default function stars() {
    const ratings = document.querySelectorAll(".rating");

    if (ratings) {
        if (ratings.length > 0) {
            initRatings();
        }
        //  functions

        function initRatings() {
            let ratingActive, ratingValue;

            for (let index = 0; index < ratings.length; index++) {
                const rating = ratings[index];
                initRating(rating);
            }

            function initRating(rating) {
                initRatingVars(rating);

                setRatingActivaWidth();

                if (rating.classList.contains("rating_set")) {
                    setRating(rating);
                }
            }

            function initRatingVars(rating) {
                ratingActive = rating.querySelector(".rating__active");
                ratingValue = rating.querySelector(".rating__value");
            }

            function setRatingActivaWidth(index = ratingValue.innerHTML) {
                const ratingActiveWidth = index / 0.05;
                ratingActive.style.width = `${ratingActiveWidth}%`;
            }

            function setRating(rating) {
                const ratingItems = rating.querySelectorAll(".rating__item");

                for (let index = 0; index < ratingItems.length; index++) {
                    console.log(ratingItems[index].value);

                    const ratingItem = ratingItems[index];

                    ratingItem.addEventListener("mouseenter", (e) => {
                        console.log(e.target.value);
                        initRatingVars(rating);

                        setRatingActivaWidth(ratingItem.value);
                    });
                    ratingItem.addEventListener("mouseleave", (e) => {
                        setRatingActivaWidth();
                    });
                    ratingItem.addEventListener("click", () => {
                        // update vars
                        initRatingVars(rating);

                        if (rating.dataset.ajax) {
                            // send on server
                            setRatingValue(ratingItem.value, rating);
                        } else {
                            ratingValue.innerHTML = index + 1;
                            setRatingActivaWidth();
                        }
                    });
                }
            }
        }
    }
}
