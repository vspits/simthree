create table users (
    id serial primary key,
    username varchar(20) not null unique,
    password varchar(200) not null,
    profile_pic varchar(500),
);

create table posts (
    post_id serial primary key,
    title varchar(60) not null,
    content varchar(500) not null,
    post_pic varchar(500),
    author varchar(20) not null
);