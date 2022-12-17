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
setItemPrice(50)

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

// 검사해야할 항목이 많아지면 switch가 좋다.
function getGift(gift: Car | Mobile) {
    console.log(gift.color) 
    if (gift.name === "Car") {
        gift.start()
    } else {
        gift.call()
    }
}



// Intersection Types

interface Car_Intersection {
    name : string
    start() : void
}

interface Toy_Intersection {
    name : string
    color : string
    price : number
}

// &로 표기 교차 타입은 여러개의 타입을 하나로 합쳐주는 역활로 필요한 모든 기능을 가진 하나의 타입이 만들어진다.
const toyCar: Toy_Intersection & Car_Intersection = {
    name : '타요버스',
    start() {},
    color : "blue",
    price : 1000,
};
