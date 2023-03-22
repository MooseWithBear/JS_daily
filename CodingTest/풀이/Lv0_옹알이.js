//! 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120956
//! 난이도 : Lv 0, 정답률 29% (2023/03/21)
//! 소요시간 : 5시간
//! 풀이방법 : replace()함수와 체인기법으로 문자들을 차례대로 대체하고 결괏값이 조건에 맞는경우 카운트로 올라가게끔 구성했다.
//! 개선할점 : 
            // 1. 문제를 어렵게 생각하는 것 같다. 물론 너무 주먹구구식의 방법으로 코드를 짜는 것(호환성문제)도 문제가 있을 수 있지만
            // 2. 하지만 목적은 어디까지나 문제풀이이니 문제를 해결하는게 우선이라고 생각해도 되는지 모르겠다.
            // 3. 내가 풀이한 방법은 replace()로 문자를 숫자로 대체하고 결괏값이 숫자(여기서는 0)인 경우에만 count가 올라가도록 하였는데 예외사항을 생각하지 못했다.
            //    - ex) 결괏값이 1e1로 나온 경우 자바스크립트에서는 이것도 숫자로 판단하기 때문에 마지막 테스트케이스에서 실패했었다.
            //    이 부분이 상당히 심화된 테스트 케이스였던 것 같다. 앞으로도 잘 고려해야 할 것 같다.
            // 4. 다른 사람의 풀이를 보니 문자열을 정규표현식에 활용할 수 있었다면 문제풀이가 상당히 쉬웠을 수 있었을 것 같다.


// const babbling = ["yeema"]; // 독특한 테스트 케이스
// const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
const babbling = ["aya", "yee", "u", "maa", "wyeoo"];

const nephew = ["aya", "ye", "woo", "ma"];
let count = 0;
let spl = [];
const solution = (babbling) => {
  for (let i=0; i<babbling.length; i++) {
      spl = babbling[i].replace(nephew[0], 0).replace(nephew[1], 0).replace(nephew[2], 0).replace(nephew[3],0).replace("e", "NO")
    //   console.log(spl)  
      if(spl == 0) {
            count ++;
        }
  }
    console.log(count);
};
solution(babbling);

// 풀이 과정
/*
문제를 어떻게 풀어야 할까? 아이디어
    1. split() 함수를 활용해볼 수 있을 것 같다. -> 일치하는 문자를 삭제해가면서 빈 문자열이 되는 인자일 때 +1
    2. indexof() 함수를 활용해볼 수 있을 것 같다. -> 무조건 맨 앞 열에서 검색되어져 나올 때만 slice로 제거하면서 빈 문자열이 될 때 +1
    0. 기본 조건으로 애초에 문자열 길이가 조카의 문자열 배합 경우에 수에 맞지 않는 경우 아예 연산에서 사전 차단하여 연순횟수 절약? -> 근데 조카가 할 수 있는 말이 달라졌을 때 제거해야할 코드가 된다. 그냥 삭제하는게 나을듯
    3. 아니면 replace로 문자를 대체하여 결괏값을 판단 후 카운트를 추가할 수 있을 것 같다.

*/
