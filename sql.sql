create database webthaotran;
use webthaotran;

create table if not exists Role
(
	id int primary key auto_increment,
	nameRole varchar(100) not null unique,
    description text not null
);

create table if not exists user
(
	id int primary key auto_increment,
	username varchar(200) unique not null,
    passwordEn varchar(200) not null,
    fullname text not null,
    email varchar(150) not null,
    phone varchar(150) not null,
    address text not null,
    idRole int not null,
    FOREIGN KEY(idRole) REFERENCES Role(id)
)