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