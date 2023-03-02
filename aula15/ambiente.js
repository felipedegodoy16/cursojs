let num = [5, 9, 2, 3]
num.sort()
console.log(num) 
/*for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}*/
// console.log(`Nosso vetor tem ${num} posições`)

for (let c in num) {
    console.log(num[c])
}

let pos = num.indexOf(7)
console.log(pos)