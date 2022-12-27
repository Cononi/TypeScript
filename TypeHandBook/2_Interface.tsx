/* TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다.
이것을 가리켜 "duck typing" 혹은 "구조적 서브타이핑(structural subtyping)"
이라고 한다.
인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만 아니라
 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법이다.
*/


/* ------------------------------------------------------------
 
        첫 번째 인터페이스 ( Our First Interface)

 --------------------------------------------------------------*/
 function printLabel(labeledObj: { label: string}) {
    console.log(labeledObj.label)
 }

 let myObj = {size : 10, label: 'Szie 10 Object'}
 printLabel(myObj)