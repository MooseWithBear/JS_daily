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