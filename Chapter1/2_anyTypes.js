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
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "Car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
setItemPrice(50);
