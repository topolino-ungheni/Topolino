new SimpleLightbox({ elements: '.container-galerie a' });
new SimpleLightbox({ elements: '.serv-galerie a' })

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

var menu = document.querySelector(".menu")
var header = document.querySelector(".menu-nav")


menu.addEventListener("click", function () {
    header.classList.add("nav-mobile")
})

// function hamb_mobile() {
//     var x = document.getElementById("hamb");

//     if (x.className === "hamburger") {
//         x.className = "hamburger mobile";
//     } else {
//         x.className = "hamburger";
//     }
// }

function onload() {
    getYear();
    console.log('page loaded');
    // setScrollListener();
}

function getYear() {
    var d = new Date(),
        date = d.getDate(),
        mon = d.getMonth(),
        yr = d.getFullYear();
    // var days = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
    // document.getElementById("year").innerHTML = ((date < 10) ? '0' + date : date) + "/" +
    document.getElementById("year").innerHTML = ('0' + date).slice(-2) + "/" +
        // (((mon + 1) < 10) ? '0' + (mon + 1) : (mon + 1)) + "/" + yr + " " + days[d.getDay()];
        ('0' + (mon + 1)).slice(-2) + "/" + yr;
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

function send2() {

    if (document.getElementById("rezervare").checkValidity() == false) {
        document.getElementById("rezervare").reportValidity();
        return;
    }

    var datal = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        nr_telefon: document.getElementById("nr_telefon").value,
        data: document.getElementById("data").value,
        ora_sosirii: document.getElementById("ora_sosirii").value,
        ora_plecarii: document.getElementById("ora_plecarii").value,
        copii: document.getElementById("copii").value
    };

    emailjs.send("service_rguiedf", "template_8y9hhja", datal)
        .then(function (raspuns) {
            btn.value = 'SEND MESSAGE';
            alert("Mesajul a fost transmis. Operatorul o să vă contacteze în decurs de câteva ore.")
            document.getElementById("rezervare").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}

// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_rguiedf';
//    const templateID = 'template_8y9hhja';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Rezervează!';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Rezervează!';
//       alert(JSON.stringify(err));
//     });
// });

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
