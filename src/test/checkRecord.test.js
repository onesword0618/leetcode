const checkRecord = require("./../main/checkRecord.js");
//      Question
//           You are given a string representing an attendance record for a student. The record only contains the following three characters:
//           'A' : Absent.
//           'L' : Late.
//           'P' : Present.
//           A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
//           You need to return whether the student could be rewarded according to his attendance record.

describe("第一引数の文字列に対してあるルールに従って報酬を受け取ることができるかの判定を返却する", () => {
  describe("checkRecord(string s) を実行するとき", () => {
    test("s = PPALLPを入力して真が返却されること", () => {
      expect(checkRecord("PPALLP")).toBeTruthy();
    });

    test("s = PPALLLを入力して偽が返却されること", () => {
      expect(checkRecord("PPALLL")).toBeFalsy();
    });
  });
});
