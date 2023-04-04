
const LOCATE_PERSON = {
    lat : 0,
    long : 0
}

function getLocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocate);

    } else {
        window.alert("Seu navegador não suporta")
    }


}


function showLocate(position) {
    if (position && position.coords) {
        //alert("Sua posição atual é: " + position.coords.latitude + ", " + position.coords.longitude);
        LOCATE_PERSON.lat = position.coords.latitude
        LOCATE_PERSON.long = position.coords.longitude
    } else {
        console.log("Não foi possível obter a localização.");
    }
}

getLocate()

showLocate()

export default LOCATE_PERSON;