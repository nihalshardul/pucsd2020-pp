USE acl;

CREATE TABLE IF NOT EXISTS user (
    user_id                  INT         AUTO_INCREMENT      PRIMARY KEY,
    first_name          CHAR(25)    NOT NULL,
    last_name           CHAR(25)    NOT NULL,
    email               CHAR(64)    NOT NULL UNIQUE,
    password            VARBINARY(128)    NOT NULL,
    contact_number      CHAR(15)    NOT NULL,
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS groups (
    group_id            INT         AUTO_INCREMENT      PRIMARY KEY,
    group_name          CHAR(25)    NOT NULL,            
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS permission (
    permission_id       INT         AUTO_INCREMENT   PRIMARY KEY,
    permission_num      INT    NOT NULL
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS user_group (
    user_id             INT         PRIMARY KEY,
    group_id            INT         PRIMARY KEY,
    permission_num      INT    NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(user_id) On UPDATE CASCADE On DELETE CASCADE,
    FOREIGN KEY(group_id) REFERENCES groups(group_id) On UPDATE CASCADE On DELETE CASCADE,
    FOREIGN KEY(permission_num) REFERENCES permission(permission_num)
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS dir (
    dir_id           INT         AUTO_INCREMENT   PRIMARY KEY,
    path_name           CHAR(100)   NOT NULL,
    user_id             INT         PRIMARY KEY,
    permission_num      INT    NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(user_id) On UPDATE CASCADE On DELETE CASCADE,
    FOREIGN KEY(permission_num) REFERENCES permission(permission_num)
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS files (
    file_id             INT         AUTO_INCREMENT   PRIMARY KEY,
    path_name           CHAR(100)   NOT NULL 
    user_id             INT         PRIMARY KEY,
    permission_num      INT    NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(user_id) On UPDATE CASCADE On DELETE CASCADE,
    FOREIGN KEY(permission_num) REFERENCES permission(permission_num)
)ENGINE = INNODB CHARACTER SET=utf8;

