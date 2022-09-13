CREATE DATABASE miBase;
use miBase;

CREATE TABLE Player (
    PersonID int,
    Name varchar(255),
    Score int,
    Level int
);

insert into Player(PersonID, Name, Score, Level) values (0, "Dan", 10, 20);
insert into Player(PersonID, Name, Score, Level) values (1, "Car", 15, 25);

UPDATE Player
SET Name = 'Alfred Schmidt', Score = 5
WHERE PersonID = 1;

select * from Player;

