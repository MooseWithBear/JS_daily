var i = 0;

//^ 함수는 아래와 같이 사용 가능
// function() {}
// 또는
// () => {}
//^ 함수의 선언 ()  {함수의 실행 내용}
function a () {console.log('a안녕')} 
const b = function() {console.log('b안녕')}
const c = () => {console.log('c안녕')}
const c1 = (x,y,z) => x*y*z // 중괄호, return값을 생략 가능하다.

//^ 함수의 호출(실행)
a(); // 함수 선언문 (function declaration statement)
b(); // 함수 표현식(function expression)
c(); // 화살표 함수
//^ 반복문을 통해 코드의 수를 줄일 수 있다.
for (i=0; i<0; i++) {
    a();
}
//^ return의 기능1 -> 값을 반환한다.
function a1() {return 10; }
a1(); //콘솔창에서는 10이 반환된다.
var B = a1();
console.log('B: ', B); // 이 또한 10이 반환된다
//^ return의 기능2 -> 함수의 실행을 중간에 멈춘다.
function a2() {
    console.log('Hello');
    console.log('여기까지만 호출');
    return
    console.log('나 부터는 실행안됨'); // 흐리게도 변하네 ㄷㄷ
}
a2(); // 반환 값은 return 이전의 명령들이다.
//^ return 심화
function a3() {
    if(false){
        return;
    }
    console.log('if문이 false이므로 return은 실행되지 않는다');
}
//^ 매개변수(parameter) 인수(argument)의 사용 
//! 단, 화살표함수에는 매개변수를 사용할 수 없다
function a4(parameter매개변수) {  //함수를 정의한 것이지 호출한 것이 아님
    console.log(parameter매개변수); 
}
a4('argument인수');      //여기가 실제 함수 실행(호출)
a4('호출');           //여기가 실제 함수 실행(호출)
//함수가 호출되면 입력된 인수와 함꼐 정의된 함수로 찾아간 후 매개변수로 실행됨.
//^ 매개변수와 인수는 여러개를 각각 가질 수 있다.
//& 인수보다 매개변수가 많은 경우 ex)
function a5(w,x,y,z) {
    console.log('w,x,y,z: ', w,x,y,z);
    console.log('arguments: ', arguments);
}
a5('Hello', 'Parameter', 'Argument');
//& 매개변수보다 인수가 많은 경우 ex)
function a6(w2,x2) {
    console.log('w2,x2: ', w2,x2);
    console.log('arguments: ', arguments);
}
a6('mello','parameter', 'Arguments', 'mmmmm')
//^ 매개변수와 인수 심화
function add(x3,y3) {
    return x3+y3;
}
console.log(add(10,12));
console.log(add(3,5));

// 10 매개변수로 x, y, z을 받아 곱한 값을 반환하는 multiply 함수를 만들어 보세요. 단, 화살표 함수로 만드세요.
const a7 = (x5,y5,z5) => {
   return x5*y5*z5;
}
var result = a7(2,3,4)
console.log('result: ', result);
