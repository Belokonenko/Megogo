const checkName = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    const regex = /[^a-zA-Z]/g;
    
    numInputs.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(regex, "");
        })
    })
};

export default checkName;
