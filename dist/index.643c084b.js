let input = document.querySelector('.email-input');
const button = document.querySelector('.button');
/* INPUT */ button.addEventListener('click', (e)=>{
    e.preventDefault();
    let string = input.value;
    let value = string;
    getValue(value);
    input.value = '';
});
/* Get INPUT */ function getValue(val) {
    return validity(val);
}
/* Check if valid */ function validity(val) {
    const errorSign = document.querySelector('.error-sign-hidden');
    const errorMessage = document.querySelector('.error-message-hidden');
    if (val === '' || !val.includes('@')) {
        errorSign.classList.add('error-sign-visible');
        errorMessage.classList.add('error-message-visible');
    } else {
        errorSign.classList.remove('error-sign-visible');
        errorMessage.classList.remove('error-message-visible');
    }
}

//# sourceMappingURL=index.643c084b.js.map
