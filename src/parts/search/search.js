import { dataContent } from "../bd/bd.js";

export default function search() {
    const formSearch = document.querySelector(".search");

    const listResult = document.querySelector(".search__res-list");
    const searchInput = document.querySelector(".search__input");

    formSearch.addEventListener("mouseleave", () => {
        listResult.innerHTML = "";
        searchInput.value = "";
    });

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.trim();
        
        listResult.innerHTML = "";
        
        if (value) {
            let num = 0;
            
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
