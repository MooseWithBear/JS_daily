//! 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120876
//! 난이도 : Lv 0, 정답률 55% (2023/03/17)
//! 소요시간 : 4시간
//! 풀이방법 : 조건문을 통해 겹치는 부분을 가려내어 길이를 구하고, 특이 케이스는 마지막에 별도로 조건을 걸어 추가하였다.
//! 개선할점 : 처음에 문제를 잘못 이해하고 풀어서 삽을 푸는 시간이 많았다. 결국 기존 코드를 재활용하여 풀긴한거보면 그래도 완전 잘못된 접근은 아니었던 것 같다.
    // 1. 문제를 제대로 읽고 이해하고 파악해야할 것이다.
    // 2. 코드가 내가봐도 너~무 길다. 분명 간단한 방법이 있었을 것인데 맞았다.
    // 3. 내가봐도 정리정돈되지 않고 중구난방이다.
    // 4. 다른 풀이를 보니 간단한 코드로도 작성 가능한 문제였다. 그 아이디어는 나도 생각했었지만 시도를 하지 않았다.
    // 5. 온전한 내 힘으로라도 풀어내지는 못했다. 
    //  5-1. 중간에 GPT에게 아이디어를 조금 받았다. (인수 반복을 객체로 저장하여 사용한 방법)
    //  5-2. 1,9번 예시가 자꾸 틀려서 질문하기 부분을 이용해 1번 9번 예시가 무엇인지 조금 참고했다.

/* (풀이방법)
        1. 먼저 선분의 길이가 겹칠 때와 아닐 때의 차이점을 구분해야할 것이다.
        2. 구분을 어떻게 할 수 있을까?
            - 1) 배열을 꽉 채워서 겹치는 걸 찾든가
            - 2) 아니면 조건을 찾아서 걸러내거나
        3. 2개의 선으로 쉬운 예시를 대보자 a = [0,1] b = [0,2]
        4. 일단 예시만 본다면 얘네 들이 겹치려면 아래와 같을 것이다. (조건)
            - b의 어느 한쪽( b[0] or b[1] )이 a 중간에서 시작 또는 끝나거나,(즉 a[0] 보다 같거나 크면서 a[1]보다 작거나 같아야 할 것이다.)
            - b의 첫번째가 ( b[0] )이 a[0]보다 같거나 작으면서 다른 한쪽( b[1] )은 a[1]보다 같거나 크거나,
        5. 그렇다면 조건식을 어떻게 만들어야 할까?
            - 일단 간단하게 부등호를 사용해보자
        6. 그 다음 겹치는 길이는 어떻게 만들어야 할까?
            - 겹치는 경우 각 a,b 배열에서 각 [max, min]수 만으로 이루어진 배열로 시작과 끝 배열을 만들고 끝에서 시작을 빼면 길이가 된다.(절대값 반환)
        7. 두 배열을 비교하는건 된 것 같은데 3개의 배열을 비교하려면 어떻게 해야할까?
            - 반복문을 통해 elements를 (a,b) (b,c) (a,c) 비교해서 길이만 누적합산 시켜보자
        8. 반복을 어떻게 시켜야할까?
            - 이 부분은 생각이 잘 안나서 GPT한테 물어보니 두가지 답변이 있었다.
            1) 중첩반복문(nested loop)을 사용한다. -> //^ 요소의 개수가 많아지만 코드가 복잡해지는 단점이 있다.
                const array = [[1,2],[1,3],[1,4]];
                for(let i = 0; i < array.length; i++) {
                for(let j = i+1; j < array.length; j++) {
                    if(i === 0 && j === 1) {
                    console.log(`[${array[i]}, ${array[j]}]`);
                    } else if(i === 0 && j === 2) {
                    console.log(`[${array[i]}, ${array[j]}]`);
                    } else if(i === 1 && j === 2) {
                    console.log(`[${array[i]}, ${array[j]}]`);
                    }
                }
                }
                위 코드에서 첫 번째 반복문에서는 배열의 인덱스 i를 0부터 시작하여 1씩 증가시키며, 안쪽 반복문에서는 j를 i+1부터 시작하여 1씩 증가시킵니다. 이렇게 함으로써, 바깥쪽 반복문에서 선택한 첫 번째 요소와 안쪽 반복문에서 선택한 두 번째 요소를 조합하여 배열 [1,2], [1,3], [1,4]를 만들 수 있습니다.
                그러나, 위 코드에서는 조건문을 사용하여 각 요소의 인덱스를 직접 비교하고 있습니다. 이 방법은 요소의 개수가 적을 때는 괜찮지만, 요소의 개수가 많아지면 코드가 복잡해질 수 있습니다. 따라서, 요소를 직접 비교하는 것보다는 요소의 인덱스를 사용하는 것이 더 간단하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
            2) 요소를 직접 비교하는 대신에 인덱스를 사용하는 방법 -> //^ 이 방법이 좀 합리적인 방법인 것 같다.
                - 각 조합을 만들어내는 인덱스를 저장하는 배열을 새로 만들어 활용하는것.. 나는 생각지도 못했는데 아주 실용적이고 무언가 나의 알을 깨주는 신박한 방법인 것 같다.
                const array = [[1,2],[1,3],[1,4]];
                const indices = [
                [0, 1],
                [0, 2],
                [1, 2]
                ];
                for(let i = 0; i < indices.length; i++) {
                const [firstIndex, secondIndex] = indices[i];
                console.log(`[${array[firstIndex]}, ${array[secondIndex]}]`);
                }
        9. 코드로 변환해보자
        10. 좀 더 줄일 수 있을까?
        */
        //~ ex1) 2개의 선을 비교하여 길이를 구하는 코드
        // const lines = [[1,5],[-1,9]]
        // const a = lines[0];
        // const b = lines[1];
        // let result = 0;
        // let start = 0;
        // let end = 0;

        // // console.log(Math.abs(end - start))
        // const solution = (a,b) => {
        //     start = Math.max(a[0], b[0])
        //     end = Math.min(a[1],b[1])
        //     if(b[0]>=a[0] && b[0]<a[1]) { // 조건 첫번째
        //         console.log('Yes0');
        //         result += Math.abs(end - start)
        //     }
        //      if(b[1]>a[0] && b[1]<=a[1]) { // 조건 첫번째에서 구분되어 빠짐
        //         console.log('yes1');
        //         result += Math.abs(end - start)
        //     }
        //      if(b[0]<=a[0] && b[1]>=a[1]){ // 조건 두번째
        //         console.log('Yes2');
        //         result += Math.abs(end - start)
        //     }
        //     return console.log(result)
        // }

        // solution(a,b)

        /////////////////////////////////////////////////////////////////////////
        //~ ex2) 3개의 선을 비교하여 길이를 구하는 코드
