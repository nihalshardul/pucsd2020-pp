package user

import (
	"log"		
	"context"
	"database/sql"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/driver"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
)

type usergroupRepository struct {
	conn *sql.DB
}

func NewUserGroupRepository(conn *sql.DB) *usergroupRepository {
	return &usergroupRepository{conn: conn}
}

func (usergroup *usergroupRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	log.Printf("Getting context and creating model.Usergroup object in repository/usergroup module")
	obj := new(model.UserGroup)
	return driver.GetById(usergroup.conn, obj, id)
}

func (usergroup *usergroupRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.Usergroup object in repository/usergroup module")
	usr := obj.(model.UserGroup)
	result, err := driver.Create(usergroup.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (usergroup *usergroupRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.Usergroup object in repository/usergroup module")
	usr := obj.(model.UserGroup)
	
	err := driver.UpdateById(usergroup.conn, &usr)
	return obj, err
}

func (usergroup *usergroupRepository) Delete(cntx context.Context, id int64)(interface{}, error){
	//log.Printf("Getting context and creating model.Usergroup object repository/usergroup module")
	obj := &model.UserGroup{Id: id}
	return driver.DeleteById(usergroup.conn, obj, id)
}

func (usergroup *usergroupRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.Usergroup object repository/usergroup module")
	obj := &model.UserGroup{}
	return driver.GetAll(usergroup.conn, obj, 0, 0)
}
