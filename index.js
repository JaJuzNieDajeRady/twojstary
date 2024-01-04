/*
no comment
*/
const pre = document.querySelectorAll(".card");
document.addEventListener("mousemove", (e) => {pre.forEach((img) => {rotateElement(e, img);
});});

function rotateElement(event, element){
    const x = event.clientX;
    const y = event.clientY;
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight;
    const rect = element.getBoundingClientRect();
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 2


    const offsetX = ((x - middleX) / windowWidth) * 30;
    const offsetY = ((y - middleY) / windowHeight) * 30;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}