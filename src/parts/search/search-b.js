import { dataContent } from "../bd/bd.js";

export default function searchB() {
    const searchB = document.querySelector(".search-b");
    const searchInput = document.querySelector(".search-b__input");
    const listResult = document.querySelector(".search-b__res-list");

    searchB.addEventListener("mouseleave", () => {
        listResult.innerHTML = "";
        searchInput.value = "";
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const value = searchInput.value.trim();

            listResult.innerHTML = "";

            let num = 0;

            if (value) {
                dataContent.forEach((item) => {
                    const val = value.toLowerCase();

                    if (item.name.toLowerCase().search(val) > -1 && num < 10) {
                        num++;
                        listResult.innerHTML += `
                        <li class="search__res-item"><a href="./movie.html">${item.name}</a></li>

                    `;
                    }
                });
            }
        });
    }
}
