function decimalConverter(conv, numero){
    numero = parseFloat(numero)

    let inputDecimal = document.getElementById("inputDecimal")
    let inputBinario = document.getElementById("inputBinario")

    if(conv == "inputDecimal"){
        let binario = numero.toString(2)
        inputBinario.value = (binario)
    }
    if(conv == "inputBinario"){
    	lastDigit = numero % 10
        
        if(lastDigit == 1 || lastDigit == 0){
        	let decimal = parseInt(numero, 2)
        	inputDecimal.value = (decimal)
        }
        else{
            inputDecimal.value = NaN
        }  
    }
}