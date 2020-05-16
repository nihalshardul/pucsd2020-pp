package user

import (
	"log"		
	"context"
	"database/sql"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/driver"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
)

type grouppermissionRepository struct {
	conn *sql.DB
}

func NewGroupPermissionRepository(conn *sql.DB) *grouppermissionRepository {
	return &grouppermissionRepository{conn: conn}
}

func (grouppermission *grouppermissionRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	log.Printf("Getting context and creating model.GroupPermission object in repository/grouppermission module")
	obj := new(model.GroupPermission)
	return driver.GetById(grouppermission.conn, obj, id)
}

func (grouppermission *grouppermissionRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.GroupPermission object in repository/grouppermission module")
	usr := obj.(model.GroupPermission)
	result, err := driver.Create(grouppermission.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (grouppermission *grouppermissionRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.GroupPermission object in repository/grouppermission module")
	usr := obj.(model.GroupPermission)
	
	err := driver.UpdateById(grouppermission.conn, &usr)
	return obj, err
}

func (grouppermission *grouppermissionRepository) Delete(cntx context.Context, id int64) (interface{}, error){
	//log.Printf("Getting context and creating model.GroupPermission object repository/grouppermission module")
	obj := &model.GroupPermission{Id: id}
	return driver.DeleteById(grouppermission.conn, obj, id)
}

func (grouppermission *grouppermissionRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.GroupPermission object repository/grouppermission module")
	obj := &model.GroupPermission{}
	return driver.GetAll(grouppermission.conn, obj, 0, 0)
}
