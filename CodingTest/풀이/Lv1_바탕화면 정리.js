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

//^ 1. 다음은 리팩토링한 코드입니다. 주요 변경 사항은 다음과 같습니다.

    /*
    함수 인자로 전달된 wallpaper 배열을 사용하지 않고, 대신 전역 변수로 선언된 wallpaper 배열을 사용합니다. 함수와 변수의 이름이 같아서 이름 충돌이 발생하는 것 같으므로, 함수 이름을 getWallpaperInfo로 변경합니다.
    변수명을 직관적으로 변경합니다. 예를 들어, a1, a2, a3, a4 변수를 각각 top, left, bottom, right로 변경합니다.
    Array.at() 대신에 배열의 인덱스를 직접 참조합니다.
    console.log()를 제거합니다.
    */

//^ 2. 다음은 코드를 간결하게 변경한 것입니다. 주요 변경 사항은 다음과 같습니다.

    /*
    wallpaperArr 배열을 const 대신 let으로 선언하고, 배열 리터럴에서 배열 요소를 바로 입력합니다.
    verticalArray 배열 대신에 Array.prototype.flatMap() 메서드를 사용하여 세로 방향의 위치 정보를 배열로 추출합니다.
    Array.prototype.reduce() 메서드를 사용하여 좌우 방향의 최소/최대 위치를 계산합니다.
    객체 리터럴을 사용하여 top, left, bottom, right 값을 반환합니다.
    */

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