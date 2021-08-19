const minOperations = require("./../main/minOperations");
//   Question
//      The Leetcode file system keeps a log each time some user performs a change folder operation.
//      The operations are described below:
//      "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
//      "./" : Remain in the same folder.
//      "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
//      You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
//      The file system starts in the main folder, then the operations in logs are performed.
//      Return the minimum number of operations needed to go back to the main folder after the change folder operations.

describe("渡した引数のリストからメインフォルダに戻るための最小操作数を返却する", () => {
  test('"d1/","d2/","../","d21/","./"の引数を渡して2が返却される', () => {
    expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toBe(2);
  });

  test('"d1/","d2/","./","d3/","../","d31/"の引数を渡して3が返却される', () => {
    expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])).toBe(3);
  });

  test('"d1/","../","../","../"の引数を渡して0が返却される', () => {
    expect(minOperations(["d1/", "../", "../", "../"])).toBe(0);
  });
});
