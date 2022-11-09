//^ 객체간 비교
//객체가 아닌 숫자,문자열,불,null,undefined 들은 서로 같을 땐 모두 true를 반환한다.
console.log("'str'=='str': ", 'str'=='str');
console.log("'123'=='123': ", 123==123);
console.log("'false'=='false': ", false==false);
console.log("'null'=='null': ", null==null);
//객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성된다. 같은객체인지 비교하려면 기존 객체를 변수에 저장해두어야 한다.
var a = {name:'zerocho'};
var array = [1,2,a]
console.log('a==array[2] :', a==array[2]); //ture
//^ 참조(reference)와 복사
// 객체를 사용할 때 알아야 하는 개념 중 하나로 참조(reference)가 있다.
// 아래와 같이 b에 a와 같은 값이 저장되어있기 때문에 객체의 속성 값을 바꾸면 변수 a와b 모두 바뀐다.
// 이러한 상황에 변수 a와 b가 같은 객체를 참조(reference)하고 있다고 표현한다.
// 그리고 a,b는 객체 간의 참조 관계가 있다고 표현한다. 
var a = {name:'bori'};
var b = a; //변수 b에 a를 대입했다.
a.name = 'hero';
console.log('b.name: ', b.name);
a.name = 'bora';
console.log('b.name: ', b.name);
// 객체의 값을 대입하는 경우 참조관계가 생기지만, 
// 객체가 아닌 str,num,null,undefined의 경우는 참조관계가 생기지 않는다.
// 즉, a의 값을 변경해도 b값이 변경되지 않으며 b에는 초기 저장값이었던 '메롱'이 그대로 남아있게된다.
// 이러한 상황에서는 복사(copy)라고 표현한다.
var a = '메롱';
var b = a;
a = '아니';
console.log('b: ', b); // 메롱

//^ 문제11 다음과 같이 객체 안에 객체가 있을 때, 'kim' 값에 접근하는 방법?
const dog = {
    name: {
      first: 'bori',
      last: 'kim',
    },
    gender: 'f',
  };
// 정답 : 
console.log(dog.name.last); //kim
console.log(dog['name']['last']); //kim
