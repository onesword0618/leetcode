const reformatNumber = require('./../main/reformatNumber.js');
//   Question
//      You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
//      You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:
//         - 2 digits: A single block of length 2.
//         - 3 digits: A single block of length 3.
//         - 4 digits: Two blocks of length 2 each.
//      The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.
//      Return the phone number after formatting.

describe('与えられた文字列を電話番号に変換して返却する', () => {
    describe('reformatNumber(string number)  を実行するとき', () => {
        test('1-23-45 6を入力して123-456が返却されること', () => {
            expect(reformatNumber('1-23-45 6')).toBe('123-456');
        });

        test('123 4-567を入力して123-45-67が返却されること', () => {
            expect(reformatNumber('123 4-567')).toBe('123-45-67');
        });

        test('123 4-5678を入力して123-456-78が返却されること', () => {
            expect(reformatNumber('123 4-5678')).toBe('123-456-78');
        });

        test('12を入力して12が返却されること', () => {
         expect(reformatNumber('12')).toBe('12');
        });

        test('--17-5 229 35-39475を入力して175-229-353-94-75が返却されること', () => {
         expect(reformatNumber('--17-5 229 35-39475')).toBe('175-229-353-94-75');
        });
    });
});