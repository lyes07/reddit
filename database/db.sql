create type del as ENUM('true','false');

create table users(
    id BIGSERIAL primary key,
    name varchar(60) not null,
    age int not null,
    email varchar(100) not null,
    password varchar(255) not null,
    created_at timestamp with time zone default now(),
    deleted del default 'false',
    constraint uk_users_name unique (name),
    constraint uk_users_email unique (email)
);

insert into users(name,age,email,password) values ('lyes',20,'lyes@gmail.com','$2a$10$n/KIoMhoKpPO3CjcbZhlJeMdY38QCbGFBpvvd/wV6eI/ADkVLpCn2');

create table categorys(
    id serial primary key,
    name varchar(100) not null, 
    constraint uk_categorys_name unique (name)
);

create table posts(
    id BIGSERIAL primary key,
    user_id bigint not null,
    description text not null,
    image text,
    category int not null,
    posted_at timestamp with time zone default now(),
    deleted del default 'false',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category) REFERENCES categorys(id)
);

create table comments(
    id BIGSERIAL primary key,
    post_id bigint not null,
    user_id bigint not null,
    description text not null,
    commented_at timestamp with time zone default now(),
    deleted del default 'false',
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

// All  categorys

insert into categorys(name) values('Gaming');
insert into categorys(name) values('Sports');
insert into categorys(name) values('News');
insert into categorys(name) values('Movies');
insert into categorys(name) values('Novels');
insert into categorys(name) values('Art');
insert into categorys(name) values('Programming');

