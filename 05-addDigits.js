/**
 * Encontra a soma dos dígitos de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual somar os dígitos.
 * @returns {number} A soma dos dígitos encontrados no número.
 */

const addDigits = (num) => {
    if (num < 10) return num // Caso base: quando o número tem apenas um dígito

    // Soma o último dígito do número ao resto dos dígitos restantes
    return (num % 10) + addDigits(Math.floor(num / 10))
}

// Exemplos de uso:
console.log(addDigits(158)) // Deve retorrnar 14
console.log(addDigits(809012)) // Deve retorrnar 20
console.log(addDigits(6491438530)) // Deve retorrnar 43
