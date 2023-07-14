import {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  NumberArray,
} from "./app";

describe("isPalindrome:", () => {
  test("", () => {
    const res = isPalindrome("sos");
    expect(res).toBe(true);
  });

  test("", () => {
    const res = isPalindrome("");
    expect(res).toBe("empty");
  });

  test("", () => {
    const res = isPalindrome(111);
    expect(res).toBe("there are numbers");
  });
});

describe("calculateFactorial:", () => {
  test("", () => {
    const res = calculateFactorial(3);
    expect(res).toBe(6);
  });

  test("", () => {
    const res = calculateFactorial("");
    expect(res).toBe("empty");
  });

  test("", () => {
    const res = calculateFactorial("sss");
    expect(res).toBe("typeError");
  });
});

describe("capitalizeString:", () => {
  test("", () => {
    const res = capitalizeString("hello hey hi");
    expect(res).toBe("Hello Hey Hi");
  });

  test("", () => {
    const res = capitalizeString("");
    expect(res).toBe("empty");
  });

  test("", () => {
    const res = capitalizeString(123);
    expect(res).toBe("TypeError");
  });

  describe("StringArray:", () => {
    test("", () => {
      const stringArray = new StringArray();
      const res = stringArray.getLongestWord();
      expect(res).toEqual("hello");
    });
  });

  test("", () => {
    const stringArray = new StringArray();
    const res = stringArray.getUniqueWords();
    expect(res).toEqual(["hello", "hey", "hi"]);
  });

  describe("NumberArray:", () => {
    test("", () => {
      const numberArray = new NumberArray();
      const res1 = numberArray.getSum();
      expect(res1).toBe(10);

      const res2 = numberArray.getEvenNumbers();
      expect(res2).toEqual([2, 4]);
    });
  });
});
