/* 
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada 
modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido
o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

// function findNaughtyStep(original, modified) {
//     let modifiedWords = modified.split('')
//     let originalWords = original.split('')
//     let diff = ''
//     if(original.length < modified.length || original.length == modified.length) {
//         diff = modifiedWords.filter(word => !original.includes(word))
//     } else {
//         diff = originalWords.filter(word => !modified.includes(word))
//     }
//     return diff.join('')
// }
function findNaughtyStep(original, modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i];
        }
    }
    return '';
}


original = 'abcd'
modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

original = 'stepfor'
modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

original = 'abcde'
modified = 'abcde'
findNaughtyStep(original, modified) // ''

original = 'iiiii'
modified = 'iiiii'
findNaughtyStep(original, modified) // ''

/*
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
*/