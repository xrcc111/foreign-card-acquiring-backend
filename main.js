// const a = 4
// const b = 20

// let min = a > b ? b : a
// 最大公倍数
// for (let c = min; c >= 1; c--) {
//   if (a % c === 0 && b % c === 0) {
//     return c
//   }
// }

// let max = a >= b ? a : b
// // 最小公约数
// for (let m = max; m <= a * b; m++) {
//   if (m % a === 0 && m % b === 0) {
//     console.log(m)
//     break
//   }
// }

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
  console.log('\n')
}


