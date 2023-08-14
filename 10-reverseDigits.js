/**
 * Inverte os dígitos de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual inverter os dígitos.
 * @param {number} inverso - O valor acumulado do número invertido.
 * @returns {number} O número resultante após inverter os dígitos.
 */

const reverseDigits = (num, inverso=0) => {
    if (num < 10) return num + inverso * 10

    return reverseDigits(Math.floor(num / 10), num % 10 + inverso * 10)
}

// Exemplos de uso:
console.log(reverseDigits(158)) // Deve retornar 851
console.log(reverseDigits(809012)) // Deve retornar 210908
console.log(reverseDigits(6491438530)) // Deve retornar 358341946
