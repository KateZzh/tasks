const {
  doDegree,
  multiply,
  doSum,
  findProduct,
  doUnique,
  doCount,
  doubleValues,
  doArrEvenVal,
  convertArr
} = require("./app");

describe("doDegree:", () => {
  test("", () => {
    const result = doDegree(2, 3);
    expect(result).toBe(8);
  });

  test("", () => {
    const result = doDegree("2", "3");
    expect(result).toBe("arguments aren't numbers");
  });

  test("", () => {
    const result = doDegree(2, "3");
    expect(result).toBe("arguments aren't numbers");
  });

  test("", () => {
    const result = doDegree("2", 3);
    expect(result).toBe("arguments aren't numbers");
  });
});

describe("multiply", () => {
  test("", () => {
    const result = multiply([1, 2, 3]);
    expect(result).toBe(6);
  });

  test("", () => {
    const result = multiply([]);
    expect(result).toBe("array is empty");
  });

  test("", () => {
    const result = multiply([1, "2", 3]);
    expect(result).toBe("elements array not a number");
  });

  test("", () => {
    const result = multiply("");
    expect(result).toBe("this not array");
  });
});

describe("doSum", () => {
  test("", () => {
    const result = doSum([3, 3, 3]);
    expect(result).toBe(9);
  });

  test("", () => {
    const result = doSum([]);
    expect(result).toBe("array is empty");
  });

  test("", () => {
    const result = doSum([3, "3", 3]);
    expect(result).toBe("elements array not a number");
  });

  test("", () => {
    const result = doSum("");
    expect(result).toBe("this not array");
  });
});

describe("findProduct:", () => {
  const array = [
    { id: 1, title: "Часы", count: 10, price: 500, producer: "Германия" },
    { id: 2, title: "Смартфон", count: 33, price: 1500, producer: "Германия" },
    { id: 3, title: "Моноблок", count: 6, price: 2200, producer: "Германия" },
    { id: 4, title: "Ноутбук", count: 13, price: 3000, producer: "Китай" },
    { id: 5, title: "Планшет", count: 22, price: 2100, producer: "Китай" },
    { id: 6, title: "Телевизор", count: 4, price: 4100, producer: "Германия" },
    {
      id: 7,
      title: "Холодильник",
      count: 11,
      price: 2400,
      producer: "Германия",
    },
  ];

  test("", () => {
    const result = findProduct(array);
    expect(result).toEqual([
      {
        id: 2,
        title: "Смартфон",
        count: 33,
        price: 1500,
        producer: "Германия",
      },
      {
        id: 7,
        title: "Холодильник",
        count: 11,
        price: 2400,
        producer: "Германия",
      },
    ]);
  });

  test("", () => {
    const newArr = array;
    newArr[0].count = "";
    const result = findProduct(newArr);
    expect(result).toBe("count isn't a number");
  });

  test("", () => {
    const arr = `[
      { "id": 1, "title": "Часы", "count": 10, "price": 500, "producer": "Германия" },
      { "id": 2, "title": "Смартфон", "count": 33, "price": 1500, "producer": "Германия" }
    ]`;
    const newArr = JSON.parse(arr);
    newArr[0].producer = 10;

    const result = findProduct(newArr);
    expect(result).toBe("producer isn't a string");
  });
});

describe("doUnique:", () => {
  test("", () => {
    const array = [
      "+375291111111",
      "+375291111111",
      "+375291111112",
      "+375291111111",
    ];
    const result = doUnique(array);
    expect(result).toEqual(["+375291111111", "+375291111112"]);
    expect(result).toHaveLength(2);
  });

  test("", () => {
    const array = [
      "+375291",
      "+375291111111",
      "+375291111112",
      "+375291111111",
    ];
    const result = doUnique(array);
    expect(result).toBe("incorrect number");
  });
});

describe("doCount:", () => {
  test("", () => {
    const obj = { box1: 1, box2: 2, box3: 3 };

    const result = doCount(obj);
    expect(result).toBe(3);
  });

  test("", () => {
    const obj = {};

    const result = doCount(obj);
    expect(result).toBe("empty");
  });
});

describe("doubleValues:", () => {
  test("", () => {
    const obj = { box1: 1, box2: 2, box3: 3 };

    const result = doubleValues(obj);
    expect(result).toEqual({ box1: 2, box2: 4, box3: 6 });
  });

  test("", () => {
    const obj = {};

    const result = doubleValues(obj);
    expect(result).toBe("empty");
  });

  test("", () => {
    const obj = { box1: 1, box2: "aaa", box3: 3 };

    const result = doubleValues(obj);
    expect(result).toBe("not a number");
  });
});

describe("doArrEvenVal:", () => {
  test("", () => {
    const obj = { num1: 1, num2: 2, num3: 3, num4: 4 };

    const result = doArrEvenVal(obj);
    expect(result).toEqual([2, 4]);
  });

  test("", () => {
    const obj = {};

    const result = doArrEvenVal(obj);
    expect(result).toBe("empty");
  });

  test("", () => {
    const obj = { num1: 1, num2: 2, num3: "a", num4: 4 };
    const result = doArrEvenVal(obj);
    expect(result).toBe("element isn't a number");
  });

  test("", () => {
    const obj = { num1: 1, num2: 3, num3: 1, num4: 7 };

    const result = doArrEvenVal(obj);
    expect(result).toBe("array contains no even numbers");
  });
});

describe("convertArr:", () => {
  test("", () => {
    const str = 'AAAABBBCCDAABBB';

    const result = convertArr(str);
    expect(result).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  })

  test("", () => {
    const str = "";

    const result = convertArr(str);
    expect(result).toBe("empty");
  })

  test("", () => {
    const str = 12;

    const result = convertArr(str);
    expect(result).toBe("not a string");
  })
})
