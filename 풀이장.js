quiz = ["3 - -4 = -3", "5 + 6 = 11"]
function solution(quiz) {
 let result =[]
    // var calc = quiz[0].split(" ").merg
    for(i=0;i<quiz.length; i++){
    var calc = quiz[i].replaceAll(" ", "");
    var ind = calc.indexOf("=")
    var indd = calc.substring(0, ind)
    var inddd = calc.substring(ind+1)
        console.log(indd,inddd)

    if(eval(indd) == inddd) {
        result.push("O")
    }else{
        result.push("X")
    }
    }
            console.log(result); 

}


solution(quiz)quiz = ["3 - -4 = -3", "5 + 6 = 11"]

function solution(quiz) {
  let result = []
  
  for(let i=0; i<quiz.length; i++){
    let calc = quiz[i].replace(/\s+/g, '');
    let ind = calc.indexOf("=")
    let indd = calc.substring(0, ind).replace(/--/g, '+')
    let inddd = calc.substring(ind+1)
    if(eval(indd) == inddd) {
        result.push("O")
    }else{
        result.push("X")
    }
  }
  
  console.log(result)
}

solution(quiz)
