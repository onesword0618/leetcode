Create table If Not Exists Employee (Id int,
       Name varchar(255),
       Salary int,
       ManagerId int);

Truncate table Employee;
INSERT
  INTO Employee (Id,
       Name,
       Salary,
       ManagerId)
VALUES ('1', 'Joe', '70000', '3');

INSERT
  INTO Employee (Id,
       Name,
       Salary,
       ManagerId)
VALUES ('2', 'Henry', '80000', '4');

INSERT
  INTO Employee (Id,
       Name,
       Salary,
       ManagerId)
VALUES ('3', 'Sam', '60000', 'None');

INSERT
  INTO Employee (Id,
       Name,
       Salary,
       ManagerId)
VALUES ('4', 'Max', '90000', 'None');

# Question
# The Employee table holds all employees including their managers.
# Every employee has an Id, and there is also a column for the manager Id.
#
# +----+-------+--------+-----------+
# | Id | Name  | Salary | ManagerId |
# +----+-------+--------+-----------+
# | 1  | Joe   | 70000  | 3         |
# | 2  | Henry | 80000  | 4         |
# | 3  | Sam   | 60000  | NULL      |
# | 4  | Max   | 90000  | NULL      |
# +----+-------+--------+-----------+
# Given the Employee table, write a SQL query that finds out employees who earn more than their managers. 
# For the above table, Joe is the only employee who earns more than his manager.
#
# +----------+
# | Employee |
# +----------+
# | Joe      |
# +----------+
#
# Answer
# Write your MySQL query statement below
SELECT
 M.Name Employee
FROM
   Employee M JOIN Employee E
ON M.ManagerId = E.Id
AND M.Salary > E.Salary;