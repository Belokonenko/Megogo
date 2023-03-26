export default function description() {
    const btnDow = document.querySelector(".desc__btn-dow");
    const blockDow = document.querySelector(".parts");
    const close = document.querySelector(".parts__close");

    if (btnDow) {
        btnDow.addEventListener("click", () => {
            blockDow.classList.add("viseble");
        });

        close.addEventListener("click", () => {
            blockDow.classList.remove("viseble");
        });
    }
}
