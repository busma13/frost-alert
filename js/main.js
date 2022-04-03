const emailCB = document.getElementById('emailAlert');
const textCB = document.getElementById('textAlert');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');

emailCB.addEventListener('change', (event) => {
    if (emailCB.checked) {
        emailInput.hidden = false;
    } else {
        emailInput.hidden = true;
    }
});

textCB.addEventListener('change', (event) => {
    if (textCB.checked) {
        telInput.hidden = false;
    } else {
        telInput.hidden = true;
    }
});
