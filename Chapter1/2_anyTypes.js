"use strict";
// Any Type
let anyValue = 7;
anyValue = '문자열';
anyValue = 'true';
// Union Type
let unionValue;
unionValue = 7;
unionValue = '문자열';
let typeAliases;
typeAliases = 1;
typeAliases = 'number';
// Type Guard - typeof Operator
let typeGuard;
const setItemPrice = (price) => {
    if (typeof price === 'string') {
        typeGuard = 0;
    }
    else {
        typeGuard = price;
    }
};
setItemPrice(50);
// 검사해야할 항목이 많아지면 switch가 좋다.
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "Car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
// &로 표기 교차 타입은 여러개의 타입을 하나로 합쳐주는 역활로 필요한 모든 기능을 가진 하나의 타입이 만들어진다.
const toyCar = {
    name: '타요버스',
    start() { },
    color: "blue",
    price: 1000,
};
