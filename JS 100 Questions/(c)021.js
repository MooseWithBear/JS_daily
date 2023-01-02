// # 문제21 : set은 어떻게 만드나요?

// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();


// answer = 3, 5

console.log(new Set("javascript"))
//Set(9) { 'j', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't' }
// 중복을 제거함. 
//+ Array.from 사용해서 배열로 변환해줄 수 있다.
