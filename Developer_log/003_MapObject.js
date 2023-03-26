// Map Object

// 1. Map 객체란?
/*
    - JavaScript에서 Map 객체는 key-value 쌍을 저장하는 데 사용되는 내장 데이터 구조입니다. 

    - Map은 일반 객체와 비슷하지만, 다음과 같은 차이점이 있습니다.
        1) 키의 타입: Map의 키는 어떤 타입이든 가능합니다. 일반 객체의 키는 문자열 또는 심볼만 가능합니다.
        2) 순서 보장: Map은 삽입 순서를 유지합니다. 즉, 원소들이 Map에 추가된 순서대로 반복됩니다. 일반 객체는 키의 삽입 순서를 보장하지 않습니다.
        3) 크기 확인: Map은 size 프로퍼티를 사용하여 저장된 원소의 개수를 쉽게 확인할 수 있습니다.

    - Map 객체는 다음과 같은 메서드를 가지고 있습니다.
        1) set(key, value): 새로운 키-값 쌍을 추가합니다.
        2) get(key): 주어진 키에 대한 값을 반환합니다.
        3) has(key): 주어진 키가 Map 안에 있는지 여부를 반환합니다.
        4) delete(key): 주어진 키에 해당하는 값을 Map에서 제거합니다.
        5) clear(): Map 안의 모든 요소를 제거합니다.
        6) keys(): Map 안의 모든 키를 포함하는 Iterator 객체를 반환합니다.
        7) values(): Map 안의 모든 값들을 포함하는 Iterator 객체를 반환합니다.
        8) entries(): Map 안의 모든 키-값 쌍들을 포함하는 Iterator 객체를 반환합니다.

    - Map은 객체와 마찬가지로 반복 가능합니다. for...of 루프를 사용하여 Map의 키, 값 또는 키-값 쌍을 반복할 수 있습니다.
*/
        let map = new Map();
        map.set("key1", "value1");
        map.set("key2", "value2");

        for (let key of map.keys()) {
        console.log('key: ', key);
        }
        // "key1"
        // "key2"

        for (let value of map.values()) {
        console.log('value: ', value);
        }
        // "value1"
        // "value2"

        for (let entry of map.entries()) {
        console.log('entry[0], entry[1]: ', entry[0], entry[1]);
        }
        // "key1" "value1"
        // "key2" "value2"
