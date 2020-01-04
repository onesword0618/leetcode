# SQL Schema
Create table Person (
    PersonId int,
    FirstName varchar(255),
    LastName varchar(255)
);

Create table Address (
    AddressId int,
    PersonId int,
    City varchar(255),
    State varchar(255)
);

Truncate table Person;

INSERT INTO
    Person (PersonId, LastName, FirstName)
VALUES
    ('1', 'Wang', 'Allen') Truncate table Address;

INSERT INTO
    Address (
        AddressId,
        PersonId,
        City,
        State
    )
VALUES
    ('1', '2', 'New York City', 'New York');

# Question
# Write a SQL query for a report that
# provides the following information for each person in the Person table,
# regardless if there is an address for each of those people:
# FirstName, LastName, City, State
#
# Answer
# Write your MySQL query statement below
SELECT
    FirstName,
    LastName,
    City,
    State
FROM
    Person
    LEFT OUTER JOIN Address ON Person.PersonId = Address.PersonId;