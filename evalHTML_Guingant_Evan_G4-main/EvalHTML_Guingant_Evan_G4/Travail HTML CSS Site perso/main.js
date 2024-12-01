let boutons = document.querySelector(".bouton");
let main = document.querySelector(".main");
var title = document.querySelector(".videolink")
console.log(boutons)


boutons.addEventListener("click", function () {
        main.classList.toggle("darkmode");
        main.classList.toggle("h1");
        title.classList.toggle("h3");
    });

let form = document.querySelector('form')
form.addEventListener('submit' , function(event) {
    event.preventDefault();
    console.log('Envoie du form détecté !')
})


form.addEventListener('submit', function(event) {
    event.preventDefault();
// vérification de l'email avec soit validé soit invalide en fonction de ce qui a écrit //
    let email = document.querySelector('#email')

    if(email.value == '') {
        console.log("invalide")
        email.classList.remove("valide")
        email.classList.add("invalide")
    } else {
        console.log("valide")
        email.classList.remove("invalide")
        email.classList.add("valide")
    }

})

form.addEventListener('submit', function(event) {
    event.preventDefault();
let firstname = document.querySelector('#firstname')

if(firstname.value.length < 6 ) {
    console.log("invalide")
    firstname.classList.remove("valide")
    firstname.classList.add("invalide")
} else {
    console.log("valide")
    firstname.classList.remove("invalide")
    firstname.classList.add("valide")
}

})


form.addEventListener('submit', function(event) {
    event.preventDefault();
let password = document.querySelector('#password')

let passcheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
);

if(password.value.length < 8 || passcheck.test(password.value) == false ) {
    console.log("invalide")
    firstname.classList.remove("valide")
    firstname.classList.add("invalide")
} else {
    console.log("valide")
    firstname.classList.remove("invalide")
    firstname.classList.add("valide")
}
})
    
