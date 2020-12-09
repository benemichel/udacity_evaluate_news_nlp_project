function validateUrl(url) {
    //https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    const regex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/);
    const isValid = url.match(regex) ?  true :  false;
    return isValid;
}

function validationListener(event) {
    const urlField = document.getElementById('url');
    const validationErrorField = document.getElementById('url-validation-error');
    const submitButton = document.getElementById('form-submit')

    if (urlField.value != "" && urlField.value!= null && validateUrl(urlField.value)) {
        validationErrorField.innerHTML = '';
        submitButton.disabled = false;

    }
    else {
        validationErrorField.innerHTML = 'Must be a valid URL';
        submitButton.disabled = true;
    }
}



export { validateUrl, validationListener }
