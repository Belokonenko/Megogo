import { dataContent } from "../bd/bd.js";

export default function search() {
    const listResult = document.querySelector(".search__res-list");
    const searchInput = document.querySelector(".search__input");

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.trim();
        listResult.innerHTML = "";
        if (value) {
            dataContent.forEach((item) => {
                if ((item.name.toLowerCase().search(value.toLowerCase())) > -1) {
                    listResult.innerHTML += `
                        <li class="search__res-item"><a href="./movie.html">${item.name}</a></li>

                    `;
                }
            });
        }
    });

}
