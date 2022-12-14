"use strict";
let user = {
    age: 19,
    name: 'John',
    1: 'A',
    2: 'B',
    3: 'C'
};
console.log(user);
const add = (x, y) => {
    return x + y;
};
console.log(add(1, 2));
const a = function (age) {
    return age > 19;
};
console.log(20);
class UserPants {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }
    start() {
        console.log(`${this.color} ${this.name} ${this.type}`);
    }
}
const userPants = new UserPants('노랑색', '청바지', '스키니진');
userPants.start();
