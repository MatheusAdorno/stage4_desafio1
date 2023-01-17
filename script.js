alert("Vamos calcular o resultado de algumas contas com dois números!");

number1 = prompt("Digite o primeiro número:");
number2 = prompt("Digite o segundo número:");

number1 = Number(number1);
number2 = Number(number2);

alert("A soma dos dois números é " + (number1 + number2));
alert("A subtração dos dois números é " + (number1 - number2));
alert("A multiplicação dos dois números é " + (number1 * number2));
alert("A divisão dos dois números é " + (number1 / number2));
alert("O resto da divisão dos dois números é " + (number1 % number2));

if ((number1 + number2) % 2 == 0) {
  alert("A soma dos dois números é par!");
} else {
  alert("A soma dos dois números é ímpar!");
}

if (number1 == number2) {
  alert("Os dois números são iguais!");
} else {
  alert("Os dois números são diferentes!");
}

