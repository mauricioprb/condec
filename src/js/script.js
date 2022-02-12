function binarioParaDecimal(binario) {
    let binario = document.getElementById("binario").value;
    let decimal = 0;
    for (let i = 0; i < binario.length; i++)
        decimal += Math.pow(2, i) * binario[binario.length - i - 1]
    return `${decimal}`
}