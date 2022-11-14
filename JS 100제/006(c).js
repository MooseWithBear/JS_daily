// False
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들입니다.
// 단, 이 중 False로 취급하지 않는 것이 하나 있습니다. True인 것을 찾아주세요.

// 1) NaN
// 2) 1
// 3) ""
// 4) 0
// 5) undefined

// 답:2

console.log(!!NaN);
// false
console.log(!!1);
// true
console.log(!!"");
// false
console.log(!!0);
// false
console.log(!!undefined);
// false
