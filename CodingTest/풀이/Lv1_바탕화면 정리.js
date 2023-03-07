// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
// 난이도 : Lv 1, 정답률 33% (2023/03/07 기준)
// 소요시간 : 2시간 (이리저리 쑤셔보고 생각하고 깨닫는데까지 1시간 40분, 작성하는데 10분..)
// 풀이방법 : x축의 시작과 끝, y축의 시작과 끝을 묶어서 추출
// 개선할점 : 
    // 1. 변수 정의를 최대한으로 줄여야한다.
    // 2. 변수명을 좀 더 직관적으로 정할 필요가 있다.
    // 3. 최댓값 최솟값을 굳이 if 문으로 만들지 말고 push이후 min, max 함수를 사용할 필요가 있다.
    // 4. 그리고 문제를 어렵게 생각하지 말고 좀 더 쉽게 다가가는 연습이 필요할 것 같다.
    // 5. 오랜만에 하니 표준 내장 객체에 대해 많이 까먹기도 했지만 기본기가 턱없이 부족함을 느낌

const wallpaper =
["..........", ".....#....", "......##..", "...##.....", "....#....."]	
function solution(wallpaper) {
    let a1 = 0, a2 = 0, a3 = 0, a4 = 0;
    let answer = [];
    let 세로Array = [];
    let min = 51;
    let max = -1
    // console.log(세로.length, 가로.length);
    for(let i = 0; i<wallpaper.length; i++) {
        if(wallpaper[i].includes("#")){
            세로Array.push(i);
            var now = wallpaper[i].indexOf("#");
            if(min>now) {
                min=now;
            }
            // console.log(min)
            var now2 = wallpaper[i].lastIndexOf("#")
            if(max<now2) {
                max=now2;
            }
            console.log(max);
        }
        // console.log(wallpaper[i])
    }
    a1 = 세로Array[0];
    a2 = min;
    a3 = 세로Array.at(-1)+1
    a4 = max+1

    answer = [a1,a2,a3,a4]
    console.log('answer: ', answer);
}
solution(wallpaper)


//! ChatGPT의 제안
/* 
let wallpaperArr = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];

function getWallpaperInfo() {
  const verticalArray = wallpaperArr.flatMap((row, i) => row.includes("#") ? [i] : []);
  const { left, right } = wallpaperArr.reduce(
    ({ left, right }, row) => {
      const first = row.indexOf("#");
      const last = row.lastIndexOf("#");
      return {
        left: first < 0 ? left : Math.min(left, first),
        right: last < 0 ? right : Math.max(right, last + 1),
      };
    },
    { left: wallpaperArr[0].length, right: 0 }
  );

  return { top: verticalArray[0], left, bottom: verticalArray[verticalArray.length - 1] + 1, right };
}

const wallpaperInfo = getWallpaperInfo();
console.log("answer:", wallpaperInfo);


*/ 