//^ 나의 풀이
        const lines = [[0, 2], [-3, -1], [-2, 1]]

        const solution = lines => {
        const indexCase = [
          [0, 1],
          [0, 2],
          [1, 2],
        ];

        let result = [];
        let particular = 0;
        let start = 0;
        let end = 0;
        for (let i = 0; i < indexCase.length; i++) {
          const [firstIndex, secondIndex] = indexCase[i];

          const solutionS = (a, b) => {
            start = Math.max(a[0], b[0]);
            console.log('start: ', start);
            end = Math.min(a[1], b[1]);
            console.log('end: ', end);
            if(start < end) {
            if (b[0] >= a[0] && b[0] <= a[1]) {
              // 조건 첫번째
              console.log("Yes0");
              particular += Math.abs(end - start);
                result.push(start,end)
            }
            else if (b[1] > a[0] && b[1] < a[1]) {
              // 조건 첫번째에서 구분되어 빠짐
              console.log("yes1");
              particular += Math.abs(end - start);
            result.push(start,end)

            }
            else if (b[0] <= a[0] && b[1] >= a[1]) {
              // 조건 두번째
              console.log("Yes2");
              particular += Math.abs(end - start);
            result.push(start,end)

            } else {
               console.log("No");
            }
            return console.log(result);  
        } 
        }
          solutionS(lines[firstIndex], lines[secondIndex])        
        } 
        answer = Math.abs(Math.max(...result)-Math.min(...result))
        console.log(particular)
        if(particular < answer) {
            answer = particular;
            return console.log(answer)
        }
        else if(answer == -Infinity) {
           answer = 0;
           return console.log(answer)
        }else {
            return console.log(answer)
        }
        }
        solution(lines)




    

    // 17시 시작
