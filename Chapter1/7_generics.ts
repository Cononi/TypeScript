// 제네릭을 사용하기 전 코드
function getSize(arr: number[] | string[] | boolean[]): number {
	return arr.length
}

const arr1 = [1,2,3]
getSize(arr1)

const arr2 = ["a","b","c"]
getSize(arr2)

const arr3 = [false,true,true]
getSize(arr3)



// 제네릭을 사용한 코드
function getSizeGenerics<T>(arr: T[]): number {
	return arr.length
}

const arrG1 = [1,2,3]
getSizeGenerics<number>(arr1)

const arrG2 = ["a","b","c"]
getSizeGenerics<string>(arr2)

const arrG3 = [false,true,true]
getSizeGenerics<boolean>(arr3)


// Interface에 Generics
interface MobileItem<T> {
	name: string
	price: number
	option: T
}

const m1:MobileItem<object> ={
	name: "s21",
	price: 1000,
	option: {
		color: "red",
		coupon: false,
	}
}

const m1:MobileItem<{color: string; coupon:boolean}> ={
	name: "s21",
	price: 1000,
	option: {
		color: "red",
		coupon: false,
	}
}

const m2:MobileItem<string> ={
	name: "s20",
	price: 900,
	option:"good"
}


// 객체
// 
interface User {
    name : string;
    age : number;
}

interface MyCar {
    name : string;
    color : string;
}

interface Book {
    price : number;
}

const myUser:User = { name : "a", age:"10"}
const myCar:MyCar = { name : "a", color:"red"}
const book: Book = { price : 3000}

// 매개변수를 받아서 name의 property를 리턴한다.
function showName(data): string {
    return data.name
}

showName(myUser)
showName(myCar)
showName(book)
