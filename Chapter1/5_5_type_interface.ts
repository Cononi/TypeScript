type Score = 'A' | 'B' | 'C'

interface Students {
    name : string
    age : number
    [score:number] : Score // number type이 여러개 들어올 수 있다.
}

let user: Students = {
    age : 19,
    name : 'John',
    1 : 'A',
    2 : 'B',
    3 : 'C'
}

console.log(user)

// 인터페이스안에 함수정의
// interface 인터페이스명 {
//     (매개변수명:매개타입):반환타입;
// }

interface Add {
    (num1 : number, num2 : number) : number
}
const add: Add = (x,y) => {
    return x + y
}

console.log(add(1,2))

interface IsAdult {
    (age:number):boolean;
}

const a:IsAdult = function(age) {
    return age > 19
}

console.log(20)


// 클래스로 활용하기

interface Pants {
    name : string;
    color : string;
    start():void
}

class UserPants implements Pants {
    color: string
    name: string
    type : string

    constructor(color: string, name: string, type:string) {
        this.color = color
        this.name = name
        this.type = type
    }

    start(): void {
        console.log(`${this.color} ${this.name} ${this.type}`)
    }
}

const userPants = new UserPants('노랑색','청바지','스키니진')
userPants.start()