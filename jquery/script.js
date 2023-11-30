//#URL Base, usaremos una constante por si en algún momento se publica en un sitio diferente a localhost
let backendURLBase="http://localhost:5000/"

function completeBackPath(relativeRequest){
    return backendURLBase + relativeRequest;
}

function showAlert(messageToShow) {
    $("#alertsZone").html(messageToShow);
    $("#alertsZone").addClass("alertStyleInfo");
}

function clearAlert() {
    $("#alertsZone").html("Recuede que los datos marcados con (*) son obligatorios");
    $("#alertsZone").removeClass("alertStyleInfo");
}

$("#datosCliente").ready(function(event) {
    clearAlert();
});

$('#datosCliente').attr('action', completeBackPath('pizza'));
$("#datosCliente").on("submit", function(event) {
    clearAlert();
    $("#labelNombre").removeClass("mandatoryError");
    $("#labelApellidos").removeClass("mandatoryError");

    let stop = false;
    if ($("#nombre").val() === ""){
        $("#labelNombre").addClass("mandatoryError");
        stop = true;
    }
    if ($("#apellidos").val() === "") {
        $("#labelApellidos").addClass("mandatoryError");
        stop = true;
    }

    if (stop) {
        showAlert("Por favor, revise los datos marcados en rojo");
        // Con "event.preventDefault()" y "return false" se consigue parar la ejecución del formulario
        // dejo el "return false" por ser algo específico de jquery
        // event.preventDefault();
        return false;
    }
});