export default function form() {
    const form = document.querySelector(".contact__form"); 
    if (form) {
        const sendBtn = document.querySelector(".contact__btn-sent"); // получаем кнопку отправки

        sendBtn.addEventListener("click", function (event) {
            event.preventDefault(); // отменяем стандартное поведение кнопки при клике

            // получаем данные из формы
            const name = document.querySelector(".contact__inp-name").value;
            const email = document.querySelector(".contact__inp-email").value;
            const textArea = document.querySelector(
                ".contact__text-area"
            ).value;

            // создаем объект FormData и добавляем данные из формы
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("text-area", textArea);

            // создаем объект XMLHttpRequest и отправляем запрос на сервер
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // URL для отправки данных
            xhr.setRequestHeader(
                "Content-type",
                "application/json; charset=utf-8"
            );
            xhr.onload = function () {
                if (xhr.status === 201) {
                    console.log(xhr.response); // выводим ответ от сервера в консоль

                    // очищаем поля формы после отправки
                    document.querySelector(".contact__inp-name").value = "";
                    document.querySelector(".contact__inp-email").value = "";
                    document.querySelector(".contact__text-area").value = "";

                    // выводим сообщение пользователю об успешной отправке
                    showModal(
                        "Success!",
                        "Your message has been sent successfully."
                    );
                } else {
                    console.log("Ошибка: " + xhr.status); // выводим ошибку, если запрос не удался

                    // выводим сообщение пользователю об ошибке
                    showModal(
                        "Error!",
                        "An error occurred while sending your message."
                    );
                }
            };
            xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        });

        // функция для вывода сообщения в модальном окне
        function showModal(title, message, isSuccess) {

            sendBtn.blur();
            const modal = document.createElement("div");
            modal.classList.add("modal__overlay");

            const modalContent = `
                <div class="modal__container ${
                    isSuccess ? "success" : "error"
                }">
                  <h2 class="modal__title">${title}</h2>
                  <p class="modal__message">${message}</p>
                  <button class="modal__btn-close">Close</button>
                </div>
              `;

            modal.innerHTML = modalContent;

            document.body.appendChild(modal);


            const time = setTimeout(function () {
                modal.remove();
            }, 1000);

            const btnClose = modal.querySelector(".modal__btn-close");

            btnClose.addEventListener("click", function () {
                modal.remove();
                clearTimeout(time);
            });

            document.addEventListener("keydown", function () {
                modal.remove();
                clearTimeout(time);
            });
        }
    }
}
