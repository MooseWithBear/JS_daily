const numer1=1;	denom1=2;	numer2=1;	denom2=2;

const solution = (numer1, denom1, numer2, denom2) => {
    let result = [];
    const arr = denom1 >= denom2 ? [[numer2,denom2],[numer1,denom1]] : [[numer1,denom1],[numer2,denom2]]
    // console.log('arr: ', arr);
    if(arr[0][1]===arr[1][1]) { // 분모가 같을때
        let mom = arr[1][1];
        let son1 = arr[0][0]
        let son2 = arr[1][0]
        result = [son1+son2, mom]
    }else { // 분모가 같지 않을 때
            mom = arr[0][1] * arr[1][1];
            son1 = (mom/arr[1][1]) * arr[1][0]
            son2 = (mom/arr[0][1]) * arr[0][0]
            result = [son1+son2,  mom]
    }
    for(let i = result[0]; i > 0; i--) {
        if(result[0]%i===0 && result[1]%i===0) {
            result[0] /= i;
            result[1] /= i;
        }
    }
    console.log(result)
}
solution(numer1, denom1, numer2, denom2)