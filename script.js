var visor = "0";

function atualizarVisor(num) { // funçao de atualização do vizor


    visor = document.getElementsByTagName("h2")[0];

    if (visor.innerText === "0") {
        if (num.value == "1" | num.value == "2" | num.value == "3" | num.value == "4" | num.value == "5" | num.value == "6" | num.value == "7" | num.value == "8" | num.value == "9" | num.value == "0") {
            visor.innerText = num.value;
        }
        else {
            visor.innerText += num.value;
        }
    }
    else {
        visor.innerText += num.value;
    }


}
function resultado() {  // função para exibir o resultado
    visor.innerText = eval(visor.innerText);

}

const apagar = { // objeto apagar
    tudo() {

        return visor.innerText = "0";
    },
    caracter() {
        let apagado = visor.innerText;
        visor.innerText = apagado.substring(0, apagado.length - 1);
    }
}
