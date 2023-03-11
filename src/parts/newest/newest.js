export default function newest() {
    const dataContent = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
    const newestContent = document.querySelector(".newest__content");
    

    // setContent(dataContent)


    function setContent(arr) {
        newestContent.innerHTML = "";

        arr.forEach((element) => {
            newestContent.innerHTML += `
                <div class="card">
                    <img
                        class="card__img"
                        src="../../img/img-cat.jpg"
                        alt="movie card"
                    />
                    <div class="card__resolution">
                        <p class="card__resolution-num">1080</p>
                        <p class="card__resolution-pix">p</p>
                    </div>
                    <div class="card__rating">
                        <p class="card__rating-num">5.5</p>
                    </div>
                </div>

            `;
        });
    }
}
