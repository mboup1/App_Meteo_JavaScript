let ville = "Agen";
 
const url = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric')
    .then(reponse => reponse.json())
    .then((agenMeteo) => {
        document.getElementById("temperature_label").innerHTML = agenMeteo.main.temp;
        document.getElementById("ville").innerHTML = agenMeteo.name
    })
    

let button = document.querySelector('#changer');

button.addEventListener('click', villeChoisie)

function villeChoisie() {
    ville = prompt('Choisir votre ville :')

    const url = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric')
    .then(reponse => reponse.json())
    .then((agenMeteo) => {
        document.getElementById("temperature_label").innerHTML  = agenMeteo.main.temp;
        document.getElementById("ville").innerHTML              = agenMeteo.name
    })


}