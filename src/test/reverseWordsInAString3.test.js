const reverseWordsInAString3 = require('./../main/reverseWordsInAString3');

describe('与えられた単語が反転する', () => {

    test('Lets take LeetCode contestで各単語を反転したのを返却する', () => {
        expect(reverseWordsInAString3("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    });
});