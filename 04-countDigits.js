/**
 * Encontra a quantidade de dígitos de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual contar os dígitos.
 * @returns {number} A quantidade de dígitos encontrados no número.
 */

const countDigits = (num) => {
    if (num < 10) return 1 // Caso base: quando o número tem apenas um dígito

    // Soma 1 ao resultado da contagem dos dígitos restantes
    return 1 + countDigits(Math.floor(num / 10))
}

// Exemplos de uso:
console.log(countDigits(158)) // Deve retorrnar 3
console.log(countDigits(809012)) // Deve retorrnar 6
console.log(countDigits(6491438530)) // Deve retorrnar 10
