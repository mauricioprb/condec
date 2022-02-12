function converterDecimal(numero) {
    let decimal = parseInt(numero)
    let binario = (num % 2).toString()
    for (; num > 1;) {
        num = parseInt(num / 2);
        binario = (num % 2) + (binario);
    }
    document.getElementById("resultado").innerText = numero;
}