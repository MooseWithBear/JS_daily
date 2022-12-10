//^ Document Object Model
// Element
// Getter(값을 얻는 용도) -> ex) "console.log"
// Setter(값을 지정하는 용도) -> ex) let a = "table" 


//! querySelector -> 첫 셀렉터만 제어
let boxEl = document.querySelector('.box');


//! addEventListener
boxEl.addEventListener('click',active);
//addEventListener always has 2 arguments //(이벤트 정보, 실행할 상황)
// boxEl.addEventListener('click',함수()); 

//! classList
function active () {
    boxEl.classList.toggle('active')
    // 요소의 클래스 추가 삭제등 제어
let isContains = boxEl.classList.contains('active'); //'active' 라는 클래스의 여부확인
console.log('isContains: ', isContains);
}

//* add or remove multiple classes
// boxEl.classList.add("foo", "bar", "baz");
// boxEl.classList.remove("foo", "bar", "baz");

//* add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// boxEl.classList.add(...cls);
// boxEl.classList.remove(...cls);

//* replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");

//* if visible is set remove it, otherwise add it
//div.classList.toggle("visible");


//! querySelectorAll -> 모든 셀렉터 제어

const boxEls = document.querySelectorAll('.box');
boxEls.forEach(function (개별박스, 인덱스){
    개별박스.classList.add(`active-${인덱스}`)
    console.log(인덱스,개별박스);
});

//! textContent
// const boxEl = document.querySelector('.box');
// console.log(boxEl.textContent);

// boxEl.addEventListener('click', function(){
//     boxEl.classList.toggle('active');
//     boxEl.textContent = 'change number' //html display 값도 바뀜
//     console.log(boxEl.textContent);
// })


//! split().reverse().join() with method chaining
//split('') : 문자를 인수기준으로 쪼갠 후 배열로 반환
//reverse() : 배열을 뒤집음
//join('') : 배열을 인수기준으로 문자로 병합 후 반환 (split바로 뒤에서 사용은 불가능)
//method chaining 방식 : 함수를 차례대로 나열하여 실행하는 방식

const a = 'hello~'

const sp = a.split('');
//split : 문자를 인수기준으로 쪼갠 후 배열로 반환
console.log('sp: ', sp); //[ 'h', 'e', 'l', 'l', 'o', '~' ]
const rv = a.reverse();
console.log('rv: ', rv); //[ '~', 'o', 'l', 'l', 'e', 'h' ]
const jo = rv.join('');
console.log('jo: ', jo); //` ~olleh

const chain = a.split('').reverse().join('');
console.log('chain: ', chain); //` ~olleh
