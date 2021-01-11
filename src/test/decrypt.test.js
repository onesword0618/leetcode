const decrypt = require('./../main/decrypt');
//      Question
//        You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
//        To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
//         If k > 0, replace the ith number with the sum of the next k numbers.
//         If k < 0, replace the ith number with the sum of the previous k numbers.
//         If k == 0, replace the ith number with 0.
//        As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
//        Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

describe('爆弾の解読コードを複合して返却する', () => {

    describe('decrypt(number[] code, number k) を実行するとき', () => {

       test('code = [5,7,1,4], k = 3 を入力して[12,10,16,13]が返却されること', () => {
        expect(decrypt([5,7,1,4],3)).toEqual(expect.arrayContaining([12,10,16,13]));
       });

       test('code = [1,2,3,4], k = 0 を入力して[0,0,0,0]が返却されること', () => {
        expect(decrypt([1,2,3,4],0)).toEqual(expect.arrayContaining([0,0,0,0]));
       });

       test('code = [2,4,9,3], k = -2 を入力して[12,5,6,13]が返却されること', () => {
        expect(decrypt([2,4,9,3],-2)).toEqual(expect.arrayContaining([12,5,6,13]));
       });
    });
});