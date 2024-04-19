import add,{ getNumbers, addArrayNumbers }from './calculator';

test("add test", () => {
    expect(add(1, 2)).toBe(3); // 결과값은 3이 되어야돼.
});

describe("add array number test", () => {
    test("get response!", () => {
      return getNumbers();
    });
  
    test("get numbers!", async () => {
      let res = await getNumbers();
      let data = await res.json();
  
      console.log(data);
  
      expect(data).toStrictEqual([1, 2, 3, 4, 5]);
    });
  
    test("add numbers!", async () => {
      let res = await getNumbers();
      let data = await res.json();
  
      expect(addArrayNumbers(data)).toBe(15);
      console.log(addArrayNumbers(data));
    });
  });


//test - 테스트 슈트  
//it - 단일 테스트 케이스 
//toBe(맞는값) = toequal = not.toBe(틀린값)
// "무엇을 할건지" => expect(함수, 기대값은 이거야)
// runner - jest test runner을 실행하고 있음. by test 명령어