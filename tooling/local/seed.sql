-- minimal schema seed (placeholder)
create table if not exists items(id text primary key, brand text);
insert into items(id, brand) values ('demo-item','OneTrue') on conflict do nothing;
