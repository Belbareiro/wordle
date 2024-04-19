
let intentos = 6;
let lista = ["ANGEL","MONTO","RATON","ATOMO","EXITO","TEXTO","IDOLO","PASTO","CRUEL","ATOMO","TECHO"];
let posicion = Math.floor(Math.random() * lista.length);
let palabra = lista[posicion];

console.log(palabra);
const INPUT = document.getElementById("guess-input");
const BOTON = document.querySelector(".guess-button");
console.log(BOTON);

BOTON.addEventListener("click", function() {
    const inputValor = leerIntento();
    if (inputValor === "") {
        alert("Por favor, ingresa una palabra antes de intentar.");
        return; 
    }else if(inputValor.length<5){
        alert("Por favor, ingresa una palabra con 5 letras.");
        return;
    }
    intentar();
});
function intentar() {
    const intento = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW  = document.createElement("div");
    ROW.className = "row";
    console.log("div", ROW);
    let intentosActual= intentos-1;
    console.log("te quedan", intentosActual, "intentos");
    
    for (pos in palabra) {
        console.log("posicion del elemento", pos);
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = intento[pos];
        if (intento[pos] === palabra[pos]) {
            console.log(intento[pos], "verde");
            SPAN.style.backgroundColor = "#50E510";
        } else if (palabra.includes(intento[pos])) {
            console.log(intento[pos], "amarillo");
            SPAN.style.backgroundColor = "#FFBD16";
        } else {
            console.log(intento[pos], "gris");
            SPAN.style.backgroundColor = "#C4D6B0";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    intentos=intentosActual;

    if(palabra === intento) {
        terminar("<h2>GANASTE!🥇</h2>");
    }
    if (intentos === 0) {
        terminar("<h2>PERDISTE!❌</h2>");
    }
}
        function leerIntento() {
        return INPUT.value.toUpperCase();
    }
    
    function terminar(mensaje) {
        let estado = document.getElementById("guesses");
        INPUT.disabled = true;
        BOTON.disabled = true;
        estado.innerHTML = mensaje;
        console.log(estado,mensaje);
    }

    function reiniciarJuego(elemento){
        window.location.reload()
    }