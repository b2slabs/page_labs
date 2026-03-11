CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER
)

INSERT INTO users (name, age)
VALUES
  ("a", 10),
  ("Obama", 60)
UPDATE users
SET name = "Para"
WHERE name = "a"

SELECT * FROM users WHERE age = 10