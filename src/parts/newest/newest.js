export default function newest() {
    const dataContent = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
    const newestContent = document.querySelector(".newest__content");
    

    setContent(dataContent)


    function setContent(arr) {
        newestContent.innerHTML = "";

        arr.forEach((element) => {
            newestContent.innerHTML += `
                <a class="card-b" href="#">
                    <div class="card-b__wrap-img">
                        <img
                            class="card-b__img"
                            src="../../img/img-cat.jpg"
                            alt="movie card-b"
                        />
                        <div class="card-b__resolution">
                            <p class="card-b__resolution-num">1080</p>
                            <p class="card-b__resolution-pix">p</p>
                        </div>
                        <div class="card-b__rating">
                            <p class="card-b__rating-num">5.5</p>
                        </div>
                    </div>
                    <div class="card-b__wrap-time">
                        <span class="card-b__year">2023</span>
                        <span class="card-b__time">110m</span>
                    </div>
                        <span class="card-b__desc">Crossword Mysteries: 2-Movie Collection</span>

                </a>

            `;
        });
    }
}
