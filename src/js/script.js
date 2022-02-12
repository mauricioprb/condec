function binarioParaDecimal(binario) {
    let decimal = 0;
    for (let c = 0; c < binario.length; c++)
        decimal += Math.pow(2, c) * binario[binario.length - c - 1]
    return `${decimal}`
}
console.log(binarioParaDecimal('11111100100'))