// 추상 클래스
abstract class Car {
    color : string;
    constructor(color : string) {
        this.color = color;
    }

    start() {
        console.log("1234");
    }

    abstract message():void{}
}

// const car = new Car("red"); // 추상클래스는 상속을 통해서만 사용가능
// 추상클래스 내부의 추상메소드는 상속받은 쪽에서 구체적인 구현을 무조건 해줘야한다.
// 추상 클래스는 method의 이름이나 property의 이름만 선언해주고 구체적인 구현부는 상속받은 쪽에서 해주는걸 말한다.
// 추상클래스를 상속받은 수많은 동일한 객체들이 동일한 이름이지만, 구현된 내용은 모두 다르다.
class Bmw extends Car {
    constructor(color: string) {
        super(color);
    }

    message(): void {
        console.log("추상메소드 구현!")
    }
}

const z4 = new Bmw("black");
