//! 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120808
//! 난이도 : Lv 0, 정답률 58% (2023/03/18)
//! 소요시간 : 1시간 30분
//! 풀이방법 : 인수들을 2차배열 및 분모가 작은 순으로 정렬한 후 분모들의 상태에 따른 분수 덧셈 및 인수분해 하였다.
//! 개선할점 : 내가 만든 코드도 크게 복잡하진 않아보이지만 최대공약수를 쉽게 구하는 방법이 있는 것 같다.

const numer1=9;	denom1=2; numer2=1;	denom2=3;
const solution = (numer1, denom1, numer2, denom2) => {
    let result = []; let mom=0; let son1=0; let son2=0;
    const arr = denom1 >= denom2 ? [[numer2,denom2],[numer1,denom1]] : [[numer1,denom1],[numer2,denom2]]
    if(arr[0][1]===arr[1][1]) { // 분모가 같을때
            mom = arr[1][1];
            son1 = arr[0][0];
            son2 = arr[1][0];
            result = [son1+son2, mom]
    }else { // 분모가 같지 않을 때
            mom = arr[0][1] * arr[1][1];
            son1 = (mom/arr[1][1]) * arr[1][0]
            son2 = (mom/arr[0][1]) * arr[0][0]
            result = [son1+son2, mom]
    }
    for(let i = result[0]; i > 0; i--) {
        if(result[0]%i===0 && result[1]%i===0) {
            result[0] /= i;
            result[1] /= i;
        }
    }
    console.log(result)
}
solution(numer1, denom1, numer2, denom2)


//! 최대공약수를 구하는 쉬운방법 (GPT)
    /*
    자바스크립트에서 최대공약수(GCD)를 구하는 방법은 유클리드 호제법(Euclidean algorithm)을 사용하는 것이 일반적입니다.

    유클리드 호제법은 다음과 같은 알고리즘으로 작동합니다:

    두 수 a와 b가 주어졌을 때, a를 b로 나눈 나머지를 구합니다.
    나머지가 0이면 b가 최대공약수이므로 알고리즘을 종료합니다.
    나머지가 0이 아니면, b를 나머지로 대체하고 1단계부터 다시 수행합니다.
    이를 반복하면서 나머지가 0이 될 때까지 수행합니다. 이 때, 마지막으로 구한 b가 최대공약수가 됩니다.

    아래는 자바스크립트에서 유클리드 호제법을 이용하여 최대공약수를 구하는 함수 예시입니다:
    */
    function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
    }
    // 위의 함수는 매개변수로 두 수 a와 b를 받아서 최대공약수를 반환합니다. 이 함수에서는 while 루프를 사용하여 유클리드 호제법을 구현하고 있습니다.
