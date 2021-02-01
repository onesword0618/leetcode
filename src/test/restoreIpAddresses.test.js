const restoreIpAddresses = require('./../main/restoreIpAddresses.js');
//    Question
//      Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.
//      A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

describe('IPアドレスを復元した結果を返却する', () => {

   describe('restoreIpAddresses (string s) を実行するとき', () => {

      test('s = 25525511135を入力して["55.255.11.135","55.255.111.35"]が返却されること', () => {
       expect(restoreIpAddresses('5525511135')).toEqual(expect.arrayContaining(['55.255.11.135','55.255.111.35']));
      });

      test('s = 0000を入力して["0.0.0.0"]が返却されること', () => {
       expect(restoreIpAddresses('0000')).toEqual(expect.arrayContaining(['0.0.0.0']));
      });

      test('s = 25525511135を入力して["1.1.1.1]が返却されること', () => {
       expect(restoreIpAddresses('25525511135')).toEqual(expect.arrayContaining(['1.1.1.1']));
      });

      test('s = 010010を入力して[0.10.0.10,0.100.1.0]が返却されること', () => {
       expect(restoreIpAddresses('010010')).toEqual(expect.arrayContaining(['0.10.0.10','0.100.1.0']));
      });
   });
});