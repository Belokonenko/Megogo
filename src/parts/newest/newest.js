export default function newest() {
    // const dataContent = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
    const dataContent = [
        {
            href: '#',
            img: "../../img/img-film-0.jpg",
            resolution: 1080,
            rating: 5.0,
            year: 2022,
            time: 111,
            desc:'Crossword Mysteries: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-1.jpg",
            resolution: 1080,
            rating: 4.5,
            year: 2020,
            time: 147,
            desc:'Scream 4: 4-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-2.jpg",
            resolution: 1080,
            rating: 3.5,
            year: 2021,
            time: 100,
            desc:'Django Unchained: 1-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-3.jpg",
            resolution: 1080,
            rating: 4.0,
            year: 2019,
            time: 190,
            desc:'The Avengers: 1-Movie' 
        },
        {
            href: '#',
            img: "../../img/img-film-4.jpg",
            resolution: 1080,
            rating: 3.3,
            year: 2020,
            time: 120,
            desc:'Warrior: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            desc:'Mad Max: Fury Road' 
        },
        {
            href: '#',
            img: "../../img/img-film-0.jpg",
            resolution: 1080,
            rating: 5.0,
            year: 2022,
            time: 111,
            desc:'Crossword Mysteries: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-1.jpg",
            resolution: 1080,
            rating: 4.5,
            year: 2020,
            time: 147,
            desc:'Scream 4: 4-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-2.jpg",
            resolution: 1080,
            rating: 3.5,
            year: 2021,
            time: 100,
            desc:'Django Unchained: 1-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-3.jpg",
            resolution: 1080,
            rating: 4.0,
            year: 2019,
            time: 190,
            desc:'The Avengers: 1-Movie' 
        },
        {
            href: '#',
            img: "../../img/img-film-4.jpg",
            resolution: 1080,
            rating: 3.3,
            year: 2020,
            time: 120,
            desc:'Warrior: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            desc:'Mad Max: Fury Road' 
        },
        {
            href: '#',
            img: "../../img/img-film-0.jpg",
            resolution: 1080,
            rating: 5.0,
            year: 2022,
            time: 111,
            desc:'Crossword Mysteries: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-1.jpg",
            resolution: 1080,
            rating: 4.5,
            year: 2020,
            time: 147,
            desc:'Scream 4: 4-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-2.jpg",
            resolution: 1080,
            rating: 3.5,
            year: 2021,
            time: 100,
            desc:'Django Unchained: 1-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-3.jpg",
            resolution: 1080,
            rating: 4.0,
            year: 2019,
            time: 190,
            desc:'The Avengers: 1-Movie' 
        },
        {
            href: '#',
            img: "../../img/img-film-4.jpg",
            resolution: 1080,
            rating: 3.3,
            year: 2020,
            time: 120,
            desc:'Warrior: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            desc:'Mad Max: Fury Road' 
        },
        {
            href: '#',
            img: "../../img/img-film-0.jpg",
            resolution: 1080,
            rating: 5.0,
            year: 2022,
            time: 111,
            desc:'Crossword Mysteries: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-1.jpg",
            resolution: 1080,
            rating: 4.5,
            year: 2020,
            time: 147,
            desc:'Scream 4: 4-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-2.jpg",
            resolution: 1080,
            rating: 3.5,
            year: 2021,
            time: 100,
            desc:'Django Unchained: 1-Movie ' 
        },
        {
            href: '#',
            img: "../../img/img-film-3.jpg",
            resolution: 1080,
            rating: 4.0,
            year: 2019,
            time: 190,
            desc:'The Avengers: 1-Movie' 
        },
        {
            href: '#',
            img: "../../img/img-film-4.jpg",
            resolution: 1080,
            rating: 3.3,
            year: 2020,
            time: 120,
            desc:'Warrior: 2-Movie Collection' 
        },
        {
            href: '#',
            img: "../../img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            desc:'Mad Max: Fury Road' 
        },
        {
            href: '#',
            img: "../../img/img-film-5.jpg",
            resolution: 1080,
            rating: 5.3,
            year: 2020,
            time: 122,
            desc:'Mad Max: Fury Road' 
        },
    ];
    const newestContent = document.querySelector(".newest__content");
    

    setContent(dataContent)


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
                            <p class="card-b__resolution-num">${item.resolution}</p>
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
                        <span class="card-b__desc">${item.desc}</span>

                </a>

            `;
        });
    }
}
