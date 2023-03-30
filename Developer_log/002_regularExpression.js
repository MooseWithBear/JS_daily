// 정규표현식(Regular expression, regex)

// 1. 정규표현식이란?
    /*
    정규표현식(Regular expression, regex)은 문자열에서 특정한 규칙을 지정하여 검색, 대체, 추출 등의 작업을 수행하는데 사용되는 패턴입니다. 
    
    정규표현식은 일반적으로 문자열의 패턴을 찾거나 대체하는 등의 작업을 수행하는데 매우 유용합니다.
    정규표현식은 다양한 언어에서 사용할 수 있으며, 각 언어에서는 자체적인 구문 및 표현 방식을 가지고 있습니다. 
    대부분의 언어에서 정규표현식을 지원하며, 특히 Perl, Python, Java 등의 스크립트 언어에서 매우 자주 사용됩니다.
    정규표현식은 문자열을 조작하는 매우 강력하고 유연한 도구입니다. 
    그러나 그만큼 복잡한 패턴을 작성할 수도 있으므로, 학습하는 데 시간과 노력이 필요할 수 있습니다. 
    정규표현식의 기본 문법과 사용 방법을 익히면, 문자열 처리를 더욱 쉽고 빠르게 할 수 있습니다.
    */

// 2. 자바스크립트에서의 정규표현식
    // JavaScript에서 정규표현식은 RegExp 객체를 사용하여 작성됩니다. (ex) RegExp.prototype.exec()
    // 정규표현식은 문자열 내에서 특정한 패턴을 찾기 위해 사용되며, 대소문자 구분, 반복, 선택 등의 다양한 기능을 제공합니다.
    // 예를 들어, 다음은 "Hello, World!" 문자열에서 "Hello"라는 단어를 추출하는 정규표현식입니다.

        var str = "Hello, World!";
        var pattern = /Hello/; // 타입은 Object
        var result = pattern.exec(str);
        console.log(result[0]); // 출력 결과: "Hello"
        console.log(result); // 참고

    // 위 코드에서 정규표현식 /Hello/은 문자열 str 내에서 "Hello"라는 패턴을 찾기 위해 사용됩니다. 
    // pattern.exec(str) 메서드는 str 문자열에서 pattern에 해당하는 첫 번째 매치를 찾아 반환합니다. 
    // 결과값인 result는 배열 형태로 반환되며, 첫 번째 요소 [0]은 매치된 문자열 자체인 "Hello"를 나타냅니다.
    // 정규표현식을 사용하면 문자열 내에서 다양한 패턴을 찾을 수 있으며, 이를 활용하여 문자열 처리와 검증에 유용하게 사용할 수 있습니다.

// 3. RegExp
    // RegExp는 JavaScript에서 정규표현식을 다루기 위한 객체입니다. 
    // RegExp 객체는 문자열에서 특정 패턴을 찾기 위해 사용되며, 
    // RegExp 객체의 생성자 함수를 사용하여 정규표현식을 생성할 수 있습니다.

    // RegExp 객체를 생성하는 방법은 다음과 같습니다.

        // 정규표현식 리터럴 사용
        var pattern = /test/;
        var regex = new RegExp(pattern);

        // 문자열을 직접 사용
        var regex2 = new RegExp('test');

    // 위 예제에서 RegExp 생성자 함수는 문자열 또는 정규표현식 패턴을 매개변수로 받습니다. 
    // 위 코드에서는 /test/ 정규표현식을 변수 pattern에 할당한 후, RegExp 객체를 생성하는데 사용합니다. 
    // 또한, RegExp 생성자 함수에 직접 문자열 "test"를 전달하여 regex2 변수에 RegExp 객체를 생성할 수도 있습니다.
    // RegExp 객체는 다양한 메소드를 제공하여 문자열에서 정규표현식을 검색하고, 패턴에 일치하는 문자열을 변경하거나 추출할 수 있습니다. 
    // 일반적으로 RegExp 객체의 메소드 중에서 가장 많이 사용되는 것은 test와 exec 메소드입니다.
        // test: 문자열이 정규표현식 패턴과 일치하는지 여부를 확인합니다.
        // exec: 문자열에서 첫 번째로 일치하는 패턴을 찾아 반환합니다.

    // 예를 들어, 다음은 test 메소드를 사용하여 문자열이 패턴과 일치하는지 여부를 확인하는 예제입니다.

        var regex = /hello/;
        console.log(regex.test("hello, world")); // true
        console.log(regex.test("hi, world")); // false
    
    // 위 예제에서 /hello/ 정규표현식 패턴은 문자열 "hello, world"와 일치하므로 test 메소드는 true를 반환합니다. 
    // 반면, "hi, world"는 일치하지 않으므로 false를 반환합니다.

