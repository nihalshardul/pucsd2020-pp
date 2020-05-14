package user

import (
	"log"		
	"context"
	"database/sql"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/driver"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
)

type resourcesRepository struct {
	conn *sql.DB
}

func NewResourcesRepository(conn *sql.DB) *resourcesRepository {
	return &resourcesRepository{conn: conn}
}

func (resources *resourcesRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	log.Printf("Getting context and creating model.Resources object in repository/resources module")
	obj := new(model.Resources)
	return driver.GetById(resources.conn, obj, id)
}

func (resources *resourcesRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.Resources object in repository/resources module")
	usr := obj.(model.Resources)
	result, err := driver.Create(resources.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (resources *resourcesRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	//log.Printf("Getting context and creating model.Resources object in repository/resources module")
	usr := obj.(model.Resources)
	
	err := driver.UpdateById(resources.conn, &usr)
	return obj, err
}

func (resources *resourcesRepository) Delete(cntx context.Context, id int64) error {
	//log.Printf("Getting context and creating model.Resources object repository/resources module")
	obj := &model.Resources{Id: id}
	return driver.SoftDeleteById(resources.conn, obj, id)
}

func (resources *resourcesRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.Resources object repository/resources module")
	obj := &model.Resources{}
	return driver.GetAll(resources.conn, obj, 0, 0)
}
