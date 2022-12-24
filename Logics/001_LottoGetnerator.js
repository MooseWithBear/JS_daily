function getWinNumbers () {
    const drawNumbers = 6 
    const allNumbers = 45 
    const candidate = Array(allNumbers).fill().map((x,y)=>y+1);
    const shuffle = []

    while (candidate.length>0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, drawNumbers).sort((a,b) => a-b);

    console.log('candidate: ', candidate);
    console.log('shuffle: ', shuffle);
    console.log('winNumbers: ', winNumbers);
    console.log('bonusNumber: ', bonusNumber);
}

getWinNumbers();



// for (let i = 0; i < drawNumbers; i++) {
//     let number = Math.floor(Math.random() * allNumbers) + 1;

//     // Ensure there are no duplicate numbers
//     while (winNumbers.indexOf(number) !== -1) {
//         number = Math.floor(Math.random() * allNumbers) + 1;
//     }

//     winNumbers.push(number);
// }

// winNumbers.sort((a, b) => a - b);

// const bonusNumber = Math.floor(Math.random() * allNumbers) + 1;

// console.log('winNumbers:', winNumbers);
// console.log('bonusNumber:', bonusNumber);