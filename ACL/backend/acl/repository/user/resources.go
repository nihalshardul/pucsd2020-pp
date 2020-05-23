package user

import (
	"os"
	"path/filepath"
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


func (resources*resourcesRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	usr := obj.(model.Resources)
	if usr.ResourceTypeId == 1 {
	basepath := usr.ResourcePath
	filename := usr.ResourceName 
	dst,_ := os.Create(filepath.Join(basepath, filename, "/"))
	defer dst.Close()
	}
	if usr.ResourceTypeId == 2 {
		basepath := usr.ResourcePath
		foldername := usr.ResourceName
		_, err := os.Stat(filepath.Join(basepath, foldername, "/"))
        if os.IsNotExist(err) {
		errDir := os.MkdirAll(usr.ResourcePath+"/"+usr.ResourceName, 0755)
		if errDir != nil {
			return 0, err
		}
	}

	}
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

func (resources *resourcesRepository) Delete(cntx context.Context, id int64) (interface{}, error) {
	usr := &model.Resources{Id: id}
	/*Lines to delete file over the server*/
	obj := new(model.Resources)
	driver.GetById(resources.conn, obj, id)
	if obj.ResourceTypeId == 1 {
	basepath := obj.ResourcePath
	filename := obj.ResourceName 
	os.Remove(filepath.Join(basepath, filename, "/"))
	}

	if obj.ResourceTypeId == 2 {
		basepath := obj.ResourcePath
		foldername := obj.ResourceName
		_, err := os.Stat(filepath.Join(basepath, foldername, "/"))
	if os.IsNotExist(err)!= true{
		os.Remove(filepath.Join(basepath, foldername, "/"))
	}

	}
	return driver.DeleteById(resources.conn, usr, id)
}

func (resources *resourcesRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	//log.Printf("Getting context and creating model.Resources object repository/resources module")
	obj := &model.Resources{}
	return driver.GetAll(resources.conn, obj, 0, 0)
}
