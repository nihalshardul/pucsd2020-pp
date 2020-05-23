package http

import (
	
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"
	"github.com/go-chi/chi"
	"log"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/handler"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/model"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/repository"
	"github.com/pucsd2020-pp/Access_Control_System_Managment/src/backend/acl/repository/user"
)

type ResourcesType struct {
	handler.HTTPHandler
	repo repository.IRepository
}

func NewResourcesTypeHandler(conn *sql.DB) *ResourcesType {
	//log.Printf("Passing user handler an sql connection to get ResourcesType struct in handler/http/user.ResourcesType")
	return &ResourcesType{
		repo: user.NewResourcesTypeRepository(conn),
	}
}

func(user *ResourcesType) GetHTTPHandler() []*handler.HTTPHandler {
	log.Printf("Http Handler Redirecting to object based on path ..resourcestype.")
	return []*handler.HTTPHandler{
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "resourcestype/{id}", Func: user.GetByID},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "resourcestype", Func: user.Create},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPut, Path: "resourcestype/{id}", Func: user.Update},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodDelete, Path: "resourcestype/{id}", Func: user.Delete},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "resourcestype", Func: user.GetAll},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPatch, Path: "resourcestype/{id}", Func: user.Update},

	}
}
func (user *ResourcesType) GetByID(w http.ResponseWriter, r *http.Request) {
	//log.Printf("Handler")
	var usr interface{}
	//log.Printf("Creating ResourcesType object and Parsing and getting urlpattern")
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}
		
		usr, err = user.repo.GetByID(r.Context(), id)
		break
	}
	log.Printf("Writing response in JSON")
	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *ResourcesType) Create(w http.ResponseWriter, r *http.Request) {
	//log.Printf("Handler")
	//log.Printf("Creating usr object defined in model")
	var usr model.ResourcesType	
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}
		//log.Printf("Now calling Create function Create function with req.context and usr object")

		_, err = user.repo.Create(r.Context(), usr)
		
		break
	}
	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *ResourcesType) Update(w http.ResponseWriter, r *http.Request) {
	//log.Printf("Handler")
	//log.Printf("PATCH/PUT call")
	//log.Printf("Creating usr object defined in handler/http")
	var iUsr interface{}
	id,_ := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	//log.Printf("Update by Id called")
	usr := model.ResourcesType{}
	err := json.NewDecoder(r.Body).Decode(&usr)
	//log.Printf("Decoding request in usr object")
	for {
		if nil != err {
			break
		}
		usr.Id = id
		if nil != err {
			break
		}

		//usr.UpdatedBy = 0
		//log.Printf("Now calling Update function with req.context and usr object")	
		iUsr, err = user.repo.Update(r.Context(), usr)
			if nil != err {
				break
			}
			usr = iUsr.(model.ResourcesType)
			break
		}
		handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (user *ResourcesType) Delete(w http.ResponseWriter, r *http.Request) {
	var payload string
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}
		log.Printf("Now calling  delete with req.context and usr object")
		_,err = user.repo.Delete(r.Context(), id)
		if nil != err {
			break
		}
		payload = "ResourcesType deleted successfully"
		break
	}
	log.Printf("Writing response to JSON")
	handler.WriteJSONResponse(w, r, payload, http.StatusOK, err)
}

func (user *ResourcesType) GetAll(w http.ResponseWriter, r *http.Request) {
	log.Printf("Calling Getall Function")	
	usrs, err := user.repo.GetAll(r.Context())
	handler.WriteJSONResponse(w, r, usrs, http.StatusOK, err)
}
