/* 
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. 
Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), 
y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
*/

// function moveTrain(board, mov) {
//   for (let i = 0; i < board.length; i++) {
//     let index = board[i].indexOf("@");
//     if (index !== -1) {
//       switch (mov) {
//         case "U":
//           if (!i == 0) {
//             if (board[i - 1][index] === "*" || board[i - 1][index] === "o") {
//               return board[i - 1][index] === "*" ? "eat" : "crash";
//             } else {
//               return "none";
//             }
//           } else {
//             return "crash";
//           }
//         case "D":
//           if (i < board.length - 1) {
//             if (board[i + 1][index] === "*" || board[i + 1][index] === "o") {
//               return board[i + 1][index] === "*" ? "eat" : "crash";
//             } else {
//               return "none";
//             }
//           } else {
//             return "crash";
//           }
//         case "R":
//           if (index < board[i].length - 1) {
//             if (board[i][index + 1] === "*" || board[i][index + 1] === "o") {
//               return board[i][index + 1] === "*" ? "eat" : "crash";
//             } else {
//               return "none";
//             }
//           } else {
//             return "crash";
//           }
//         case "L":
//           if (index > 0) {
//             if (board[i][index - 1] === "*" || board[i][index - 1] === "o") {
//               return board[i][index - 1] === "*" ? "eat" : "crash";
//             } else {
//               return "none";
//             }
//           } else {
//             return "crash";
//           }
//         default:
//           return "none";
//       }
//     }
//   }
// }

function moveTrain(board, mov) {
  for (let i = 0; i < board.length; i++) {
    const directions = {
      U: [-1, 0],
      D: [1, 0],
      R: [0, 1],
      L: [0, -1],
    };
    let index = board[i].indexOf("@");
    if (index !== -1) {
      const [dx, dy] = directions[mov];
      const newRow = i + dx;
      const newCol = index + dy;
      if (
        newRow < 0 ||
        newRow >= board.length ||
        newCol < 0 ||
        newCol >= board[i].length
      ) {
        return "crash";
      }

      const targetCell = board[newRow][newCol];
      if (targetCell !== "·") {
        return targetCell === "*" ? "eat" : "crash";
      }

      return "none";
    }
  }
  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
