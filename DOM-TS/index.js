"use strict";
const formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};
const forms = document.querySelectorAll('form');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
const checkbox = document.querySelector('#checkbox');
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formData.email = (email === null || email === void 0 ? void 0 : email.value) || '';
        formData.title = (title === null || title === void 0 ? void 0 : title.value) || '';
        formData.text = (text === null || text === void 0 ? void 0 : text.value) || '';
        formData.checkbox = (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) || false;
        console.log(formData);
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
function isValidateInputs(obj) {
    let res = true;
    for (const key in obj) {
        if (!obj[key]) {
            res = false;
        }
    }
    return res;
}
function validateFormData(data) {
    if (Object.values(data).every((val) => val)) {
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
    if (emails.indexOf(email) > -1) {
        // emails.includes(email)
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
