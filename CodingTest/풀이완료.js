// https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&page=1&levels=0&languages=javascript

//! 난이도 : Lv.0
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

// 030. 중앙값 구하기
// 031. 문자열안에 문자열
// 032. 제곱수 판별하기
// 033. 순서쌍의 개수
// 034. 배열의 유사도
// 035. 자릿수 더하기
// 036. 옷가게 할인 받기
// 037. 숨어있는 숫자의 덧셈 (1)





//~ 공부해야할 내용
// map() //!배열 돌때 필수 
// map() // const solution = strlist => strlist.map((el) => el.length)

// function solution(my_string, n) {
//     var answer = [...my_string].map(v => v.repeat(n)).join("");
//     console.log(answer);
//     return answer;
// }

// tilde()
// reduce()
// Math.ceil()
// const solution = dot => dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 :3;
// sort()
// reverse()
// sort((a,b) => a-b) 숫자 오름차순 공식..
// let myString = pizza; return [...my_string] // 문자열을 배열로 치환
// join("") //     return my_string.split('').reverse().join('');
// const solution = num_list => {var answer = [0,0]; for (i of num_list) {answer[i%2] += 1; return answer}}
// replaceAll()
// split()
// const solution = (my_string, letter) => my_string.split(letter).join('') --> letter element를 이용해서 split..
// map()
// repeat()
// includes 와 filter 비교
// isInteger() 정수판별
// Math.sqrt(n) 제곱근  (return Number.isInteger(Math.sqrt(n)) ? 1 : 2;)
// filter() 두배열 비교방법 const result = arr1.filter(x => !arr2.includes(x));
// filter() 배열 같은 요소를 비교해서 새로운 배열로 출력함 result = s1.filter(x => s2.includes(x))
// reduce()
// replaceAll ----> replaceAll(/[^\d]/g, '').split('') 문자는 공백으로 변환

//^ 문제풀이 시 참고사항
// 숫자를 배열로 변환 시에는 먼저 숫자->문자로 변환 후에야 split('')을 사용할 수 있다.
// 문자를 숫자로 변환 시에는 ParseInt를 사용할 수 있다. 말 그대로 parsing integer