function decimalConverter(conv,numero) {
    numero = parseFloat(numero);
    let inputDecimal = document.getElementById("inputDecimal");
    let inputBinario = document.getElementById("inputBinario");
    if (conv=="inputDecimal") {
        let binario = numero.toString(2);
        inputBinario.value=(binario);
    }
    if (conv=="inputBinario") {
        let decimal = parseInt(numero, 2);
        inputDecimal.value=(decimal);
    }
}