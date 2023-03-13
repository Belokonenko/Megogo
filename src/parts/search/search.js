export default function search() {
    // test
    const dataContent = [
        {
            href: "#",
            img: "./img/img-film-0.jpg",
            resolution: 1080,
            rating: 5.0,
            year: 2022,
            time: 111,
            name: "Crossword Mysteries",
            desc: "2-Movie Collection",
        },
        {
            href: "#",
            img: "./img/img-film-1.jpg",
            resolution: 1080,
            rating: 4.5,
            year: 2020,
            time: 147,
            name: "Scream 3",
            desc: "3-Movie",
        },
        {
            href: "#",
            img: "./img/img-film-2.jpg",
            resolution: 1080,
            rating: 3.5,
            year: 2021,
            time: 100,
            name: "Django Unchained",
            desc: "1-Movie",
        },
        {
            href: "#",
            img: "./img/img-film-3.jpg",
            resolution: 1080,
            rating: 4.0,
            year: 2019,
            time: 190,
            name: "The Avengers",
            desc: "1-Movie",
        },
        {
            href: "#",
            img: "./img/img-film-4.jpg",
            resolution: 1080,
            rating: 3.3,
            year: 2020,
            time: 120,
            name: "Warrior",
            desc: "1-Movie Collection ",
        },
        {
            href: "#",
            img: "./img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            name: "Mad Max",
            desc: "Fury Road",
        },
    ];
    const listSearch = document.querySelector(".search__list");

    setSearchList(dataContent);

    function setSearchList(arr) {
        listSearch.innerHTML = "";
        
        arr.forEach((item) => {
            listSearch.innerHTML += `
                <li class="search__item hidden"><a href=${item.href}>${item.name}</a></li>
            `;
        });
    }


    const items = document.querySelectorAll(".search__item");
    const input = document.querySelector(".search__input");

    items.forEach(item => {
        item.addEventListener('click', )
    })

    input.addEventListener("input", () => {
        const value = input.value.trim();
        
        if (value) {
            items.forEach((item) => {
                if (item.textContent.toLowerCase().search(value.toLowerCase())) {
                    item.classList.remove("visual");
                } else {
                    item.classList.add("visual");
                }
            });
        }
    });
}
