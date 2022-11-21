// concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
let year = "2019";
let month = "04";
let day = "26";
let hour = "11";
let minute = "34";
let second = "27";


// 빈칸을 채워주세요

// 1.
// let result = year.concat(
//   "/",
//   month,
//   "/",
//   day,
//   " ",
//   hour,
//   ":",
//   minute,
//   ":",
//   second
// );
// 2.
let result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
console.log('result: ', result);
const clock = year.concat(`년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`)
console.log('clock: ', clock);
//when you 
// 출력해야 하는 값
// 2019/04/26 11:34:27
// 2019년 04월 26일 11시 34분 27초


//! Array.prototype.concat()
// The concat() method is used to "merge" two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
let arr4 = arr1.concat(arr2).concat(arr2);
console.log('arr4: ', arr4); 
//arr4:  [1, 2, 3, 4, 5, 6, 4, 5, 6 ]

arr4 = arr1.concat(arr2,arr3)
console.log('arr4: ', arr4);
//arr4:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]