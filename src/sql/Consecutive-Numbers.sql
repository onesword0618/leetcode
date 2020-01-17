Create table If NOT EXISTS Logs (Id int, Num int);
Truncate table Logs;
insert into Logs (Id, Num) values ('1', '1');
insert into Logs (Id, Num) values ('2', '1');
insert into Logs (Id, Num) values ('3', '1');
insert into Logs (Id, Num) values ('4', '2');
insert into Logs (Id, Num) values ('5', '1');
insert into Logs (Id, Num) values ('6', '2');
insert into Logs (Id, Num) values ('7', '2');

-- Question
-- Write a SQL query to find all numbers that appear
-- at least three times consecutively.
--
-- +----+-----+
-- | Id | Num |
-- +----+-----+
-- | 1  |  1  |
-- | 2  |  1  |
-- | 3  |  1  |
-- | 4  |  2  |
-- | 5  |  1  |
-- | 6  |  2  |
-- | 7  |  2  |
-- +----+-----+
-- For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.
--
-- +-----------------+
-- | ConsecutiveNums |
-- +-----------------+
-- | 1               |
-- +-----------------+
--
-- Answer
-- # Write your MySQL query statement below
SELECT
    DISTINCT fst.Num ConsecutiveNums
FROM
    Logs fst
JOIN Logs sec
    ON fst.id = sec.id-1
JOIN Logs thd
    ON fst.id = thd.id-2
WHERE
    fst.Num = sec.Num
AND sec.Num = thd.Num;