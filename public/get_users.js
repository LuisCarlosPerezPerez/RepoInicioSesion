function fetchUsers() {
    fetch('/users')
        .then(response => response.json())
        .then(data => document.getElementById('result').innerText = JSON.stringify(data))
        .catch(error => console.error('Error:', error));
}