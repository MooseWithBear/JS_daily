// 재귀함수에 대해서.


const 팩토리얼 = num => (num === 0) ? 1 : num * 팩토리얼(num - 1)

// 재귀함수(recursive function)란 자기 자신을 호출하는 함수이다.
// 위 코드에서 팩토리얼 함수는 num을 인자로 받고, num이 0인지 검사한다. 
// num이 0이라면 1을 반환하고, num이 0이 아니라면 자기 자신을 다시 호출하는데, 
// num - 1을 인자로 넘겨주므로 이 과정을 num이 0이 될 때까지 반복하게된다.


//~ 예를 들어 팩토리얼(4)를 계산해본다면,
// 1. num이 0인지 검사. num은 4이므로 0이 아니다. 하지만 당장 팩토리얼(4-1)의 값을 알 수 없으므로 값을 구하러 떠난다.
// 2. 팩토리얼(3)을 호출한다.
// 3. num이 0인지 검사한다. num은 3이므로 0이 아니다. 그리고 팩토리얼(3-1)의 값을 알 수 없으므로 값을 구하러 또다시 떠난다.
// 4. 팩토리얼(2)를 호출한다.
// 5. num이 0인지 검사한다. num은 2이므로 0이 아니다. 그리고 팩토리얼(2-1)의 값을 알 수 없으므로 값을 구하러 또다시 떠난다.
// 6. 팩토리얼(1)을 호출한다.
// 7. num이 0인지 검사한다. num은 1이므로 0이 아니다. 그리고 팩토리얼(1-1)의 값을 알 수 없으므로 값을 구하러 또다시 떠난다.
// 8. 팩토리얼(0)을 호출한다.
// 9. num이 0인지 검사한다. num은 0이므로 1을 반환한다. 팩토리얼(1-1)에 도달하니 1이 반환되었고 더이상 떠날 필요가 없게되었다.
//! 여기서 팩토리얼(4)의 값을 구하기 위한 요소들이 모두 준비되었으므로
//! 이제는 역순으로 연산이 시작되며 각 반환된 값으로 마지막 계산을 하기위해 되돌아가는 여정을 떠난다.
// 10. 팩토리얼(1)은 팩토리얼(0)의 결과값인 1과 num인 1을 곱해서 1을 반환한다.
// 11. 팩토리얼(2)는 팩토리얼(1)의 결과값인 1과 num인 2를 곱해서 2를 반환한다.
// 12. 팩토리얼(3)은 팩토리얼(2)의 결과값인 2와 num인 3을 곱해서 6을 반환한다.
// 13. 팩토리얼(4)는 팩토리얼(3)의 결과값인 6과 num인 4를 곱해서 24를 반환한다.
// 14. 그러므로 팩토리얼(4)의 결과는 24가 된다.



// 재귀함수는 자기 자신을 호출하기 때문에, 재귀함수를 작성할 때는 종료 조건(termination condition)을 
// 반드시 설정해줘야 한다. 종료 조건을 설정하지 않거나, 잘못된 종료 조건을 설정할 경우 
// 재귀함수가 무한정 반복될 수 있다.
// 재귀함수는 코드가 간결해지기도 하고, 이해하기 쉽게 만들 수 있지만, 재귀 깊이가 깊어질수록 
// 재귀함수의 성능이 저하될 수 있다. 
// 이는 재귀함수가 자기 자신을 호출할 때마다 새로운 지역 변수가 생기기 때문이다. 
// 이 지역 변수들은 재귀 과정이 종료될 때까지 스택에 쌓이게 된다. 
// 스택은 제한된 공간이 있기 때문에, 스택이 꽉 차게 되면 스택 오버플로우가 발생할 수 있다.
// 그래서 재귀함수를 작성할 때는 재귀 깊이가 적절하게 제한되도록 주의해야 한다. 
// 재귀 깊이를 제한하는 가장 기본적인 방법은 재귀 깊이를 인자로 받아 그 깊이에 도달할 경우 재귀를 종료하는 것이다.
