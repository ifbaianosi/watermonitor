INSERT INTO hydrometer (id, number, display, updated_at) values (1, '0110551567', 100200, TIMESTAMP WITH TIME ZONE '2022-05-01T17:15:25Z');

INSERT INTO reading (id, created_at, consume, reading, hydrometer_id) values (1, TIMESTAMP WITH TIME ZONE '2022-05-01T17:15:25Z', 200, 100200, 1);

INSERT INTO tank (id, name, description, date, water_level, register_status) values (1, 'portaria', 'Fica na portaria', null, null, null );

