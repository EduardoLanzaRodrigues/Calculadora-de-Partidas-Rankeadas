let resultado = quantidade(19, 10)
console.log("O resultado é = " + resultado)
function quantidade(vitorias, derrotas) {
    console.log("A quantidade de vitórias é = " + vitorias)
    console.log("A quantidade de derrotas é = " + derrotas)
    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}
vitorias = 9
if (vitorias < 10) {
    console.log("Ferro")
} else if (vitorias > 11 && vitorias <= 20) {
    console.log("Bronze")
} else if (vitorias > 21 && vitorias <= 50) {
    console.log("prata")
} else if (vitorias > 51 && vitorias <= 80) {
    console.log("Ouro")
} else if (vitorias > 81 && vitorias <= 90) {
    console.log("Diamante")
} else if (vitorias > 91 && vitorias <= 100) {
    console.log("Lendário")
} else if (vitorias >= 101) {
    console.log("Imortal")
}
console.log("O Herói tem de saldo " + vitorias + " vitórias e está no nivel de " + "Ferro")