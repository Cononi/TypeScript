interface info {
    height : number
    name : string
    job : string
}

// private의 또다른 사용법 #
class Human {
    protected static isTT:string = '1' // Class명으로 가져옴
    constructor(
        protected age:number,
        protected sex:string,
    ){}
}

class Man extends Human {
    constructor(age:number,sex:string,private info:info) {
        super(age,sex) // super 키워드는 부모 오브젝트의 함수를 호출할 때 사용됩니다.
    }
    showName() {
        console.log(Human.isTT,this.age,this.sex, this.info)
    }
}

let infoItem:info = {
    height: 100,
    job : '프로그래머',
    name : '코노니'
}

let man = new Man(29,'남',infoItem)

man.showName()

