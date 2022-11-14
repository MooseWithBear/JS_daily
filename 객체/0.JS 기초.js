
0. 
// js는 느슨한 언어에 속한다 (약한타입 언어) <-> java,c,c++ 등은 타입을 1종류만 지정한다.
// -> 데이터 종류에 관계없이 var let const등의 키워드로 변수를 선언하고 사용하기 때문

1. 
// js 자료형 
// 기본형(Primitive) <-> Object
// -> 기본형에는 string, number, boolean, null, undefined. 이외는 모두 '객체'
//^ 자료형 확인하는 내장함수 : typeof();

2. 
// 형 변환하기

//& toString() method..
// 참고 링크 
//https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-object-object-%EA%B0%80-%EB%8C%80%EC%B2%B4-%EB%AD%98%EA%B9%8C-fe55b754e709
//https://www.nextree.co.kr/p7323/
//string representation of an object 즉 객체의 문자열 표현
//overridable
//useful for logging, auditing or scripting-work
console.log({}.toString()) // [object Object]
console.log(Object.prototype.toString.call(([]))); //[object Array]

var a = String(10);
console.log('a: ', typeof(a));
var b = 10;
b.toString();
console.log('b: ', b);
console.log('b: ', typeof(b));
