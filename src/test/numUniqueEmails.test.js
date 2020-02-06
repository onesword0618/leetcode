const numUniqueEmails = require('./../main/numUniqueEmails');

describe('渡されたメールアドレスのリストから正しい形式のメールアドレスの個数を返却する。', () => {

    test('[test.email+alex@leetcode.com, \n test.e.mail+bob.cathy@leetcode.com, \n testemail+david@lee.tcode.com] \n を引数にして2を返却する。', () => {
        expect(numUniqueEmails(
            ["test.email+alex@leetcode.com",
                "test.e.mail+bob.cathy@leetcode.com",
                "testemail+david@lee.tcode.com"
            ]
        )).toBe(2);
    });
});