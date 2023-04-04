function validateEmail(node) {
    const email = document.querySelector(node);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(email.value);
}

export default validateEmail;
