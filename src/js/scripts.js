function decimalConverter(valNum) {
    let num = numero
    let decimal = parseInt(numero)
    let binario = (num % 2).toString()
    for (; num > 1;) {
        num = parseInt(num / 2);
       }
    document.getElementById("outputBinario").innerHTML=valNum;
}
/*function converterDec(numero) {
    let decimal = parseInt(document.getElementById('decimal').value)
    let binario = decimal.toString(2)
    document.getElementById('binario').innerHTML = binario;
}*/