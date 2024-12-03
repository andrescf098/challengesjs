/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, 
dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

// function manufacture(gifts, materials) {
//     const response = []
//     let words = materials.split('');
//     for (const gift of gifts) {
//         let i = 0;
//         for (const letter of gift) {
//             if (words.includes(letter)) {
//                 i++;
//             } 
//             if (i === gift.length) {
//                 response.push(gift)
//             }
//         }
//     }
//     return response
// }
function manufacture(gifts, materials) {
    const words = materials.split('');
    return console.log(
        gifts.filter(gift => {
            wordsGift = gift.split('')
            return wordsGift.every(letter => words.includes(letter))
        })
    )
}


gifts = ['tren', 'oso', 'pelota']
materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []