const fib = require("./../main/fib");

describe("引数を渡して中の関数で計算する", () => {
  test("2を引数として渡して1が返却される", () => {
    expect(fib(2)).toBe(1);
  });

  test("3を引数として渡して2が返却される", () => {
    expect(fib(3)).toBe(2);
  });

  test("4を引数として渡して3が返却される", () => {
    expect(fib(4)).toBe(3);
  });
});
