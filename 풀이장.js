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


solution(quiz)