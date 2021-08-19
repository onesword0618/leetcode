const reformatDate = require("./../main/reformatDate.js");
//    Question
//       Given a date string in the form Day Month Year, where:
//        - Day is in the set { "1st", "2nd", "3rd", "4th", ..., "30th", "31st" }.
//        - Month is in the set { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" }.
//        - Year is in the range[1900, 2100].
//        - Convert the date string to the format YYYY - MM - DD, where:
//        - YYYY denotes the 4 digit year.
//        - MM denotes the 2 digit month.
//        - DD denotes the 2 digit day.

describe("与えられた日付を別のフォーマッターに変換して返却する", () => {
  describe("reformatDate(string date)  を実行するとき", () => {
    test("date = 20th Oct 2052を引数に2052-10-19が返却されること", () => {
      expect(reformatDate("20th Oct 2052")).toBe("2052-10-19");
    });

    test("date = 6th Jun 1933を引数に1933-06-05が返却されること", () => {
      expect(reformatDate("6th Jun 1933")).toBe("1933-06-05");
    });

    test("date = 26th May 1960を引数に1960-05-25が返却されること", () => {
      expect(reformatDate("26th May 1960")).toBe("1960-05-25");
    });
  });
});