// 4. 정규표현식 특수문자 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
    /*

    정규표현식에서 사용되는 특수문자는 다양한 의미를 가지며, 특정한 패턴을 나타내기 위해 사용됩니다. 이러한 특수문자 중 일부는 아래와 같습니다.
        ^: 문자열의 시작을 나타냅니다. 예를 들어, /^hello/는 문자열의 시작이 "hello"인 경우에 매치됩니다.
        $: 문자열의 끝을 나타냅니다. 예를 들어, /world$/는 문자열의 끝이 "world"인 경우에 매치됩니다.
        .: 임의의 한 문자를 나타냅니다. 예를 들어, /h.t/는 "hat", "hot", "hit" 등과 일치합니다.
        *: 바로 앞에 있는 문자나 그룹이 0회 이상 반복되는 것을 나타냅니다. 예를 들어, /ha*t/는 "ht", "hat", "haat", "haaat", 등과 일치합니다.
        +: 바로 앞에 있는 문자나 그룹이 1회 이상 반복되는 것을 나타냅니다. 예를 들어, /ha+t/는 "hat", "haat", "haaat", 등과 일치합니다.
        ?: 바로 앞에 있는 문자나 그룹이 0회 또는 1회 나타나는 것을 나타냅니다. 예를 들어, /ha?t/는 "ht", "hat"과 일치합니다.
        []: 대괄호 안에 포함된 문자 중 하나와 일치하는 것을 나타냅니다. 예를 들어, /[abc]/는 "a", "b", "c" 중 하나와 일치합니다.
        [^]: 대괄호 안에 포함된 문자 이외의 것과 일치하는 것을 나타냅니다. 예를 들어, /[^abc]/는 "a", "b", "c" 이외의 문자와 일치합니다.
        (): 그룹을 나타내며, 이를 이용해 패턴을 묶을 수 있습니다. 예를 들어, /(hello)+/는 "hello", "hellohello", "hellohellohello" 등과 일치합니다.
        \: 다음 문자를 이스케이프합니다. 예를 들어, /\+/는 "+" 문자와 일치합니다.
        
    위에서 설명한 특수문자 이외에도 다양한 특수문자가 존재하며, 이를 조합하여 다양한 패턴을 만들어낼 수 있습니다.
    */

// 5. 예시 
    // 정규표현식 활용 예시 1) (https://school.programmers.co.kr/learn/courses/30/lessons/120956/solution_groups?language=javascript)
        function solution(babbling) {
            var answer = 0;
            const regex = /^(aya|ye|woo|ma)+$/;
        
            babbling.forEach(word => {
            if (regex.test(word)) answer++;  
            })
        
            return answer;
        }

    /*
    해당 코드는 입력된 문자열 배열 babbling에서 일정한 패턴을 갖는 문자열의 개수를 반환하는 함수입니다.
        - `var answer = 0;` : //~ 결과값을 저장하기 위한 변수 answer를 0으로 초기화합니다.
        - `const regex = /^(aya|ye|woo|ma)+$/;` : //~ 검사할 문자열이 특정한 패턴을 가지고 있는지 확인하기 위한 정규표현식을 정의합니다. 해당 정규표현식은 "aya", "ye", "woo", "ma" 중 하나가 반복해서 등장하는 문자열에만 매치됩니다. ^는 문자열의 시작을, $는 문자열의 끝을 나타내며, ()는 그룹을 나타냅니다.
        - `babbling.forEach(word => { ... })`: //~ 입력된 문자열 배열 babbling을 순회하며 각 문자열이 정규표현식 regex에 매치되는지 검사합니다. forEach() 메소드는 각 요소에 대해 콜백 함수를 실행합니다. 이때 콜백 함수의 인자 word는 각 요소의 값인 문자열입니다.
        - `if (regex.test(word)) answer++;`: //~ 각 문자열 word가 정규표현식 regex에 매치되는지 검사합니다. test() 메소드는 정규표현식과 매개변수로 주어진 문자열이 매치되는지 여부를 반환합니다. 매치되면 answer 값을 1 증가시킵니다.
        - `return answer;`: //~ 각 문자열에 대한 검사를 모두 마친 후, answer 값을 반환합니다. 이 값은 정규표현식에 매치되는 문자열의 개수입니다.
    */

    /*
        - `^`: 문자열의 시작을 의미합니다.
        - `(aya|ye|woo|ma)`: 괄호 안의 |는 OR 연산자로, aya, ye, woo, ma 중 하나에 매치됨을 의미합니다. 즉, 이 부분은 "aya", "ye", "woo", "ma" 중 하나가 매치됨을 나타냅니다.
        - `+`: 바로 앞에 나온 패턴이 1회 이상 반복됨을 의미합니다.
        - `$`: 문자열의 끝을 의미합니다.
        
        따라서 /^(aya|ye|woo|ma)+$/ 정규표현식은 "aya", "ye", "woo", "ma" 중 하나가 반복해서 등장하는 문자열에만 매치됩니다. 예를 들어, "aya", "wooaya", "mamama"와 같은 문자열은 매치되지만 "ayaya", "hello"와 같은 문자열은 매치되지 않습니다.
    */