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