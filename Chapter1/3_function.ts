// 함수의 타입 명시
// function sendGreeting(message, userName) {
//   console.log(`${message}, ${userName}`);
// }

// sendGreeting("Hello", "Mark");

// 함수의 반환 타입 명시
// function 함수_반환_타입(message, userName) : void {
//     console.log(`${message}, ${userName}`);
// }

// 함수의 매개변수 타입을 명시
function 함수의_매개변수_타입(message:string, userName:string) : void {
    console.log(`${message}, ${userName}`);
}

// 함수의 매개변수에 argument(인자)를 전달할 때 비우고 전달 싶을때
function 함수의_매개변수_인자를비우고전달(message:string, userName?:string) : void {
    console.log(`${message}, ${userName}`);
}

// 함수의 전달된 인자값이 아무것도 전달되지 않을때 undefined 대신 대체해줄 기본값이 있다면 어떻게 하면 될까?
function 함수의기본값(message = '안녕?', userName = '나야!') : void {
	console.log(`${message}, ${userName}`)
}


// Arrow Functions (화살표 함수)
const 에로우함수 = (매개변수1 = '안녕?', 매개변수2 = '나야!') : void => {
	console.log(`${매개변수1}, ${매개변수2}`)
}
에로우함수('안뇽?')