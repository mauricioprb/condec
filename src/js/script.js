let btn = document.querySelector("resultado");
btn.addEventListener("click", function(e) {
    e.preventDefault();

    const resultado = document.querySelector("converterDec");

    const binario = resultado.binario
})

function binarioParaDecimal(binario) {
    let resultado = 0;
    for (let i = 0; i < binario.length; i++)
        resultado += Math.pow(2, i) * binario[binario.length - i - 1]
    console.log(`${binario}`)
}