"use strict";
function 타입추론() {
    let x = 10;
    // 타입스크립트에서 할당할 수 없게 된다.
    // x = '안녕?' 
    x = 5;
}
function 타입명시(a) {
    let x = '안녕?';
    return x + a;
}
타입명시('..미안...');
// 아이디로 유저 찾기 findById(id: number)
function 인터페이스_기본_객체_구조_사용법_정의(id) {
    return {
        id: 1,
        name: '안녕',
        age: 15,
        gender: GenderType_Numeric.Female,
        isChecked: true
    };
}
function 매개변수로_받는_인터페이스(center) {
    console.log(center);
}
매개변수로_받는_인터페이스(인터페이스_기본_객체_구조_사용법_정의(1));
/* -----------------------------------------------------------------------

    열거형과 리터럴타입

----------------------------------------------------------------------- */
// 숫자 열거형
var GenderType_Numeric;
(function (GenderType_Numeric) {
    GenderType_Numeric[GenderType_Numeric["Male"] = 0] = "Male";
    GenderType_Numeric[GenderType_Numeric["Female"] = 1] = "Female";
    GenderType_Numeric[GenderType_Numeric["genderNeutral"] = 2] = "genderNeutral";
})(GenderType_Numeric || (GenderType_Numeric = {}));
// 문자열 열거형 - 코드를 실행할 때 좀더 읽기 편한 방식으로 된다는 장점
var GenderType_String;
(function (GenderType_String) {
    GenderType_String["Male"] = "male";
    GenderType_String["Female"] = "female";
    GenderType_String["genderNeutral"] = "genderNeutral";
})(GenderType_String || (GenderType_String = {}));
function 리터럴타입() {
    return {
        id: 1,
        name: '안녕',
        age: 15,
        gender: "female",
        isChecked: true
    };
}
