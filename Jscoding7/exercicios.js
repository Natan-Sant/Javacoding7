//------exercicíos de loop(for)------

//------exercicío1------

const alunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

//------exercicío2------

const numero = parseInt(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
//------exercicío3------

const notas = [];

for (let i = 0; i < 5; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota); 
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; 
}

const media = soma / notas.length; 

console.log(`A média das notas é: ${media}`);

//------exercicío4------


for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Lançamento!");
//------exercicío5------

for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {
        console.log(i);
    }
}

//------exercicío6------

const materiais = [
    "Caderno",
    "Caneta",
    "Lápis",
    "Borracha",
    "Régua",
    "Marcador",
    "Tesoura",
    "Cola",
    "Papel sulfite",
    "Pastas"
];

console.log("Lista de Materiais:");
for (let i = 0; i < materiais.length; i++) {
    console.log(`${i + 1}. ${materiais[i]}`);
}
//------exercicío7------

function somaNumeros(n) {
    let soma = 0; 

    for (let i = 1; i <= n; i++) {
        soma += i; 
    }

    return soma; 
}

const N = parseInt(prompt("Digite um número N:"));

if (!isNaN(N) && N > 0) {
    const resultado = somaNumeros(N);
    console.log(`A soma dos números de 1 a ${N} é: ${resultado}`);
} else {
    console.log("Por favor, insira um número válido maior que 0.");
}
//------exercicío8------

function calcularFatorial(n) {
    let fatorial = 1; 

    for (let i = 1; i <= n; i++) {
        fatorial *= i; 
    }

    return fatorial; 
}

const numero1 = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (!isNaN(numero1) && numero1 >= 0) {
    const resultado = calcularFatorial(numero1);
    console.log(`O fatorial de ${numero1} é: ${resultado}`);
} else {
    console.log("Por favor, insira um número válido maior ou igual a 0.");
}
//------exercicío9------

function contarVogais(palavra) {
    const vogais = "aeiouAEIOU"; 
    let contador = 0; 

    for (let i = 0; i < palavra.length; i++) {
        
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}

const palavra2 = prompt("Digite uma palavra:");

if (palavra2) {
    const totalVogais = contarVogais(palavra2);
    console.log(`A palavra "${palavra2}" contém ${totalVogais} vogais.`);
} else {
    console.log("Por favor, insira uma palavra válida.");
}
//------exercicío10------

function multiplicarPorDois(array) {
    let resultados = []; 

    for (let i = 0; i < array.length; i++) {
        resultados[i] = array[i] * 2; 
    }

    return resultados; 
}

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    
    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        console.log("Por favor, insira um número válido.");
        i--;
    }
}

const resultados = multiplicarPorDois(numeros);

console.log("Os resultados da multiplicação por 2 são:");
for (let i = 0; i < resultados.length; i++) {
    console.log(`${numeros[i]} * 2 = ${resultados[i]}`);
}
//------exercicío11------

function inverterString(palavra) {
    let palavraInvertida = ""; 

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]; 
    }

    return palavraInvertida; 
}

const palavra = prompt("Digite uma palavra:");

if (palavra) {
    const resultado = inverterString(palavra);
    console.log(`A palavra "${palavra}" invertida é: "${resultado}"`);
} else {
    console.log("Por favor, insira uma palavra válida.");
}
