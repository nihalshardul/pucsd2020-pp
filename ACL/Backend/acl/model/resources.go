package model

type Resources struct {
	Id             int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
	ResourceTypeId int    `json:"resource_type_id" column:"resource_type_id"`
	ResourceName   string `json:"resource_name" column:"resource_name"`
	ResourcePath   string `json:"resource_path" column:" resource_path"`
	UpdatedBy      int64  `json:"updated_by" column:"updated_by"`
}

func (resources *Resources) Table() string {
	return "resources"
}

func (resources *Resources) String() string {
	return Stringify(resources)
}
