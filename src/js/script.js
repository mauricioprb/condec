function converterDec(numero){
    let decimal = parseInt(numero)
    let binario = decimal.toString(2)
    document.getElementById("resultado").innerHTML = binario
}