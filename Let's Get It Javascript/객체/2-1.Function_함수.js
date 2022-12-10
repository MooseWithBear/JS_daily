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
//^ 함수 안에 다른 변수 사용하기 1.
function minus1(x,y) {
    var a = 100;
    return (x-y)*a;
}
console.log('minus1: ', minus1(5,3));
//^ 함수 안에 다른 변수 사용하기 2.
var aa =100;
function minus2(x,y) {
    return (x-y)*aa;
}
console.log('minus2: ', minus2(5,1));

// ** 상수(constant)?
// 상수는 변하지 않는 변수
// ** 리터럴(literal)? 
// 리터럴은 변수의 값이 변하지 않는 고정데이터
// ** 속성(property)?
// 객체 내부에 사용되는 정보들을 속성이라 한다. (속성이름: 속성값)
// ** 객체 리터럴(object literal)?
// {}를 이용해 객체를 표현하는 것 (객체를 표현하는 방식 중 1가지)

//^ 객체 리터럴 
//형식
// const 객체  = {
//     속성이름1: 속성값1,
//     속성이름2: 속성값2,
//     속성이름3: 속성값3, //마지막에 쉼표를 사용해도 되며 속성을 추가되는 상황을 생각하면 넣는게 좋은 것 같다
// }
//잘못된 변수 저장의 예시
const name = '보리';
const year = 2005;
const month = 8;
const date = 10;
const gender = 'M';
//!위와 같이 따로따로 정보를 저장했을 때는 다른 사람의 정보를 추가로 표현할 때 변수를 사용할 수 없어진다.
//! 때문에 객체를 사용한다면 여러 개의 변수를 하나로 묶을 수 있다.
//객체 리터럴의 예시
const bori = {
    name : '보리',
    year : '2005',
    month : 8,
    date : 12,
    gender:'F',
};
//^ 속성값에 접근하는 방법
//.(점)으로 접근하거나, 배열처럼 변수[속성]으로 접근 할 수 있다.
//대표적으로 속성 이름에 띄어쓰기나 온점이 들어 있을 때 []을 사용하면 된다. //변수['속성.이름']
console.log('bori: ', bori.name);
console.log('bori: ', bori['name']);
console.log('bori: ', bori.date);
console.log('bori: ', bori['gender']);
console.log('bori: ', bori['weight']);  //undefined
//^ 객체 속성 수정하기
//변수.속성 = 값;
bori.gender = 'M';
console.log('bori.gender: ', bori.gender);
//^ 객체 속성 제거하기
//delete 변수.속성;
delete bori.gender;
console.log('bori.gender: ', bori.gender);


//** 배열과 함수가 객체인 이유 */
//배열과 함수는 객체의 성질을 모두 다 사용할 수 있기 때문이다.
//배열과 함수에도 속성들을 추가하거나 수정 및 제거할 수도 있다.
//객체는 함수와 배열을 포함하는 개념이기 때문에 {}를 사용해 만든 객체를 리터럴이라고 따로 부르는 것.
function hello99() {
    hello99.a = 'really?';
    var array = [];
    array.b = 'wow';
    console.log(hello99.a);
    console.log(array.b);
}hello99();
//https://thebook.io/080270/part01/ch02/06/03-06/
//^ 메서드(method) 이해하기 
// 속성값으로 js의 모든 값을 넣을 수 있다. 문자열,숫자,bool,null,undefined,함수,배열,다른객체 등
// 객체의 속성값으로 함수가 들어간다면 이것은 메서드(method)라고 부른다.
const debug = {
    log:function(value) {
        console.log('value: ', value);
    },
};
debug.log('Hello, Method')
debug.log()
//여기서 log는 debug 객체의 메서드이며 이는 곧 console.log()의 console은 객체, log는 메서드가 되는 것과 같다.
//이해는 아직 잘 안된다..
