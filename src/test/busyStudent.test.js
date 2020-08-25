const busyStudent = require('./../main/busyStudent');
//     Question
//        Given two integer arrays startTime and endTime 
//        and given an integer queryTime.
//        The ith student started doing their homework
//        at the time startTime[i] and finished it at time endTime[i].
//        Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

describe('課題の開始時間と終了時間、実行時間を与えて実行中の生徒の数を返却する', () => {

    test('[1,2,3],[3,2,7],4の引数を渡して1が返却される', () => {
        expect(busyStudent([1,2,3],[3,2,7],4)).toBe(1);
    });

    test('[4],[4],4の引数を渡して1が返却される', () => {
        expect(busyStudent([4],[4],4)).toBe(1);
    });

    test('[4],[4],5の引数を渡して 0が返却される', () => {
        expect(busyStudent([4],[4],5)).toBe(0);
    });

    test('([1,1,1,1],[1,3,2,4],7の引数を渡して0が返却される', () => {
        expect(busyStudent([1,1,1,1],[1,3,2,4],7)).toBe(0);
    });

    test('[9,8,7,6,5,4,3,2,1],[10,10,10,10,10,10,10,10,10],5の引数を渡して 5が返却される', () => {
        expect(busyStudent([9,8,7,6,5,4,3,2,1],[10,10,10,10,10,10,10,10,10],5)).toBe(5);
    });
});