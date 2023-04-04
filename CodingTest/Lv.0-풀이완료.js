// https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&page=1&levels=0&languages=javascript
//! 난이도 : Lv.0 (total : 100 questions)







//? 남은 문제
// 088. 직사각형 넓이 구하기
// 090. 유한소수 판별하기
// 093. 다항식 더하기
// 094. OX퀴즈
// 096. 연속된 수의 합
// 097. 안전지대
// 099. 평행









{
//^ 20221224 
// 001. 두수의 곱
// 002. 몫 구하기
// 003. 두 수의 차
// 004. 나머지 구하기
// 005. 나이 출력
// 006. 숫자 비교하기
// 007. 각도기
// 008. 두수의 나눗셈
// 009. 짝수의 합
// 010. 배열의 평균값
// 011. 양꼬치
// 012. 머쓱이보다 키 큰 사람
// 013. 중복된 숫자 개수
// 014. 배열 뒤집기
// 015. 배열 두 배 만들기
// 016. 아이스 아메리카노
// 017. 피자 나눠 먹기 (1)
// 018. 피자 나눠 먹기 (3)
// 019. 점의 위치 구하기
// 020. 삼각형의 완성조건 (1)
// 021. 문자열 뒤집기
// 022. 짝수 홀수 개수
// 023. 편지
// 024. 배열 원소의 길이
// 025. 특정 문자 제거하기
// 026. 배열자르기
// 027. 최댓값 만들기 (1)
// 028. 짝수는 싫어요
// 029. 문자 반복 출력하기


//^ 20221225
// 030. 중앙값 구하기
// 031. 문자열안에 문자열
// 032. 제곱수 판별하기
// 033. 순서쌍의 개수
// 034. 배열의 유사도
// 035. 자릿수 더하기
// 036. 옷가게 할인 받기
// 037. 숨어있는 숫자의 덧셈 (1)
// 038. 개미 군단
// 039. 모음제거
//! 040. 분수의 덧셈


//^ 20221226
// 041. n의 배수 고르기
// 042. 세균 증식
// 043. 직각삼각형 출력하기 // 20221230
// 044. 대문자와 소문자
// 045. 가위바위보
// 046. 암호 해독
// 047. 문자열 정렬하기 (1)
// 048. 주사위의 개수
// 049. 가장 큰 수 찾기
// 050. 약수 구하기


//^20221227
// 051. 배열 회전시키기
// 052. 외계행성의 나이
// 053. 최댓값 만들기
// 054. 최댓값 만들기 (2)
// 055. 피자 나눠 먹기 (2) //20221230
// 056. 인덱스 바꾸기 //20221230
// 057. 숫자찾기
// 058. 369게임
// 059. 문자열 정렬하기 (2)


//^20221228
// 058. 모스 부호 (1)
// 059. A로 B만들기
// 060. k의 개수


//^20221230
// 061. 7의 개수
// 062. 잘라서 배열로 저장하기
// 063. 진료순서 정하기
// 043. 직각삼각형 출력하기
// 055. 피자 나눠 먹기 (2)
// 056. 인덱스 바꾸기
// 064. 합성수 찾기
// 065. 중복된 문자 제거 //20221231
// 066. 팩토리얼 //20230102
// 067. 2차원으로 만들기 // 202301013
// 068. 가까운 수 // 20230103
// 069. 한 번만 등장한 문자 //20230103
// 070. 이진수 더하기 // 20230103
// 071. 숨어있는 숫자의 덧셈 (2)
// 072. 다음에 올 숫자
// 073. 소인수분해
// 074. 외계어 사전


//^20221231
// 075. 문자열 밀기 // let solution=(a,b)=>(b+b).indexOf(a)....
// 076. 종이 자르기
// 077. 로그인 성공?
// 065. 중복된 문자 제거


//^20230102
// 078. 등수 매기기
// 079. 영어가 싫어요
// 066. 팩토리얼
// 080. 저주의 숫자 3
//! 081. 연속된 수의 합


//^20231003
// 067. 2차원으로 만들기
// 068. 가까운 수 
// 069. 한 번만 등장한 문자
// 070. 이진수 더하기
// 082. 공던지기
}

//^
// 086. 삼각형의 완성조건 (2) // 20230122
// 087. 캐릭터의 좌표 // 20230224
// 098. 겹치는 선분의 길이 // 20230317
// 095. 분수의 덧셈 // 20230318
// 100. 옹알이 (1) // 20230322
// 092. 최빈값 구하기 // 20230326
// 089. 치킨 쿠폰 // 20230328
// 091. 특이한 정렬 // 20230404













    // total이 짝수, num이 홀수라면 num으로 나눈 값이 중간값이 된다.(가우스) + 중간값
// total이 홀수, num이 홀수라면 num으로 나눈 값이 중간값이 된다. (가우스) + 중간값

