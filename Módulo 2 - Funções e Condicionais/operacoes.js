// Operações básicas
const Soma = (a, b) => a + b;
const Subtrai = (a, b) => a - b;
const Multiplica = (a, b) => a * b;
const Divide = (a, b) => a / b;

// Função de exibição
const MostraResultado = (num1, num2) => {
  console.log(`Soma entre ${num1} e ${num2}`, Soma(num1, num2));
  console.log(`Subtrai entre ${num1} e ${num2}`, Subtrai(num1, num2));
  console.log(`Multiplica entre ${num1} e ${num2}`, Multiplica(num1, num2));
  console.log(`Divide entre ${num1} e ${num2}`, Divide(num1, num2));
};

// Exemplo de uso
MostraResultado(10, 5);
