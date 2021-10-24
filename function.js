function calculateavg (price1, price2, price3) {
    const sum = price1 + price2 + price3
    console.log(`총합계는 ${sum}원 입니다.`)
    const avg = sum / 3
    return avg
}

priceA = 40000
priceB = 90000
priceC = 800000
const avg1 = calculateavg(priceA, priceB, priceC)
console.log(`평균 가격은 ${avg1}원 입니다.`)