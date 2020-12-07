function handleSubmit(event) {
    console.log('handle submit');
    event.preventDefault()

    // check what text was put into the form field
    const formUrl = document.getElementById('url').value;
    const formLang = document.querySelector('input[name="lang"]:checked').value;
    console.log('lang chosen: ' + formLang);

    Client.validateSubmit(formUrl);

    console.log("::: Form Submitted :::");

    const data = {
        'url': formUrl,
        'lang': formLang,
    }

    postData(data).then(res => {
        console.log("res from server: " +  JSON.stringify(res));
        document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
        document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
        document.getElementById('sentiment').innerHTML = 'Sentiment: ' + res.sentiment;



    }).catch(err => {
        console.log('error', err);
    });


}

const postData = async (data = {}) => {
    console.log('form data ' + JSON.stringify(data));
    const res = await fetch('http://localhost:8081/sentiment', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    );
    try {
        const resData = await res.json();
        return resData;
    } catch (err) {
        console.log('error', error);
    }
}

export { handleSubmit }


