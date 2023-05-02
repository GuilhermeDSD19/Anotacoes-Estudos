const paragrafos = document.querySelectorAll(".paragrafos p");

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor

paragrafos.forEach(e => {
    e.style.backgroundColor=`${backgroundColorBody}`
    e.style.color="#fff"
})