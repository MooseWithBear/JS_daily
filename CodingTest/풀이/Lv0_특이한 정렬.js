//! 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120880
//! 난이도 : Lv 0, 정답률 70% (2023/03/30)
//! 소요시간 : 3시간
//! 풀이방법 : n을 기준으로 앞,뒤 절대값 차이에 다라 배열을 push해주었다.
//! 개선할점 : 
    // 1. sort()를 심화적으로 활용하는 방법을 배우면 더 간단하게 풀 수 있으니 공부해야한다.



    const numlist = [36, 40, 20, 47, 10, 6, 7000, 10000]
const n = 30;
let result = []
const solution = (n, numlist) => {
    let sorting = numlist.slice()
if(numlist.indexOf(n) === -1) {
    sorting.push(n)
}
    sorting.sort((a,b)=>a-b); // [1,2,3,4,5,6]
    console.log(sorting)
while(sorting.length > 1){
    const standard = sorting[sorting.indexOf(n)]
    const forward = sorting[sorting.indexOf(n)-1]
    const back = sorting[sorting.indexOf(n)+1]
    // console.log(forward, standard, back)
    if(forward === undefined) {
        result.push(back);
        sorting.splice(sorting.indexOf(n)+1,1);
    }
    
    else if(Math.abs(standard-forward) === Math.abs(standard-back) || 
    Math.abs(standard-forward) > Math.abs(standard-back)) {
        result.push(back);
        sorting.splice(sorting.indexOf(n)+1,1)
    } else {
        result.push(forward);
        sorting.splice(sorting.indexOf(n)-1,1)
    }
    
    console.log('sorting: ', sorting);
}

if(numlist.indexOf(n) === -1) {
    console.log('result: ', result);
    return
}else {
    result.unshift(n)

}
}

solution(n, numlist)