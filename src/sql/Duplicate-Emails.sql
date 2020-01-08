Create table If Not Exists Person (Id int,Email varchar(255));
Truncate table Person;
INSERT
    INTO Person (Id,Email)
VALUES ('1', 'a@b.com');

INSERT
    INTO Person (Id,Email)
VALUES ('2', 'c@d.com');

INSERT
    INTO Person (Id,Email)
VALUES ('3', 'a@b.com');

# Question
# Write a SQL query to find all duplicate emails in a table named Person.
# +----+---------+
# | Id | Email |
# +----+---------+
# | 1 | a@b.com |
# | 2 | c@d.com |
# | 3 | a@b.com |
# +----+---------+
# For example, your query should return the following for the above table:
# +---------+
# | Email |
# +---------+
# | a@b.com |
# +---------+
# Note: All emails are in lowercase.
# Answer
# Write your MySQL query statement below
SELECT Email email
FROM Person
GROUP BY email HAVING COUNT(email) > 1;