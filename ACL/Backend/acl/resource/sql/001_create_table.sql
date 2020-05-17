USE ACL;


CREATE TABLE IF NOT EXISTS user_info (
    id                  INT               PRIMARY KEY,
    first_name          VARCHAR(25)    NOT NULL,
    last_name           VARCHAR(25)    NOT NULL,
    email               VARCHAR(64)    NOT NULL UNIQUE,
    password            VARBINARY(128)    NOT NULL,
    is_user_root         TINYINT(1)   NOT NULL DEFAULT 0 ,
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP,
    last_update         DATETIME    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by          INT         NOT NULL DEFAULT 0,
    deleted             TINYINT(1)  NOT NULL DEFAULT 0
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS groups (
    id            INT         AUTO_INCREMENT      PRIMARY KEY,
    group_name           VARCHAR(50)    NOT NULL,            
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP,
    last_update         DATETIME    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by          INT         NOT NULL DEFAULT 0,
    deleted             TINYINT(1)  NOT NULL DEFAULT 0
    
)ENGINE = INNODB CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS permission (
    id    INT     PRIMARY KEY,
    permission_info varchar(20)
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS resources_type(
id INT  PRIMARY KEY,
resource_info varchar(50) NOT NULL
)ENGINE = INNODB CHARACTER SET=utf8;



CREATE TABLE IF NOT EXISTS resources(
    id            INT        AUTO_INCREMENT      PRIMARY KEY,
    resource_type_id    INT    NOT NULL,
    resource_parent INT NOT NULL,
    resource_name    VARCHAR(50)    NOT NULL, 
    resource_path    VARCHAR(100)    NOT NULL, 
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP,
    last_update         DATETIME    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by          INT         NOT NULL DEFAULT 0,
    deleted             TINYINT(1)  NOT NULL DEFAULT 0
)ENGINE = INNODB CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS user_group (
    ug_id       INT     AUTO_INCREMENT      PRIMARY KEY,
    id            INT NOT NULL,
    user_id             INT  NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user_info(id) ,
    FOREIGN KEY(id) REFERENCES groups(id) 
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS user_permission
(
    up_id       INT     AUTO_INCREMENT      PRIMARY KEY,
    resource_id INT NOT NULL,
    id INT NOT NULL,
    permission_id INT NOT NULL,
    FOREIGN KEY(id) REFERENCES user_info(id) ,
    FOREIGN KEY(resource_id) REFERENCES resources(id),
    FOREIGN KEY(permission_id) REFERENCES permission(id) 
)ENGINE = INNODB CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS group_permission
(
    gp_id       INT     AUTO_INCREMENT      PRIMARY KEY,
    resource_id INT NOT NULL,
    id INT  NOT NULL, #group
    permission_id INT NOT NULL,
    FOREIGN KEY(id) REFERENCES groups(id) ,
    FOREIGN KEY(resource_id) REFERENCES resources(id) ,
    FOREIGN KEY(permission_id) REFERENCES permission(id)
)ENGINE = INNODB CHARACTER SET=utf8;
