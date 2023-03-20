import { dataContent } from "../bd/bd.js";

export default function newest() {

    const newestContent = document.querySelector(".newest__content");
    if (newestContent) {
        setContent(dataContent);

        // -- sort

        const btn = document.querySelector(".newest__btn");
        const arr = document.querySelector(".newest__btn-arr");
        const nameBtn = document.querySelector(".sort-name");
        const dateBtn = document.querySelector(".sort-date");
        const ratingBtn = document.querySelector(".sort-rating");
        const dropList = document.querySelector(".newest__drop-list");
        const wrapBtn = document.querySelector(".newest__wrap-btn");

        btn.addEventListener("click", () => {
            dropList.classList.toggle("newest__drop-list--active");
            arr.classList.toggle("newest__btn-arr--active");
        });
        wrapBtn.addEventListener("mouseleave", () => {
            dropList.classList.remove("newest__drop-list--active");
            arr.classList.remove("newest__btn-arr--active");
        });

        nameBtn.addEventListener("click", () => {
            setContent(sortDesc(dataContent));
        });

        dateBtn.addEventListener("click", () => {
            setContent(sortDate(dataContent));
        });

        ratingBtn.addEventListener("click", () => {
            setContent(sortRating(dataContent));
        });

        // -- /sort

        // -- functions

        function sortDesc(arr) {
            const temp = JSON.parse(JSON.stringify(arr));

            // sort by name
            temp.sort((a, b) => {
                const nameA = a.desc.toUpperCase(); // ignore upper and lowercase
                const nameB = b.desc.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            return temp;
        }

        function sortDate(arr) {
            const temp = JSON.parse(JSON.stringify(arr));

            temp.sort((a, b) => {
                const ratingA = +a.year;
                const ratingB = +b.year;

                return ratingA - ratingB;
            }).reverse();

            return temp;
        }

        function sortRating(arr) {
            const temp = JSON.parse(JSON.stringify(arr));

            temp.sort((a, b) => {
                const ratingA = +a.rating;
                const ratingB = +b.rating;

                return ratingA - ratingB;
            }).reverse();

            return temp;
        }

        function setContent(arr) {
            newestContent.innerHTML = "";

            arr.forEach((item, i) => {
                newestContent.innerHTML += `
                <a class="card-b" href=${item.href} data-num=${i}>
                    <div class="card-b__wrap-img">
                        <img
                            class="card-b__img"
                            src=${item.img}
                            alt="movie card-b"
                        />
                        <div class="card-b__resolution">
                            <p class="card-b__resolution-num">${
                                item.resolution
                            }</p>
                            <p class="card-b__resolution-pix">p</p>
                        </div>
                        <div class="card-b__rating">
                            <p class="card-b__rating-num">${item.rating}</p>
                        </div>
                    </div>
                    <div class="card-b__wrap-time">
                        <span class="card-b__year">${item.year}</span>
                        <span class="card-b__time">${item.time}p</span>
                    </div>
                    <div >
                        <span class="card-b__name">${item.name}</span>
                        <span>${" : "}</span>
                        <span class="card-b__desc">${item.desc}</span>
                    </div>
                </a>

            `;
            });
        }
    }
}
