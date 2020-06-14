const lemonadeChange = require('./../main/lemonadeChange.js');
//    Question
//    At a lemonade stand, each lemonade costs $5.
//    Customers are standing in a queue to buy from you, and order one at a time(in the order specified by bills).
//    Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
//    You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
//    Note that you don't have any change in hand at first.
//    Return true if and only if you can provide every customer with correct change.

describe('レモネードのやりとりの金額で全ての顧客に返却できるかどうか判断して返却する', () => {

    describe('lemonadeChange(number[] bills)  を実行するとき', () => {
        test('[5,5,5,10,20] を入力して真を返却すること', () => {
            expect(lemonadeChange([5, 5, 5, 10, 20])).toBeTruthy();
        });

        test('[5,5,10] を入力して真を返却すること', () => {
            expect(lemonadeChange([5, 5, 10])).toBeTruthy();
        });

        test('[10,10] を入力して偽を返却すること', () => {
            expect(lemonadeChange([10, 10])).toBeFalsy();
        });

        test('[5,5,10,10,20] を入力して偽を返却すること', () => {
            expect(lemonadeChange([5, 5, 10, 10, 20])).toBeFalsy();
        });
    });
});