// total이 짝수, num이 짝수라면 중간 값이 존재하지 않는다. (가우스)
// total이 홀수, num이 짝수라면 중간 값이 존재하지 않는다. (가우스)


// const solution = (total, num) => {
//     let result = []
//     // if(num%2===0) {
//     //     return result;
//     // }else{
//     //     return result + (total/num)
//     // }
// }


//!꼭 공부하고 넘어가야하는 함수
// 재귀함수 const 팩토리얼 = num => num === 0 ? 1 : num*팩토리얼(num-1);
// filter -> filter(m => m === k)
// map ->
// split의 활용 극대화
// ES6에서 추가된 기능인 구조 분해 할당은



//~ 공부해야할 내용
// map() //!배열 돌때 필수 
// map() // const solution = strlist => strlist.map((el) => el.length)

// function solution(my_string, n) {
//     var answer = [...my_string].map(v => v.repeat(n)).join("");
//     console.log(answer);
//     return answer;
// }

// *tilde() 
//-> ~, ~~ 비트연산자
// *reduce() 
//-> map()과 함께 배열에 다양하게 활용할 수 있는 함수.
//-> https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
// *Math.ceil()
//-> 소수점 숫자를 올림하여 리턴하는 함수.
// *const solution = dot => dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 :3;
// *sort()
//-> 문자열의 UTF-16 기준으로 배열 내 string 인자들을 정렬한다. (숫자를 정렬해야할 때는 )
//-> 원 배열이 정렬되므로 얕은 복사를 하여 sort를 사용해야 원 배열데이터를 보호할 수 있다.
// *reverse()
// *sort((a,b) => a-b) 숫자 오름차순 공식..
//-> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// *let myString = pizza; return [...my_string] // 문자열을 배열로 치환
// *join("") //     return my_string.split('').reverse().join('');
// *const solution = num_list => {var answer = [0,0]; for (i of num_list) {answer[i%2] += 1; return answer}}
// *replaceAll()
// *split()
//-> 문자열을 주어진 인수기준으로 나눈 후 배열로 출력한다.
// *const solution = (my_string, letter) => my_string.split(letter).join('') --> letter element를 이용해서 split..
// *map()
// *repeat()
// *includes 와 filter 비교
// *isInteger() 정수판별
// *Math.sqrt(n) 제곱근  (return Number.isInteger(Math.sqrt(n)) ? 1 : 2;)
// *filter() 두배열 비교방법 const result = arr1.filter(x => !arr2.includes(x));
// *filter() 배열 같은 요소를 비교해서 새로운 배열로 출력함 result = s1.filter(x => s2.includes(x))
// *reduce()
// *replaceAll() ----> replaceAll(/[^\d]/g, '').split('') 문자는 공백으로 변환
// *replace()
// *제곱의 세가지 종류 (x**y), (Math.pow(x, y)), (x*x)
// *indexOf()
// *const alphabet = text.match(/[a-zA-Z]/g);
// *shift() 첫번째를 뺌 / unshift() 첫번째에 추가 / push() 마지막에 추가/ pop() 마지막을 뺌
// *Array.from, map()
// *전개 연산자(spread operator)
// * 배열순서를 새롭게 지정 [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// * split()과 slice()의 차이점
// * reduce()     return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
// * 
// function solution(my_str, n) {
//   return my_str.match(new RegExp(`.{1,${n}}`, "g"));
// }

//* function removeDuplicates(arr) {Array.from(new Set(arr));}
//* function removeDuplicates(arr) {arr.filter((item, index) => arr.indexOf(item) === index)}
//* function hasDuplicates(arr) {(new Set(arr)).size !== arr.length}


// function solution(age) {
//     let char = 'abcdefghij'
//     return Array.from(age.toString()).map(t => char[+t]).join('');
// }
//* repeat()


// const number = 123;
// const digits = number.toString().split('').map(digit => parseInt(digit, 10));
// console.log(digits); // [1, 2, 3]



//^ 문제풀이 시 참고사항
// 숫자를 배열로 변환 시에는 먼저 숫자->문자로 변환 후에야 split('')을 사용할 수 있다.
// 문자를 숫자로 변환 시에는 ParseInt를 사용할 수 있다. 말 그대로 parsing integer
// slice(),  concat()으로 배열 얕은복사가 가능하다.
// 배열의 얕은복사는 slice(), concat()등으로 가능하다.
// 객체의 얕은복사는 ..., 즉 (spread), assign({})
// toUpperCase()는 문자열을 지정해야 변경 가능하다.
// sort()는 배열을 지정해야 정렬 가능하다.
// for문도 while문과 같이 반복횟수제한을 없애고 싶다면, for(i=0; ; i++) {} 방법으로도 가능하다.
// 구조분해할당을 사용시에는 바로 위 코드의 ; 사용에 주의한다.