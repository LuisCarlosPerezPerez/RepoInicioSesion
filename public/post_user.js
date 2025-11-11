function postUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
        .then(response => response.json())
        .then(data => document.getElementById('result').innerText = JSON.stringify(data))
        .catch(error => console.error('Error:', error));
}