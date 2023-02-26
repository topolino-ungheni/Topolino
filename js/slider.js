let index = 0;

function slider() {
    let slides = document.getElementsByClassName('slide');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

slider();
setInterval(slider, 5000);