// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120860
// 난이도 : Lv 0, 정답률 73% (2023/03/09 기준)
// 소요시간 : 30분 (생각하고 깨닫는데까지 20분, 작성하는데 10분 이내)
// 풀이방법 : 그림을 그려보니 매우 쉬운 문제인 것을 깨달았다.
            // 배열을 flat()함수로 1차원 배열로 변환
            // x축 y축의 점을 각각 뽑아 배열을 나눔
            // 각 배열의 큰 값에서 작은 값을 빼서 변의 길이를 구함
            // 그리고 두 변의 길이를 곱해 넓이를 구했다.
// 개선할점 : 
    // 1. 예전에 막힌 문제였는데 문제를 잘 읽어보고 그림을 그려보니 매우 쉬운 문제였다.
    // 2. 변수명을 좀 더 직관적으로 정할 필요가 있다.
    // 3. flatMap() 함수를 공부해야한다.

    function solution(dots) {
      let fl = dots.flat();
      let x = [];
      let y = [];
      for(let i = 0; i<fl.length; i++){
          if(i%2===0){
              x.push(fl[i])
          }else{
              y.push(fl[i])
          }
      }
      width= Math.max(...x)-Math.min(...x) 
      height= Math.max(...y)-Math.min(...y)
      return width * height;
  }


//! ChatGPT의 제안

//^ 리팩토링

// 코드 리팩토링을 하기 위해 몇 가지 개선할 점을 살펴보겠습니다.

// flat() 메서드 대신 flatMap() 메서드를 사용합니다.
// 좌표를 객체로 표현하여 좌표별로 x좌표와 y좌표를 모아둡니다. 이를 위해 map() 메서드와 객체 비구조화 할당(destructuring)을 사용합니다.
// Math.min()과 Math.max() 대신, 스프레드 연산자를 사용하여 좌표값 중 최소값과 최대값을 쉽게 구할 수 있습니다.
// 위 세 가지 개선사항을 적용하여 함수를 리팩토링한 결과는 다음과 같습니다.

// javascript
// Copy code
function solution(dots) {
  const coordinates = dots.flatMap(([x, y]) => [{ x, y }]);
  const xValues = coordinates.map(({ x }) => x);
  const yValues = coordinates.map(({ y }) => y);

  const hr = Math.max(...xValues) - Math.min(...xValues);
  const vr = Math.max(...yValues) - Math.min(...yValues);

  return hr * vr;
}
// flatMap() 메서드를 사용하여 다차원 배열을 1차원 배열로 변환합니다. map() 메서드와 객체 비구조화 할당(destructuring)을 사용하여, 좌표를 객체로 표현하고, x 좌표와 y 좌표를 각각 xValues와 yValues 배열에 모아둡니다. 이후 Math.min()과 Math.max() 대신 스프레드 연산자(...)를 사용하여 xValues 배열과 yValues 배열의 최소값과 최대값을 구합니다. 마지막으로, 가로 길이 hr과 세로 길이 vr을 곱하여 사각형의 넓이를 반환합니다.




//^ ai의 새로 작성한 코드
// 배열로 주어진 점들을 2차원 좌표평면 상에 그리고, 가로와 세로 길이를 구하는 방식
// 배열을 2차원 행렬로 변환한 후, 행렬의 크기를 이용하여 가로와 세로 길이를 구하는 방식
// 배열을 x좌표 배열과 y좌표 배열로 분리하여, 가로와 세로 길이를 구하는 방식
// 배열을 객체 배열로 변환한 후, x좌표와 y좌표를 프로퍼티로 갖는 객체 배열을 만들고, 이를 이용하여 가로와 세로 길이를 구하는 방식
// 간편한 방법으로 바꾸어보겠습니다.

// 방법 1: 배열로 주어진 점들을 2차원 좌표평면 상에 그리고, 가로와 세로 길이를 구하는 방식
// javascript
// Copy code
function solution(dots) {
  const xs = dots.map(([x, _]) => x);
  const ys = dots.map(([_, y]) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);
  return width * height;
}
// 방법 2: 배열을 2차원 행렬로 변환한 후, 행렬의 크기를 이용하여 가로와 세로 길이를 구하는 방식
// javascript
// Copy code
function solution(dots) {
  const rows = dots.length;
  const cols = dots[0].length;
  const width = cols - 1;
  const height = rows - 1;
  return width * height;
}
// 방법 3: 배열을 x좌표 배열과 y좌표 배열로 분리하여, 가로와 세로 길이를 구하는 방식
// javascript
// Copy code
function solution(dots) {
  const xs = dots.flatMap(([x, _]) => x);
  const ys = dots.flatMap(([_, y]) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);
  return width * height;
}
// 방법 4: 배열을 객체 배열로 변환한 후, x좌표와 y좌표를 프로퍼티로 갖는 객체 배열을 만들고, 이를 이용하여 가로와 세로 길이를 구하는 방식
// javascript
// Copy code
function solution(dots) {
  const points = dots.flatMap(([x, y]) => ({ x, y }));
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);
  return width * height;
}
// 위 방법들 중에서는 방법 3이 가장 간단한 방법으로 보입니다. 