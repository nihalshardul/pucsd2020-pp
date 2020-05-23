package user

import (
	"log"		
	"context"
	"database/sql"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/driver"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
)

type resourcestypeRepository struct {
	conn *sql.DB
}

func NewResourcesTypeRepository(conn *sql.DB) *resourcestypeRepository {
	return &resourcestypeRepository{conn: conn}
}

func (resourcestype *resourcestypeRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	log.Printf("Getting context and creating model.ResourcesType object in repository/resourcestype module")
	obj := new(model.ResourcesType)
	return driver.GetById(resourcestype.conn, obj, id)
}

func (resourcestype *resourcestypeRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.ResourcesType object in repository/resourcestype module")
	usr := obj.(model.ResourcesType)
	result, err := driver.Create(resourcestype.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (resourcestype *resourcestypeRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.ResourcesType object in repository/resourcestype module")
	usr := obj.(model.ResourcesType)
	
	err := driver.UpdateById(resourcestype.conn, &usr)
	return obj, err
}

func (resourcestype *resourcestypeRepository) Delete(cntx context.Context, id int64) (interface{}, error){
	//log.Printf("Getting context and creating model.ResourcesType object repository/resourcestype module")
	obj := &model.ResourcesType{Id: id}
	return driver.DeleteById(resourcestype.conn, obj, id)
}

func (resourcestype *resourcestypeRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.ResourcesType object repository/resourcestype module")
	obj := &model.ResourcesType{}
	return driver.GetAll(resourcestype.conn, obj, 0, 0)
}
