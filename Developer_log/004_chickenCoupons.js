// 치킨 쿠폰에 대한 고찰

// 1. 고찰이란?
    // 고찰은 연구 결과를 해석하고 분석해내는 것이다. 
    // 고찰의 목표는 연구 및 연구 결과가 무슨 의미가 있는 것뿐만 아니라 서론에 제시한 질문(research question)을 설명하고자 답을 작성해야 완성된다.

    // (GPT) 
    // 고찰이란 무엇인지에 대해 먼저 설명하자면, 고찰은 심사숙고하여 얻은 깊은 생각이나 판단을 내리는 것을 의미합니다. 즉, 주어진 주제나 문제에 대해 깊이 생각하고 분석하여, 그것을 이해하고 판단하는 과정을 말합니다.
    // 고찰은 여러 가지 이점이 있습니다. 
        // - 첫째, 문제를 깊이 이해하고 분석하여 더 나은 해결책을 찾을 수 있습니다. 
        // - 둘째, 자신의 생각과 행동에 대해 더 깊이 고민하게 되어 성숙한 판단을 내릴 수 있습니다. 
        // - 셋째, 자신의 가치관이나 성격 등을 더 잘 이해하게 되어 개인적인 성장에 도움이 됩니다.
    // 하지만 고찰은 쉬운 일이 아닙니다. 많은 시간과 노력을 들여야 하며, 인내와 집중력이 필요합니다. 또한, 주어진 문제나 주제에 대한 배경 지식이나 이해도가 부족하면 제대로 된 고찰이 어려울 수 있습니다.
    // 따라서 고찰을 할 때에는 충분한 준비와 집중력, 그리고 이해도를 높이기 위한 학습과 탐구가 필요합니다. 이러한 노력이 비록 어려울 수 있겠지만, 고찰을 통해 더 나은 생각과 판단을 내릴 수 있으며, 자신의 성장에도 큰 도움이 될 것입니다.

// 2. 치킨 쿠폰의 패턴(공식)에 대해서 (GPT)
    const service = 10; chicken = 1081;
    const solution = chicken => {
        let result = parseInt( (chicken-1) / (service-1));
        return console.log(result)
    }
    solution(chicken)
   
    // 패턴에 대한 기본정보
        /*
        주어진 규칙에 따르면, 
        1. 치킨을 주문할 때마다 쿠폰이 발급되며, 쿠폰을 10장 모으면 한 마리의 치킨을 무료로 받을 수 있습니다. 
        2. 이 때, 새로운 치킨을 시키지 않고 이전에 받은 쿠폰으로 무료로 받은 치킨도 다시 쿠폰이 발급됩니다.
        3. 따라서, 예를 들어 10마리의 치킨을 시키면 1마리의 치킨을 무료로 받고, 1장의 쿠폰이 발급됩니다. 
        4. 이 때, //! 다음에 시킬 치킨 수는 9마리가 됩니다. 
        5. 마찬가지로 service가 20일때는, 20마리의 치킨을 시키면 2마리의 치킨을 무료로 받고, 1장의 쿠폰이 발급되며, 다음에 시킬 치킨 수는 19마리가 됩니다.
        
        따라서, 쿠폰의 수에 따른 치킨 수를 계산하기 위해선 (chicken-1) / (serviceRule-1)이라는 공식을 사용합니다. 이유는 쿠폰 수가 n장이면, 무료로 받은 치킨 수는 n-1마리이기 때문입니다.
        물론, 이러한 수학적인 공식을 일일이 찾기는 어렵습니다. 그러나 비슷한 유형의 문제들이 있다면, 이러한 규칙을 찾아내고 적용하는 능력이 중요합니다. 이를 위해서는 많은 문제를 풀어보고, 자신이 푼 문제들을 되짚어보며 규칙을 찾는 연습이 필요합니다. 수학적인 공식이 아니더라도, 문제를 잘 이해하고 분석하여 규칙을 찾아내는 연습은 프로그래밍에서 매우 중요합니다. 
        */

    // 이 공식이 어떻게 유도되었는지에 대해x