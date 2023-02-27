new SimpleLightbox({ elements: '.container-galerie a' });
new SimpleLightbox({ elements: '.serv-galerie a'})

AOS.init({
    duration: 900,
    offset: 100,
    once: true
});

emailjs.init("t8pJZjsvfDFzBm7qt");

function mobile() {
    var x = document.getElementById("nav");

    if (x.className === "navbar") {
        x.className = "navbar mobile";
    } else {
        x.className = "navbar";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_rguiedf", "template_yzqylsq", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}