/*
1. 먼저 선분의 길이가 겹칠 때와 아닐 때의 차이점을 구분해야할 것이다.
2. 구분을 어떻게 할 수 있을까?
    - 1) 배열을 꽉 채워서 겹치는 걸 찾든가
    - 2) 아니면 조건을 찾아서 걸러내거나
3. 2개의 선으로 쉬운 예시를 대보자 a = [0,1] b = [0,2]
4. 일단 예시만 본다면 얘네 들이 겹치려면 아래와 같을 것이다. (조건)
    - b의 어느 한쪽( b[0] or b[1] )이 a 중간에서 시작 또는 끝나거나,(즉 a[0] 보다 같거나 크면서 a[1]보다 작거나 같아야 할 것이다.)
    - b의 첫번째가 ( b[0] )이 a[0]보다 같거나 작으면서 다른 한쪽( b[1] )은 a[1]보다 같거나 크거나,
5. 그렇다면 조건식을 어떻게 만들어야 할까?
    - 일단 간단하게 부등호를 사용해보자
6. 그 다음 겹치는 길이는 어떻게 만들어야 할까?
    - 겹치는 경우 각 a,b 배열에서 각 [max, min]수 만으로 이루어진 배열로 시작과 끝 배열을 만들고 끝에서 시작을 빼면 길이가 된다.(절대값 반환)
7. 두 배열을 비교하는건 된 것 같은데 3개의 배열을 비교하려면 어떻게 해야할까?
    - 반복문을 통해 elements를 (a,b) (b,c) (a,c) 비교해서 길이만 누적합산 시켜보자
8. 반복을 어떻게 시켜야할까?
    - 이 부분은 생각이 잘 안나서 GPT한테 물어보니 두가지 답변이 있었다.
    1) 중첩반복문(nested loop)을 사용한다. -> //^ 요소의 개수가 많아지만 코드가 복잡해지는 단점이 있다.
        const array = [[1,2],[1,3],[1,4]];
        for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(i === 0 && j === 1) {
            console.log(`[${array[i]}, ${array[j]}]`);
            } else if(i === 0 && j === 2) {
            console.log(`[${array[i]}, ${array[j]}]`);
            } else if(i === 1 && j === 2) {
            console.log(`[${array[i]}, ${array[j]}]`);
            }
        }
        }
        위 코드에서 첫 번째 반복문에서는 배열의 인덱스 i를 0부터 시작하여 1씩 증가시키며, 안쪽 반복문에서는 j를 i+1부터 시작하여 1씩 증가시킵니다. 이렇게 함으로써, 바깥쪽 반복문에서 선택한 첫 번째 요소와 안쪽 반복문에서 선택한 두 번째 요소를 조합하여 배열 [1,2], [1,3], [1,4]를 만들 수 있습니다.
        그러나, 위 코드에서는 조건문을 사용하여 각 요소의 인덱스를 직접 비교하고 있습니다. 이 방법은 요소의 개수가 적을 때는 괜찮지만, 요소의 개수가 많아지면 코드가 복잡해질 수 있습니다. 따라서, 요소를 직접 비교하는 것보다는 요소의 인덱스를 사용하는 것이 더 간단하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
    2) 요소를 직접 비교하는 대신에 인덱스를 사용하는 방법 -> //^ 이 방법이 좀 똑똑하고 합리적인 방법인 것 같다.
        - 각 조합을 만들어내는 인덱스를 저장하는 배열을 새로 만들어 활용하는것.. 나는 생각지도 못했는데 아주 실용적이고 무언가 나의 알을 깨주는 신박한 방법인 것 같다.
        const array = [[1,2],[1,3],[1,4]];
        const indices = [
        [0, 1],
        [0, 2],
        [1, 2]
        ];
        for(let i = 0; i < indices.length; i++) {
        const [firstIndex, secondIndex] = indices[i];
        console.log(`[${array[firstIndex]}, ${array[secondIndex]}]`);
        }
9. 코드로 변환해보자
10. 좀 더 줄일 수 있을까?
*/
//~ ex1) 2개의 선을 비교하여 길이를 구하는 코드
// const lines = [[1,5],[-1,9]]
// const a = lines[0];
// const b = lines[1];
// let result = 0;
// let start = 0;
// let end = 0;

// // console.log(Math.abs(end - start))
// const solution = (a,b) => {
//     start = Math.max(a[0], b[0])
//     end = Math.min(a[1],b[1])
//     if(b[0]>=a[0] && b[0]<a[1]) { // 조건 첫번째
//         console.log('Yes0');
//         result += Math.abs(end - start)
//     }
//      if(b[1]>a[0] && b[1]<=a[1]) { // 조건 첫번째에서 구분되어 빠짐
//         console.log('yes1');
//         result += Math.abs(end - start)
//     }
//      if(b[0]<=a[0] && b[1]>=a[1]){ // 조건 두번째
//         console.log('Yes2');
//         result += Math.abs(end - start)
//     }
//     return console.log(result)
// }

