class product {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }
    printInfo() {
        console.log(`색상: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}`)
    }
}

const jacket = new product('grey', 'L', 189000)

jacket.printInfo()