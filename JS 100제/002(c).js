// 배열의 내장함수
// pass 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 데이터
var arr = [200, 100, 300];
// pass
arr.splice(2, 0, 10000); // index 2 자리에 0개 삭제하고 10000 추가

console.log(arr);

//출력
// [200, 100, 10000, 300]

// spice(index to start, count to delete, element to add)
// you can add more than one element to the array.
// eg)
var arr2 = [200, 100, 300];
arr2.splice(2, 0, 10000, 700);
console.log(arr2);
// [200, 100, 10000, 700, 300]
