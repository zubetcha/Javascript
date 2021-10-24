const productPrice = [ 900, 1500, 3600, 49900, 14900, 90000, 65000, 149000, 34900, 120000]

// let totalPrice = 0;

// for (let i = 0; i < productPrice.length; i++) {
//     totalPrice += productPrice[i];
//     avgPrice = totalPrice / productPrice.length}

// console.log(`총 합계는 ${totalPrice}이며, 평균 가격은 ${avgPrice}입니다.`)

let sum = 0

for (const totalPrice of productPrice) {
    sum += totalPrice;
}

const avg = sum / productPrice.length

console.log(`총 합계: ${sum}, 평균: ${avg}`)