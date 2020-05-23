package user

import (
	"log"		
	"context"
	"database/sql"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/driver"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
)

type userpermissionRepository struct {
	conn *sql.DB
}

func NewUserPermissionRepository(conn *sql.DB) *userpermissionRepository {
	return &userpermissionRepository{conn: conn}
}

func (userpermission *userpermissionRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	log.Printf("Getting context and creating model.UserPermission object in repository/userpermission module")
	obj := new(model.UserPermission)
	return driver.GetById(userpermission.conn, obj, id)
}

func (userpermission *userpermissionRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.UserPermission object in repository/userpermission module")
	usr := obj.(model.UserPermission)
	result, err := driver.Create(userpermission.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (userpermission *userpermissionRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.UserPermission object in repository/userpermission module")
	usr := obj.(model.UserPermission)
	
	err := driver.UpdateById(userpermission.conn, &usr)
	return obj, err
}

func (userpermission *userpermissionRepository) Delete(cntx context.Context, id int64) (interface{}, error) {
	//log.Printf("Getting context and creating model.UserPermission object repository/userpermission module")
	obj := &model.UserPermission{Id: id}
	return driver.DeleteById(userpermission.conn, obj, id)
}

func (userpermission *userpermissionRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.UserPermission object repository/userpermission module")
	obj := &model.UserPermission{}
	return driver.GetAll(userpermission.conn, obj, 0, 0)
}
