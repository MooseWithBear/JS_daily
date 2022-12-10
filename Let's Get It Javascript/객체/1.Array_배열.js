//! 변수 선언 var, let, const
const apple = '사과';
//! 배열 사용 // 배열의 각각의 값을 요소(element)라 칭한다.
const fruits = ['사과','오렌지','배','수박'];
//! 배열의 index 값 (자리수)
console.log(fruits[1]); // 오렌지 //인덱스는 0부터 시작한다
//! 이차원배열 (배열안에 배열)
const arrayOfArray = [[1,2,3],[4,5]]
console.log(arrayOfArray[0]); // [1,2,3]
//! 배열에 값을 미리 넣지 않아도 가능, 배열의 형식이 달라도 가능
const a =10; const b =20;
const dayangArray = [a,b,30];
console.log(dayangArray[1]) // 20
//! 배열은 빈값, 중복, null, undefined 값도 가능
const anything = [1,2,'null','undefined','마지막ele'];
const duplicated = ['밥','밥','밥','밥'];
const mt = [];
//! 배열의 길이(개수)
console.log(anything.length) // 5
//! 배열의 마지막 element 값 찾기
console.log(anything[anything.length-1])
//! 배열에 요소 추가하기
const target = ['a','b','c','d','e'];
target[target.length] = 'f'
console.log(target) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//! 배열의 맨 앞에 element를 추가하는 함수 // unshift();
const target2 = ['나','다','라']
target2.unshift('GA');
console.log(target2) // [ 'GA', '나', '다', '라' ]
//! 배열의 맨 뒤에 element를 추가하는 함수 // push();
const target3 = ['o','p','q','r']
target3.push('에스');
console.log(target3) // [ 'o', 'p', 'q', 'r', '에스' ]
//! 배열에서 첫번째 element를 제거하는 함수 // shift();
const target4 = ['물고기','태양','수성','금성']
target4.shift();
console.log(target4); // [ '태양', '수성', '금성' ]
//! 배열에서 마지막 element를 제거하는 함수 // pop();
const target5 = ['산','강','바다','금성']
target5.pop();
console.log(target5); // [ '산', '강', '바다' ]
//! 배열에서 중간의 element를 제거하는 함수 // splice();
//& var 변수 = 변수.spice(1,1); -> 변수 안에 넣으면 잘라낸 것만 집어넣는다. 
const target6 = ['주황','노랑','거북이','사슴','파랑']
var gap = target6.splice(2,2)  //2번 인덱스부터 본요소 포함 2개를 지운다
console.log(target6) //[ '주황', '노랑', '파랑' ]
console.log(gap) //[ '거북이', '사슴' ]
//! 배열에서 제거와 동시에 추가하는 함수 // splice();
const target7 = ['주황','노랑','거북이','사슴','파랑']
target7.splice(2,3, '녹색','흰색')  //2번 인덱스부터 본요소 포함 2개를 지운다, 그리고 그 자리부터 새로운 값을 넣는다
console.log(target7) //[ '주황', '노랑', '녹색', '흰색' ]
//! 배열에서 특정 요소를 찾는 함수 //includes();
const target8 = ['가','나','염소','라','마']
var result = target8.includes('염소');
var result2 = target8.includes('다');
console.log(result) 
console.log(result2) 
//! 배열에서 몇번째에 위치하는지 찾는 함수 //indexOf(); lastIndexOf();
//& lastIndexOf(); 함수는 뒤에서부터 찾기 시작하고 indexOf();는 앞에서부터 찾는다.
const target9 = ['중복','상','중복','하','상'];
const result3 = target9.indexOf('상');
const result4 = target9.lastIndexOf('중복');
const result5 = target9.indexOf('중');
console.log(result3); // 1
console.log(result4); // 2
console.log(result5); // -1 (없음=>false)

//! 배열을 반복문에 사용하기
const target10 = ['곰1','곰2','곰3','곰4'];
var i = 0;
while (i<target10.length) {
    console.log(target10[i])
    i++ // 이 부분이 없으면 무한반복이 된다.
}

for (i=0; i<target10.length; i++) {
    console.log(target10[i+1])
}

//^ 퀴즈 9번. 다음 배열에서 ‘라’를 모두 제거하세요. indexOf와 splice를 사용하세요.
console.log('문제9')
const arr = ['가', '라', '다', '라', '마', '라'];
for(i=0; i<arr.length; i++){
arr.splice(arr.indexOf('라'),1);
}
console.log(arr)




//NOTE const인데 수정 가능한 이유
// 새로운 값을 다시 대입(=)하는 것은 불가능하다. const에 객체(배열, 함수, 객체 리터럴)가 대입되면 
// 하지만 객체 내부의 속성이나 배열의 요소는 수정할 수 있습니다.
// const targetT = ['a', 'b', 'c', 'd', 'e'];
// targetT = ['f', 'g']; // 불가능
// targetT[0] = 'h'; // 가능

