var i = 0;

//! 함수는 아래와 같이 사용 가능
// function() {}
// 또는
// () => {}
//! 함수의 선언 ()  {함수의 실행 내용}
function a () {console.log('a안녕')} 
const b = function() {console.log('b안녕')}
const c = () => {console.log('c안녕')}
//! 함수의 호출(실행)
a(); // 함수 선언문 (function declaration statement)
b(); // 함수 표현식(function expression)
c(); // 화살표 함수
//! 반복문을 통해 코드의 수를 줄일 수 있다.
for (i=0; i<0; i++) {
    a();
}

function a1() {return 10; }
a1(); //콘솔창에서는 10이 반환된다.