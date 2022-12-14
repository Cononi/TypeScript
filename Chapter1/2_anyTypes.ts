// Any Type
let anyValue: any = 7
anyValue = '문자열'
anyValue = 'true'

// Union Type
let unionValue: string | number
unionValue = 7
unionValue = '문자열'

// Type Aliases
type StringOrNum = number | string
let typeAliases: StringOrNum
typeAliases = 1
typeAliases = 'number'

// Type Guard - typeof Operator
let typeGuard: StringOrNum
const setItemPrice = (price: StringOrNum): void => {
    if (typeof price === 'string') {
        typeGuard = 0
    } else {
        typeGuard = price
    }
}

// 심화 유니온
interface Car {
    name: 'Car'
    color: string;
    start(): void
}

interface Mobile {
    name: 'Mobile'
    color: string;
    call(): void
}

function getGift(gift: Car | Mobile) {
    console.log(gift.color)
    
    if (gift.name === "Car") {
        gift.start()
    } else {
        gift.call()
    }
}

setItemPrice(50)
