DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    entry_id INT GENERATED ALWAYS AS IDENTITY, 
    entry_date VARCHAR(50) NOT NULL, 
    entry_time VARCHAR(30),
    entry_text VARCHAR(500) NOT NULL,
    category VARCHAR(100) NOT NULL
    );

INSERT INTO diary (entry_date, entry_time, entry_text, category)
VALUES
('2023-10-06', '09:47', 'Test entry', 'Personal');