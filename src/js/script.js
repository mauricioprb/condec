let input = document.getElementById("decimal");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();

        function converterDec(numero) {
            let decimal = parseInt(numero)
            let binario = decimal.toString(2)
            document.getElementById("resultado").innerText = binario;
        }
    }
});