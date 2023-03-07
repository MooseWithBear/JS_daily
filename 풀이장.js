const wallpaper =
["..........", ".....#....", "......##..", "...##.....", "....#....."]	
function solution(wallpaper) {
    let a1 = 0, a2 = 0, a3 = 0, a4 = 0;
    let answer = [];
    var 값1 = 51;
    var 값2 = 1;
    var 값3 = 0;
    var 값4 = 0;

    var 가로선 = wallpaper[0];
    var 세로선 = wallpaper;
    console.log(세로선.length, 가로선.length);
    for(let i = 0; i<세로선.length; i++) {
        if(){console.log(i)}
        
    }
    // for(let i=0; i<wallpaper.length; i++) {
    //     let fid = wallpaper[i].split('')
    //     console.log(fid)
    //     let fidd = fid.findIndex(x=>x==="#")
    //     let fidd2 = fid.lastIndexOf("#")
    //     if(fidd > 0) {
    //         if(값1>fidd) {
    //             값1 = fidd
    //         }
    //     }
    //     // console.log(값1)

    //     if(fidd2 > 0) {
    //         if(값2<fidd2) {
    //             값2 = fidd2
    //         }
    //     }

    //     console.log(값1, 값2+1)
    // }
    // // var test = wallpaper.findIndex(x=>x==="#")
    // // console.log(test)
    // let temp = [];

    // for(let i=0; i<wallpaper.length; i++) {
    //     let did = wallpaper[i].split('')
    //     let dd = did.findIndex(x=>x==="#");
    //     if(dd !== -1) {
    //         temp.push(i);
    //     }
    // }
    // l1 = temp[0]
    // l2 = temp.at(-1)+1
    // console.log(temp[0], temp.at(-1)+1)
    
    // l1 = temp[0] ;
    
    // l2 = (temp.at(-1)+1);
    // r1 = 값1;
    // if(값1===51) {
    //     값1 = 1;
    // }
    // r2 = 값2+1;
    // answer = [l1, r1,l2,r2]
    // return answer
}

solution(wallpaper)