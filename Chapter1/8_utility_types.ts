/* -----------------------------------------------------------------------------------------

                        Keyof 사용법
                        이미 존재하는 오브젝트를 사용한 타입 지정
           
----------------------------------------------------------------------------------------- */

interface User {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}
type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender' 를 가진 타입으로 바뀜
const uk: UserKey = 'age' // 위에서 선언하여 초기화한 키값을 가지고 있다.

/* -----------------------------------------------------------------------------------------

                        Partial
                        Partial은 property를 optional로 바꿔주기 때문에 일부만 사용가능 하다.
                        Partial로 선언하지 않으면 age, gender가 없다고 Type 에러가 난다.

                        Partial를 사용하면 눈에 보이지는 않지만 실제로 내부에서 구현된 상태
                        interface {
                            id?: number;
                            name?: string;
                            age?: number;
                            gender?: "m" | "f"
                        }
----------------------------------------------------------------------------------------- */

interface User_partial {
    id: number;
    name: string;
    age?: number;
}

// 에러
// let admin: User = {
//     id: 1,
//     name: 'Administrator'
// }

// Partail로 선언
let admin2: Partial<User_partial> = {
}

/* -----------------------------------------------------------------------------------------

                        Required <T>
                        - 모든 Property를 필수로 바꿔준다.
           
----------------------------------------------------------------------------------------- */

// Required < T >
//- 모든 Property를 필수로 바꿔준다.
interface User_required {
    id: number;
    name: string;
    age?: number;
}

let admin_required: Required<User_required> = {
    id: 1,
    name: "Bob",
    age: 30
}


/* -----------------------------------------------------------------------------------------

                        Readonly <T>
                        모든 Property를 읽기 전용으로 바꿔준다.
                        초기 할당만 가능하고 후에 수정이 불가
           
----------------------------------------------------------------------------------------- */
interface User_readonly {
    id: number;
    name: string;
    age?: number;
}

let admin: Readonly<User_readonly> = {
    id: 1,
    name: "Bob",
    age: 30
}


/* -----------------------------------------------------------------------------------------

                        Record <K,T>
                        K는 key, T는 type 으로 사용된다.dictionary 랑 비슷
           
----------------------------------------------------------------------------------------- */

// 예제1
type Grade = "1" | "2" | "3" | "4"
type Score_reocde = "A" | "B" | "C" | "D"

const score: Record<Grade, Score_reocde> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}



// 예제2
interface User_record {
    id: number;
    name: string;
    age: number;
}

// keyof를 통해 key값만 할당하고 boolean으로 type값을 받아 결과값을 리턴받는다.
// 결과적으로 조건에 해당 내용이 검사되어 나오면서 정확한 결과값이 생성됨.
function isValid(user: User_record) {
    const result: Record<keyof User_record, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age : user.age > 0
    }

    return result
}


/* -----------------------------------------------------------------------------------------

                        Record Pick <T,K>
                        - T타입에서 K Property만 골라서 사용한다.
                        - 해당 타입에서 해당하는 키값만 가져온다고 보면 된다.
           
----------------------------------------------------------------------------------------- */

interface User {
    id: number;
    name: string;
    age: number;
}

// 타입으로 대체가능
const admin: Pick<User, "id" | "name"> = {
    id: 0,
    name: "Bob",
}


/* -----------------------------------------------------------------------------------------

                        Omit <T,K>
                        -특정 property를 생략하고 쓸수 있다.
           
----------------------------------------------------------------------------------------- */
interface User_omit {
    id: number;
    name: string;
    age: number;
}

// K영역 타입으로 대체가능
const admin_omit: Omit<User_omit, "age"> = {
    id: 0,
    name: "Bob",
}


/* -----------------------------------------------------------------------------------------

                        Exclude <T1,T2>
                        -T1 타입중 T2에 해당하는 타입들을 제외하고 사용한다.
           
----------------------------------------------------------------------------------------- */
// number, string이 제외되고 boolean만 남음
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>


/* -----------------------------------------------------------------------------------------

                        NonNullable < Type >
                        -Null, Undefined를 함께 제외시키고 생성한다.
           
----------------------------------------------------------------------------------------- */
// Null과 Undefined가 들어있는 타입들을 제외할수 있다.
type T1_Non = string | null | undefined | void
type T2_Non = NonNullable<T1_Non>