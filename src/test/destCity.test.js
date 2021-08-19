const destCity = require("./../main/destCity.js");
//    Question
//      You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
//      It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

describe("与えられた配列の行き先結果を返却する", () => {
  describe("destCity(string[][] paths)  を実行するとき", () => {
    test('paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]を引数にSao Pauloが返却されること', () => {
      expect(
        destCity([
          ["London", "New York"],
          ["New York", "Lima"],
          ["Lima", "Sao Paulo"],
        ])
      ).toBe("Sao Paulo");
    });
    test('paths = [["B","C"],["D","B"],["C","A"]]を引数にAが返却されること', () => {
      expect(
        destCity([
          ["B", "C"],
          ["D", "B"],
          ["C", "A"],
        ])
      ).toBe("A");
    });
    test('paths = [["A","Z"]]を引数にZが返却されること', () => {
      expect(destCity([["A", "Z"]])).toBe("Z");
    });
  });
});
