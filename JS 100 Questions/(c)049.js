// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

// 입출력

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10



const solution = c => console.log(c.split(" ").map(x => Math.floor(x)).sort((a,b) => a-b).at(-1))
solution("10 9 8 7 6 5 4 3 2 1")