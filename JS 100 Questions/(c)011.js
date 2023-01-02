// # 문제11 : for를 이용한 기본 활용

// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

// let s = 0;

// //pass

// console.log(s);

let s = 0;
const n1 = 1;
const n2 = 100;
const solution = (n1,n2) => {
    // s = n2*(n2+n1) / 2
    for(let i = n1; i<=n2; i++) {
        s += i
    }
    console.log(s)
}

solution(n1,n2);