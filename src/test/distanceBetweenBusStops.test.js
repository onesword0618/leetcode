const distanceBetweenBusStops = require('./../main/distanceBetweenBusStops.js');
//      Question
//           A bus has n stops numbered from 0 to n - 1 that form a circle.
//           We know the distance between all pairs of neighboring stops
//           where distance[i] is the distance between the stops number i and (i + 1) % n.
//           The bus goes along both directions i.e. clockwise and counterclockwise.
//           Return the shortest distance between the given start and destination stops.

describe('バス停間の距離を導出してその値を返却する', () => {

    describe('distanceBetweenBusStops(number[] distance, number start, number destination) を実行するとき', () => {

        test('distance = [1,2,3,4], start = 0, destination = 1 を入力して1が返却されること', () => {
            expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)).toBe(1);
        });

        test('distance = [1,2,3,4], start = 0, destination = 2 を入力して3が返却されること', () => {
            expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)).toBe(3);
        });

        test('distance = [1,2,3,4], start = 0, destination = 3 を入力して4が返却されること', () => {
            expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)).toBe(4);
        });
    });
});