import { dataContent } from "../bd/bd.js";

export default function newest() {
    const newestContent = document.querySelector(".newest__content");

    if (newestContent) {
        
        // --- pagination

        const btnPrev = document.querySelector(".pag-btn-prev");
        const btnNext = document.querySelector(".pag-btn-next");

        const itemsPerPage = 20;
        const pages = Math.ceil(dataContent.length / itemsPerPage);
        const maxPag = 3;
        let currentPage = 1;

        const pagContainer = document.querySelector(".newest__pagination-num");
        
        displayContent();
        // displayData(dataContent, currentPage, itemsPerPage);
        // displayPagination();

        // --- listeners btn pagination

        btnNext.addEventListener("click", () => {
            ++currentPage;
            
            if (currentPage <= pages) {
                displayContent();
                // displayData(dataContent, currentPage, itemsPerPage);
                // displayPagination();
            } else {
                currentPage = pages;
            }
        });

        btnPrev.addEventListener("click", () => {
            --currentPage;
            
            if (currentPage > 0) {
                displayContent();
                // displayData(dataContent, currentPage, itemsPerPage);
                // displayPagination();
            } else {
                currentPage = 1;
            }

        });
        
        // --- /listeners btn pagination

        // --- functions
        
        function displayContent() {
                displayData(dataContent, currentPage, itemsPerPage);
                displayPagination();
        }

        function getPagBtn(i) {
            const btn = document.createElement("button");
            btn.innerHTML = i;
            btn.addEventListener("click", () => {
                console.log(`click ${i}`);
                currentPage = i;
                displayData(dataContent, currentPage, itemsPerPage);
                displayPagination();
            });

            btn.classList.add("newest__pag-num");

            if (i == currentPage) {
                btn.classList.add("newest__pag-num--active");
            }

            return btn;
        }

        function addBtnPag(btn) {
            pagContainer.append(btn);
        }

        function setDots() {
            const span = document.createElement("span");
            span.innerHTML = "...";
            pagContainer.append(span);
        }

        function displayPagination() {
            console.log(`displayPagination = ${currentPage}`);
            pagContainer.innerHTML = "";

            if (currentPage == 1) {
                addBtnPag(getPagBtn(currentPage ));
                addBtnPag(getPagBtn(currentPage + 1));
                addBtnPag(getPagBtn(currentPage + 2));
                setDots();
                addBtnPag(getPagBtn(pages));
            } else if (currentPage == pages) {
                addBtnPag(getPagBtn(1));
                setDots();
                addBtnPag(getPagBtn(currentPage - 2));
                addBtnPag(getPagBtn(currentPage - 1));
                addBtnPag(getPagBtn(currentPage));
            } else if (currentPage == pages - 1) {
                addBtnPag(getPagBtn(1));
                setDots();
                addBtnPag(getPagBtn(currentPage - 1));
                addBtnPag(getPagBtn(currentPage));
                addBtnPag(getPagBtn(currentPage + 1));
            } else {
                addBtnPag(getPagBtn(currentPage - 1));
                addBtnPag(getPagBtn(currentPage));
                addBtnPag(getPagBtn(currentPage + 1));
                setDots();
                addBtnPag(getPagBtn(pages));
            }
        }

        function displayData(data, currentPage, itemsPerPage) {
            const dataContainer = document.querySelector(".newest__content");

            dataContainer.innerHTML = "";

            const startIndex = (currentPage - 1) * itemsPerPage;

            const endIndex = startIndex + itemsPerPage;

            const itemsToShow = data.slice(startIndex, endIndex);

            itemsToShow.forEach((item, i) => {
                dataContainer.innerHTML += "";
                dataContainer.innerHTML += `
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

        // --- pagination
    }
}

// setContent(dataContent);

// // -- sort

// const btn = document.querySelector(".newest__btn");
// const arr = document.querySelector(".newest__btn-arr");
// const nameBtn = document.querySelector(".sort-name");
// const dateBtn = document.querySelector(".sort-date");
// const ratingBtn = document.querySelector(".sort-rating");
// const dropList = document.querySelector(".newest__drop-list");
// const wrapBtn = document.querySelector(".newest__wrap-btn");

// btn.addEventListener("click", () => {
//     dropList.classList.toggle("newest__drop-list--active");
//     arr.classList.toggle("newest__btn-arr--active");
// });
// wrapBtn.addEventListener("mouseleave", () => {
//     dropList.classList.remove("newest__drop-list--active");
//     arr.classList.remove("newest__btn-arr--active");
// });

// nameBtn.addEventListener("click", () => {
//     setContent(sortDesc(dataContent));
// });

// dateBtn.addEventListener("click", () => {
//     setContent(sortDate(dataContent));
// });

// ratingBtn.addEventListener("click", () => {
//     setContent(sortRating(dataContent));
// });

// // -- /sort

// // -- functions

// function sortDesc(arr) {
//     const temp = JSON.parse(JSON.stringify(arr));

//     // sort by name
//     temp.sort((a, b) => {
//         const nameA = a.desc.toUpperCase(); // ignore upper and lowercase
//         const nameB = b.desc.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//             return -1;
//         }
//         if (nameA > nameB) {
//             return 1;
//         }
//         // names must be equal
//         return 0;
//     });
//     return temp;
// }

// function sortDate(arr) {
//     const temp = JSON.parse(JSON.stringify(arr));

//     temp.sort((a, b) => {
//         const ratingA = +a.year;
//         const ratingB = +b.year;

//         return ratingA - ratingB;
//     }).reverse();

//     return temp;
// }

// function sortRating(arr) {
//     const temp = JSON.parse(JSON.stringify(arr));

//     temp.sort((a, b) => {
//         const ratingA = +a.rating;
//         const ratingB = +b.rating;

//         return ratingA - ratingB;
//     }).reverse();

//     return temp;
// }

// function setContent(arr) {
//     newestContent.innerHTML = "";

//     arr.forEach((item, i) => {
//         newestContent.innerHTML += `
//         <a class="card-b" href=${item.href} data-num=${i}>
//             <div class="card-b__wrap-img">
//                 <img
//                     class="card-b__img"
//                     src=${item.img}
//                     alt="movie card-b"
//                 />
//                 <div class="card-b__resolution">
//                     <p class="card-b__resolution-num">${
//                         item.resolution
//                     }</p>
//                     <p class="card-b__resolution-pix">p</p>
//                 </div>
//                 <div class="card-b__rating">
//                     <p class="card-b__rating-num">${item.rating}</p>
//                 </div>
//             </div>
//             <div class="card-b__wrap-time">
//                 <span class="card-b__year">${item.year}</span>
//                 <span class="card-b__time">${item.time}p</span>
//             </div>
//             <div >
//                 <span class="card-b__name">${item.name}</span>
//                 <span>${" : "}</span>
//                 <span class="card-b__desc">${item.desc}</span>
//             </div>
//         </a>

//     `;
//     });
// }
