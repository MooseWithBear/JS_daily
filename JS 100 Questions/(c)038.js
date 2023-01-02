// # 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**


// 입출력

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

const input = "";
let result = [];
const solution = input => {
    input = input.split(" ").sort((a,b)=>a-b);
    // console.log(input)

    while(Array.from(new Set(result)).length<3 ) {
        pick = input.pop();
        result.push(pick)
        if(result.at(-1) === input.at(-1)) {
            // console.log(pick)
            pick = input.pop();
            result.push(pick)
        }
    }
    console.log(result)
    return console.log(result.length);
}

solution("97 86 75 66 55 97 85 97 97 95")
// solution("44 100 66 88 99 100 100 100")
// solution("99 100 98 97 98 55 23 56 32")
