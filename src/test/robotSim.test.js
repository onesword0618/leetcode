const robotSim = require('./../main/robotSim');
//      Question
//           A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:
//           -2: turn left 90 degrees
//           -1: turn right 90 degrees
//           1 <= x <= 9: move forward x units
//           Some of the grid squares are obstacles. 
//           The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
//           If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)
//           Return the square of the maximum Euclidean distance that the robot will be from the origin.

describe('引数に渡したコマンドと、障害物の配列を渡して、スタート地点から最大ユークリッド距離の2乗を返却する', () => {

    describe('robotSim(commands = [4,-1,3], obstacles = []) を実行するとき', () => {

        test('commands = [4,-1,3], obstacles = []を入力して25が返却されること', () => {
            expect(robotSim([4, -1, 3], [])).toBe(25);
        });

        test('commands = [4,-1,4,-2,4], obstacles = [[2,4]]を入力して65が返却されること', () => {
            expect(robotSim([4, -1, 4, -2, 4], [[2, 4]])).toBe(65);
        });
    });
});