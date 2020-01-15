Create table If NOT EXISTS seat(id int, student varchar(255));
Truncate table seat;
insert into seat (id, student) values ('1', 'Abbot');
insert into seat (id, student) values ('2', 'Doris');
insert into seat (id, student) values ('3', 'Emerson');
insert into seat (id, student) values ('4', 'Green');
insert into seat (id, student) values ('5', 'Jeames');

-- Question
-- Mary is a teacher in a middle school and she has a table seat storing
-- students' names and their corresponding seat ids.
--
-- The column id is continuous increment.
-- Mary wants to change seats for the adjacent students.
-- Can you write a SQL query to output the result for Mary?
--
-- +---------+---------+
-- |    id   | student |
-- +---------+---------+
-- |    1    | Abbot   |
-- |    2    | Doris   |
-- |    3    | Emerson |
-- |    4    | Green   |
-- |    5    | Jeames  |
-- +---------+---------+
-- For the sample input, the output is:
--
-- +---------+---------+
-- |    id   | student |
-- +---------+---------+
-- |    1    | Doris   |
-- |    2    | Abbot   |
-- |    3    | Green   |
-- |    4    | Emerson |
-- |    5    | Jeames  |
-- +---------+---------+
-- Note:
-- If the number of students is odd, there is no need to change the last one's seat.
--
-- Answer
-- # Write your MySQL query statement below
SELECT
	CASE
		WHEN seat.id % 2 <> 0
            AND seat.id = (
                SELECT
                    COUNT(*)
                FROM
                    seat
                )
            THEN seat.id
		WHEN seat.id % 2 = 0
            THEN seat.id - 1
		ELSE
			seat.id + 1
	END id,
	student
FROM
    seat
ORDER BY id;