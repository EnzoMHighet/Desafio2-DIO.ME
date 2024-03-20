const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivelRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
  rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
    let resultado = calcularNivelRankeadas(parseInt(vitorias), parseInt(derrotas));
    console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    
    rl.close();
  });
});