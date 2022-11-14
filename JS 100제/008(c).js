// 객체의 키 이름 중복
// 자바스크립트 객체 (object)
// 아래 출력 값을 입력하시오. (출력값은 공백을 넣지 않습니다.)

let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log('d.weight: ', d.weight);
console.log('d["weight"]: ', d["weight"]);


// 답: 84

// if there are the same key in object,
// it gets the value from the last key(that has the same name)

// how to access object and get the value?
// by using "key", you can access to the object and get value.
// 1. dot notation : d.weight
// 2. bracket notation : d["weight"]

// BUT if the key has white space
// for instance, the key is "post code", you cannot use dot notation
// because you cannot include white space when using dot notation
// you have to use bracket notation

//eg)

let address = {
  country: "South Korea",
  city: "Seoul",
  "post code": 123456,
  street: "9 nice street",
};

let postCode = address["post code"];
console.log('postCode: ', postCode);


const programming = {"java script" : "fun"}
programming.typescript = "funny"
console.table(programming);
// ┌─────────────┬──────────┐
// │   (index)   │  Values  │
// ├─────────────┼──────────┤
// │ java script │  'fun'   │
// │ typescript  │  'funny' │
// └─────────────┴──────────┘

programming.java_script //! undefined
console.log('programming.java_script: ', programming.java_script);

programming["java script"] // fun
console.log('programming["java script"]: ', programming["java script"]);

const keyAsVariable = "java script"

programming[keyAsVariable] // fun
console.log('programming[keyAsVariable]: ', programming[keyAsVariable]);

programming.keyAsVariable //! undefined
console.log('programming.keyAsVariable: ', programming.keyAsVariable);

programming.typescript //funny
console.log('programming.typescript: ', programming.typescript);

programming["typescript"] //funny
console.log('programming["typescript"]: ', programming["typescript"]);

