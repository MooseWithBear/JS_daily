//~1. 
// 켄을 찾아라 
// 문자열 요소로 이루어진 배열이 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요.
// 인자로 들어 배열의 요소 중 문자열 "Ken"의 인덱스를 찾을 수 있어야 합니다.
// 인덱스를 찾은 후 "켄은 1에 있다" 라는 형식의 문자열이 리턴되어야 합니다.
// 문자열 "Ken"의 위치와, 배열 요소의 갯수와 상관없이 함수는 정상적으로 작동되어야 합니다.
// 배열 요소에 "Ken"이 중복되거나, 존재하지 않는 경우는 없습니다.

// 인자 ["Jett", "Leo", "Ken", "Justin"] ["Lee", "Park", "Jung", "Ken"]
// 리턴 값 "켄은 2에 있다" "켄은 3에 있다"

var arr1 = ["Jett", "Leo", "Ken", "Justin"];
var arr2 = ["Lee", "Park", "Jung", "Ken"];

//my Answer
for (i=0; i<arr1.length; i++){
    if(arr1[i]=="Ken"){
        console.log("Ken은 "+i+"에 있다")
    }
}
for (j=0; j<arr2.length; j++){
    if(arr2[j]=="Ken"){
        console.log("Ken은 "+j+"에 있다")
    }
}

//Answer2. https://codepen.io/vanillacoding/pen/ZEXNMZK
const vaco1 = ["Jett", "Ken"];
const vaco2 = ["Leo", "Kim", "Ken", "Lee"];
const vaco3 = ["Ken", "Justin", "Jett"];

function findKen(arr) {
  for(k=0; k<arr.length; k++){
    if(arr[k]=="Ken"){
      return "켄은 "+k+"에 있다"
    }
  };
}

var result1 = (findKen(vaco1) === "켄은 1에 있다");
var result2 = (findKen(vaco2) === "켄은 2에 있다");
var result3 = (findKen(vaco3) === "켄은 0에 있다");

if (
  result1 &&
  result2 &&
  result3
) {
  console.log("Q1 🎉");
}



//~2.
// < 바코바코바코바 >
// 숫자가 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요!
// 📌 n이 1인 경우 문자열 "바"를 반환해야 합니다.
// 📌 n이 2인 경우 문자열 "바코"를 반환해야 합니다.
// 📌 n이 3인 경우 문자열 "바코바"를 반환해야 합니다.
// 📌 그 이상의 숫자는 아래 예시를 참고해 주세요.
//^📌 repeat 메서드를 사용하면 안됩니다.
// 📌 n은 항상 1이상 입니다.
// +--------------------------------------------------------------------+
// |                 n                    |            리턴 값            |
// +--------------------------------------------------------------------+ 
// |                 1                    |             "바"             |
// +--------------------------------------------------------------------+
// |                 2                    |            "바코"            |
// +--------------------------------------------------------------------+ 
// |                 3                    |           "바코바"            |
// +--------------------------------------------------------------------+
// |                 5                    |          "바코바코바"          |
// +--------------------------------------------------------------------+                    
// |                 7                    |         "바코바코바코바"        |
// +--------------------------------------------------------------------+
// |                12                    |      "바코바코바코바코바코바코"    |
// +--------------------------------------------------------------------+
//
// my Answer
function baco (z) {
    let text = "바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코"
    return text.substring(0,z)
}
console.log('baco(2): ', baco(3));

//codepen https://codepen.io/vanillacoding/pen/jOGoeyB
function repeatVaco(n) {
    let text = "바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코바코"
    return text.substring(0,n)
  }
  
  var result1 = (repeatVaco(1) === "바");
  var result2 = (repeatVaco(2) === "바코");
  var result3 = (repeatVaco(4) === "바코바코");
  var result4 = (repeatVaco(5) === "바코바코바");
  var result5 = (repeatVaco(10) === "바코바코바코바코바코");
  
  if (
    result1 &&
    result2 &&
    result3 &&
    result4 &&
    result5
  ) {
    console.log("Q2 🎉");
  }



//~3. 
// < 가장 작은 수 >
// 숫자 요소로 이루어진 배열이 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요!

// 📌 각 배열의 숫자 중 가장 작은 숫자를 반환해야 합니다.
// 📌 배열 내의 숫자가 중복되는 경우는 없습니다.
// 📌 빈 배열이 주어질 경우는 고려하지 않아도 됩니다.

// +--------------------------------------------------------------------+
// |                arr                   |            리턴 값            |
// +--------------------------------------------------------------------+  
// |           [5, 4, 3, 2, 1]            |              1              |
// +--------------------------------------------------------------------+                   
// |           [4, 5, 1, 2, 3]            |              1              |
// +--------------------------------------------------------------------+  
// |          [10, 7, 13, 2, 6]           |              2              |
// +--------------------------------------------------------------------+

// my Answer
const numbers1 = [5,4,3,2,1];
const numbers2 = [4,5,1,2,3];
const numbers3 = [10,7,13,2,6];

function findS (arr) {
  return Math.min(...arr)
}
// console.log(findS(numbers3))

//codepen https://codepen.io/vanillacoding/pen/ZEXNVQb?editors=0010

var arr1 = [10];
var arr2 = [4, 10, 1, 5];
var arr3 = [13, 5, 7, 3, 10, 9];

function findMinNumber(arr) {
 return Math.min(...arr);
}

var result1 = (findMinNumber(arr1) === 10);
var result2 = (findMinNumber(arr2) === 1);
var result3 = (findMinNumber(arr3) === 3);

if (
  result1 &&
  result2 &&
  result3
) {
  console.log("Q3 🎉");
}




