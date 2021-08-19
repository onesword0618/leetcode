const dayOfTheWeek = require("./../main/dayOfTheWeek");

describe("日、月、年を引数にして曜日を返却する \n 範囲は1971-2100", () => {
  test("日=31,月=8,年=2019でSaturdayを返却する", () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday");
  });

  test("日=18,月=7,年=1999でSundayを返却する", () => {
    expect(dayOfTheWeek(18, 7, 1999)).toBe("Sunday");
  });

  test("日=15,月=8,年=1993でSundayを返却する", () => {
    expect(dayOfTheWeek(15, 8, 1993)).toBe("Sunday");
  });
});
