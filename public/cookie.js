function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === nombre) return decodeURIComponent(value);
    }
    return null;
}

console.log(getCookie("usuario"));