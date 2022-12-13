function 타입추론() {
    let x = 10

    // 타입스크립트에서 할당할 수 없게 된다.
    // x = '안녕?' 
    x = 5
}

function 타입명시(a: string): string {
    let x: string = '안녕?'
    return x + a
}
타입명시('..미안...')


/*
 Interface 컨벤션
 대문자로 시작
 다른 언어에서는 이름 앞에 I를 붙혀서 만드는 방식을 권장함

*/
interface Center {
    id?: number
    name?: string
    age?: number
    gender: GenderType_Numeric
    isChecked?: boolean
}

// 아이디로 유저 찾기 findById(id: number)
function 인터페이스_기본_객체_구조_사용법_정의(id: number): Center {
    return {
        id: 1,
        name: '안녕',
        age: 15,
        gender: GenderType_Numeric.Female,
        isChecked: true
    }
}

function 매개변수로_받는_인터페이스(center: Center): void {
    console.log(center)
}

매개변수로_받는_인터페이스(인터페이스_기본_객체_구조_사용법_정의(1))



/* -----------------------------------------------------------------------

    열거형과 리터럴타입

----------------------------------------------------------------------- */

// 숫자 열거형
enum GenderType_Numeric {
    Male,
    Female,
    genderNeutral
}

// 문자열 열거형 - 코드를 실행할 때 좀더 읽기 편한 방식으로 된다는 장점
enum GenderType_String {
    Male = 'male',
    Female = 'female',
    genderNeutral = 'genderNeutral'
}

// 리터럴 타입 형태의 정의 
interface Center_literal {
    id?: number
    name?: string
    age?: number
    gender: 'male' | 'female' | 'genderNeural'
    isChecked?: boolean
}

function 리터럴타입 ():Center_literal {
    return {
        id: 1,
        name: '안녕',
        age: 15,
        gender: "female",
        isChecked: true
    }
}