// solution(a,b)

/////////////////////////////////////////////////////////////////////////
//~ ex2) 3개의 선을 비교하여 길이를 구하는 코드
// const lines = [[0, 2], [-3, -1], [-2, 1]]

// const solution = lines => {
// const indexCase = [
//   [0, 1],
//   [0, 2],
//   [1, 2],
// ];

// let result = [];
// let particular = 0;
// let start = 0;
// let end = 0;
// for (let i = 0; i < indexCase.length; i++) {
//   const [firstIndex, secondIndex] = indexCase[i];

//   const solutionS = (a, b) => {
//     start = Math.max(a[0], b[0]);
//     console.log('start: ', start);
//     end = Math.min(a[1], b[1]);
//     console.log('end: ', end);
//     if(start < end) {
//     if (b[0] >= a[0] && b[0] <= a[1]) {
//       // 조건 첫번째
//       console.log("Yes0");
//       particular += Math.abs(end - start);
//         result.push(start,end)
//     }
//     else if (b[1] > a[0] && b[1] < a[1]) {
//       // 조건 첫번째에서 구분되어 빠짐
//       console.log("yes1");
//       particular += Math.abs(end - start);
//     result.push(start,end)

//     }
//     else if (b[0] <= a[0] && b[1] >= a[1]) {
//       // 조건 두번째
//       console.log("Yes2");
//       particular += Math.abs(end - start);
//     result.push(start,end)

//     } else {
//        console.log("No");
//     }
//     return console.log(result);  
// } 
// }
//   solutionS(lines[firstIndex], lines[secondIndex])        
// } 
// answer = Math.abs(Math.max(...result)-Math.min(...result))
// console.log(particular)
// if(particular < answer) {
//     answer = particular;
//     return console.log(answer)
// }
// else if(answer == -Infinity) {
//    answer = 0;
//    return console.log(answer)
// }else {
//     return console.log(answer)
// }
// }


// solution(lines)



//! 다른사람의 풀이에서 본 간단한 코드

const lines1 = [[1,2], [1,6], [-7,6]]
function solution(lines1) {
    let line = new Array(200).fill(0);
    console.log('line: ', line);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });
    console.log(line)
    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}

solution(lines1)


//! GPT의 풀이분석

/*
해당 코드는 먼저, 선의 시작점과 끝점을 입력으로 받는 배열 lines를 인자로 받습니다.

javascript
Copy code
function solution(lines) {
  // code here
}
이후, line이라는 길이가 200인 배열을 생성합니다.

javascript
Copy code
let line = new Array(200).fill(0);
그리고 lines 배열에서 하나씩 꺼내어 시작점(a)과 끝점(b)을 추출하고, 이 두 점 사이의 위치에 해당하는 line 배열의 값을 증가시킵니다. 이 과정에서 for문을 사용합니다.

javascript
Copy code
lines.forEach(([a, b]) => {
  for (; a < b; a++) line[a + 100]++;
});
위 코드에서 forEach 메소드는 lines 배열에서 원소를 하나씩 꺼내어, [a, b] 형태로 분해(destructuring)한 뒤, 그 안에서 a는 시작점, b는 끝점을 의미합니다. 이후, for문을 사용하여 line 배열의 인덱스를 a + 100으로 설정하고 해당 값을 증가시킵니다.

이를 통해, line 배열에서 인덱스가 a+100인 곳부터 b+99인 곳까지 해당 선이 지나가는 부분에 대해 1씩 더해진 값을 가지게 됩니다.

마지막으로, line 배열에서 두 번 이상 겹치는 부분의 개수를 반환합니다. 이때, reduce 메소드를 사용합니다. reduce 메소드는 line 배열의 모든 요소를 순회하면서, 누적값인 a와 현재 요소인 c를 가지고 조건문을 실행합니다. 이를 통해, line 배열에서 값이 2 이상인 요소의 개수를 반환합니다.

javascript
Copy code
return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
위 코드에서 reduce 메소드의 초기값은 0입니다. reduce 메소드에서 c > 1인 경우 누적값 a에 1을 더해주고, 그렇지 않은 경우는 a를 반환합니다. 이를 통해, line 배열에서 값이 2 이상인 요소의 개수를 반환합니다.

따라서, 해당 코드는 lines 배열에서 각 선의 시작점과 끝점 사이를 촘촘하게 채운 line 배열에서 값이 2 이상인 요소의 개수를 반환하는 코드입니다.
*/