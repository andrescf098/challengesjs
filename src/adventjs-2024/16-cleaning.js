/*
Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. 
Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. 
El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:
*/

// function removeSnow(s) {
//   let result = s;

//   function loop(snow) {
//     for (let i = 0; i < snow.length - 1; i++) {
//       if (snow[i] == snow[i + 1]) {
//         result = snow.slice(0, i) + snow.slice(i + 2);
//         loop(result);
//       }
//     }
//   }
//   loop(result);

//   return result;
// }

function removeSnow(s) {
  let result = s;
  let i = 0;

  while (i < result.length - 1) {
    if (result[i] === result[i + 1]) {
      result = result.slice(0, i) + result.slice(i + 2);
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }

  return result;
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow("zzz"); // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow("a"); // -> "a"
// No hay montículos repetidos
