/* TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다.
이것을 가리켜 "duck typing" 혹은 "구조적 서브타이핑(structural subtyping)"
이라고 한다.
인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만 아니라
 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법이다.
*/


/* ------------------------------------------------------------
 
        첫 번째 인터페이스 ( Our First Interface)

 --------------------------------------------------------------*/
/*함수는 특정 Type의 x을 갖은 하나의 매개변수로 가지게 된다.
객체가 실제로는 더 많은 프로퍼티를 갖고 있지맡 최소한 필요한
프로퍼티가 있는지와 타입이 잘 맞는지만 검사한다.
*/
function printLabel_1(labeledObj: { label: string }) {
    console.log(labeledObj.label)
}

let myObj = { size: 10, label: 'Szie 10 Object' }
printLabel_1(myObj)


// 인터페이스 선언 작성
interface LabeledValue {
    label: string
}

function printLabel_2(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj2 = { size: 10, label: "Size 10 Object" }
printLabel_2(myObj)

/*
인터페이스는 이전 예제의 요구사항을 똑같이 기술하는 이름으로 사용할 수 있다.
해당 함수에 전달한 객체가 이 인터페이스를 구현해야 한다고 명시적으로 표기할 필요는 없다
여기서 중요한 것은 형태뿐이다. 함수에 전달된 객체가 나열된 요구 조건을 충족하면
허용한다.
타입 검사는 프로퍼티들의 순서를 요하지는 않습니다. 단지 인터페이스가 요규
하는 프로퍼티들이 존재하는지와 프로퍼티들이 요구하는 타입을 가졌는지
확인한다.
*/

/* ------------------------------------------------------------
 
        선택적 프로퍼티 ( Optional Properties )

 --------------------------------------------------------------*/
/*
인터페이스의 모든 프로퍼티가 필요한 것은 아니다.
어떤 조건에서만 존재하거나 없을 수도 있다.
선택적 프로퍼티는 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는
"option bags" 같은 패턴을 만들 때 유용하다
*/

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: "black" })
/*
선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고,
선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ? 를 붙혀서 표시한다.
선택적 프로퍼티의 이점은 인터페이스에 속하지 않는 프로퍼티의
사용을 방지하면서, 사용 가능한 속성을 기술하는 것입니다.
*/


/* ------------------------------------------------------------
 
        읽기전용 프로퍼티 ( Readonly properties )

 --------------------------------------------------------------*/
/*
일부 프로퍼티들을 객체가 처음 생성될 때만 수정 가능하도록 처리할때
프로퍼티 이름 앞에 readonly를 넣어서 읽기전용으로 지정할 수 있다.
*/
interface Point {
    readonly x: number;
    readonly y: number;
}

// 객체 리터럴을 할당하여 Point를 생성한다. 할당 후에는 x,y를 수정할 수 없다.
let p1: Point = { x: 10, y: 20 };
// Error Code - 읽기 전용
// p1.x = 10;

/*
TypeScript에서는 모든 변경 메서드(Mutating Methods)가 제거된 Array<T>와 동일한 ReadonlyArray<T> 타입을 제공한다.
그래서 생성 후에 배열을 변경하지 않음을 보장할 수 있다.
*/
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// 에러
// ro[0] = 12
// ro.push(5) // readonly여서 push 메소드가가 없다.
// ro.length = 100
// a = ro // ReadonlyArray를 일반 배열에 재할당이 불가능하다. 타입 단언(type assertion)으로 오버라이드는 가능하다.
a = ro as number[]

/*
    readonly vs const
    readonly 와 const 중에 어떤 것을 사용할 지 기억하기 가장 쉬운 방법은 변수와 프로퍼티중 어디에 사용할지 질문해 보는 것이다.
    변수는 const를 사용하고
    프로퍼티는 readonly를 사용한다.
*/

/* ------------------------------------------------------------
 
        초과 프로퍼티 검사 ( Excess Propery Checks )

 --------------------------------------------------------------*/
/*
   인터페이스 프로퍼티가 특정 개수일때 초과된 프로퍼티를 허용해줬다.
   ex ) 
   { label : string } 이지만 { size: number label: string }을 넣어도 허용해줬다.
   선택적 프로퍼티를 배우고, "option bags"을 기술할 때, 유용하다는것을 알게 된다.

   위의 두가지 사항을 결합하면 에러가 발생합니다.
*/

interface SquareConfig2 {
    color?: string
    width?: number
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
    return {
        area: 1,
        color :' '
    }
}

/*
// let mySquare2 = createSquare2({ colour: "red", width: 100 })
creatSquare의 매개변수가 color 대신 colour로 전달된다. 이 경우 JavaScript에서는 오류지만 그대로 실행된다.
width 프로퍼티는 적합하고, color 프로퍼티는 없고, 추가 colour 프로퍼티는 중요하지 않기 때문에 이 프로그램이 올바르게 작동되었다고 생각하게 된다.

하지만 타입스크립트는 이 코드에 버그가 있다고 판단한다. 객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때, 특별한 처리르 받고
초과 프로퍼티 검사를 받습니다. 만약 객체 리터럴이 "대상 타입"이 갖고 있지 않은 프로퍼티를 갖고 있으면 에러가 발생합니다.
*/

// 에러 내용
// error: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
// let mySquare = createSquare({ colour: "red", width: 100 });

// 해당 프로퍼티 검사를 피하는 방법은 타입 단언을 선언하는 것이다.
let mySquare3 = createSquare2({ width : 100, opacity: 0.5} as SquareConfig)

/*
특별한 경우에, 추가 프로퍼티가 있음을 확신한다면, 문자열 인덱스 서명(string index signatuer)을 추가하는 것이 더 나은 방법이다.
*/
// SquareConfig color 와 width 프로퍼티를 위와 같은 타입으로 갖고 있고, 또한 다른 프로퍼티를 가질 수 있다면, 다음과 같이 정의할 수 있다.
interface SquareConfig3 {
    color?: string
    width?: number
    // SquareConfig가 여러 프로퍼티를 가질 수 있고, 그 프로퍼티들이 color, width가 아니라면 타입은 중요하지 않는다.
    [propName : string] : any // 인덱스 서명
}


// 이 검사를 피하는 방법은 객체를 다른 변수에 할당하는 것이다.
// squareOptions가 추가 프로퍼티 검사를 받지 않아서 컴파일 에러가 발생하지 않는다.
// 공동 프로퍼티가 있는 경우에만 위와 같은 방법을 쓸 수 있다.
let squareOptions3 = { colour: 'black', width: 100 };
let mySquare4 = createSquare2(squareOptions3)

// 공동 객체 프로퍼티가 없기 떄문에 에러가 남
// let squareOptions4 = { colour: "red" };
// let mySquare5 = createSquare2(squareOptions);

/*
가장 중요한건 초과한 프로퍼티 객체에 대해 검사를 피하는 방법을 시도하는 것은 좋지 않다.
메서드가 있고 상태를 가지는 등 더 복잡한 객체 리터럴에서 이 방법을 생각해 볼 수 있지만,
실제로 초과 프로퍼티에 대한 에러는 대부분 실제 버그로 직결된다.
만약 option bacs 같은 곳에서 초과 프로퍼티 검사 문제가 발생하면 타입 정의를 수정해야 할 필요가 있다.
특정한 매개체에 x와 y둘다 전달하고 필요하다면 특정한 매개변수에 해당하는 인터페이스나 객체와 타입등이 이를 반영하도록 정의를 변경하거나 추가해야 한다.
*/


/* ------------------------------------------------------------
 
        함수 타입 ( Function Types )

 --------------------------------------------------------------*/