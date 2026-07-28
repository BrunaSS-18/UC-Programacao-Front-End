let min = 23;
let max = 57;
let valorInserido; // undefined
let numeroConvertido; // undefined

valorInserido = prompt("Insira um número"); // 10 -> "10"

numeroConvertido = Number(valorInserido); // Dois -> NaN, NaN é do tipo Number

if (Number.isNaN(numeroConvertido)) {
	alert("O valor inserido não pode ser convertido em número");
	alert(typeof numeroConvertido);
} else {
	alert("O valor inserido foi convertido com sucesso!");
	alert(typeof numeroConvertido);

	if (numeroConvertido > min && numeroConvertido < max) {
		alert(`O número inserido está entre ${min} e ${max}.`);
	} else {
		alert("O número não está entre " + min + " e " + max + ".");
	}
}




