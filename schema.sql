DROP DATABASE IF EXISTS eduproject;
CREATE DATABASE eduproject;
USE eduproject;
CREATE TABLE students(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR (50),
    username VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) ,
    secretinfo VARCHAR (150) NOT NULL,
    password VARCHAR (150) NOT NULL,
    email VARCHAR (50) NOT NULL ,
    country VARCHAR (50) ,
    city VARCHAR (50) , 
    address VARCHAR (50) ,
    -- ///
    dreamJob VARCHAR (50) , 
    postalcode VARCHAR (50),
    driving VARCHAR (50) , 
    educationlvl VARCHAR (50)  , 
    feald VARCHAR (50) , 
    -- ////
    dateOfBirth VARCHAR (50) ,
    placeOfBirth VARCHAR (50)  ,
    nationality VARCHAR (50) ,
    summery VARCHAR (500) ,
    socialLink VARCHAR (100) ,
    skills VARCHAR (50)  , 
    languages VARCHAR (50) , 
    hobbies VARCHAR (50) , 
    profilePic VARCHAR (100)  ,
    verification VARCHAR (10)  DEFAULT 'false'  , 
    verRequest VARCHAR (10)   DEFAULT 'false' , 
    firstTime VARCHAR (10)  DEFAULT 'true' ,
    token varchar (300) 
);
CREATE TABLE companies(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (120) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    field VARCHAR (50) ,
    numberOfEmployees VARCHAR (50)  ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    logo VARCHAR (100),
    verification VARCHAR (10) DEFAULT 'false'   , 
    verRequest VARCHAR (10)  DEFAULT 'false'  , 
    firstTime VARCHAR (10)  DEFAULT 'true' ,
    token varchar (300) 

);
CREATE TABLE trainingCenters(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (120) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    trainingOptions VARCHAR (50) ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    numberOfStudentGraduated VARCHAR (50),
    logo VARCHAR (100),
    verification VARCHAR (10)   DEFAULT 'false' , 
    verRequest VARCHAR (10)   DEFAULT 'false' , 
    firstTime VARCHAR (10)   DEFAULT 'true',
    numberOfPosts INTEGER(50) ,
    token varchar (300) 

);

CREATE TABLE post(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) ,
    description VARCHAR(400) ,
    image VARCHAR(100) ,
    type VARCHAR(50) ,
    owner VARCHAR(50) ,
    rate INTEGER(10)  ,
    salary INTEGER(50)   DEFAULT 1, 
    contact VARCHAR(50) ,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);