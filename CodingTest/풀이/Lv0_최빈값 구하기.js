//! 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120812
//! 난이도 : Lv 0, 정답률 65% (2023/03/26)
//! 소요시간 : 2시간
//! 풀이방법 : 중복값을 제거한 배열과 기존배열을 비교, 가장 높은 중복 카운트를 가진 위치에 자리하고 있는 숫자를 구했다.
//! 개선할점 : 
            // 1. [...new Set(array)], clone.slice().array.sort((a,b)=>a-b) 를 잊지말자
            // 2. map, foreach, reduce 함수를 활용하는 방법을 좀 더 공부해야한다.
            // 3. Map 객체를 새롭게 알게되었다. (키-값)을 함께 가질 수 있으면서 사용할 수 있는 내장함수들이 여러개 있다. 공부하면 활용할 수 있는 곳들이 많을 것 같다.
            // 4. 


// 풀이과정 
/* 
    아이디어
        0. 혹시모르니 array배열은 일단 정렬 sort((a,b) => a-b))
        0-1. 그리고 복제한 array배열은 중복제거해서 비교할 때 사용할 수 있을 것이다.
        1. 이중 반복문을 사용해서 같은지 확인하고 카운트가 가장 높은 것을 리턴 (같은 수가 있다면 -1) + (배열길이가 1이라면 그 수를 리턴)
        2. indexOf(), lastIndexOf()를 같이 사용해서 전체길이,각 리턴값을 비교하고 가장 긴(빈도가 높은) 숫자를 구해볼 수 있을 것 같다.
        3. split()함수로 빈칸의 개수를 세는 아이디어?
        4. 음.. map foreach 사용해볼 수 있을 것 같은데 잘 모르겠다..
*/

const array = [0]
let resultArr = [];
const solution = array => {
    array.sort((a,b)=>a-b);
    // console.log('array: ', array);
    const unique = [...new Set(array)]

    if(array.length === 1) {
        console.log("혼자야?");
        return array[0];
    }else{
    for(let i of unique) {
        let count = 0;
        for(let j of array) {
            if(i==j) {
                count++;
            }
        }
        resultArr.push(count)
    }
    const max = Math.max(...resultArr);
    const maxIndex = resultArr.indexOf(max);
    const temp = resultArr.slice().sort((a,b) => a-b).at(-2);

    // console.log(unique.indexOf(Math.max(...resultArr)))
    if(max == temp) {
        console.log("중복!");
        return -1;
    }else{
        console.log('resultArr: ', resultArr);
        console.log(unique[maxIndex])
        console.log('unique: ', unique);
    }
}
}
solution(array)

