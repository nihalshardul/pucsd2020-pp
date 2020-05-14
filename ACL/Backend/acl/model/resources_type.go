package model

type ResourcesType struct {
	Id            int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
	ResourceInfo    string `json:"resource_info" column:"resource_info"`
	
}

func (resourcetype *ResourcesType) Table() string {
	return "resources_type"
}

func (resourcetype *ResourcesType) String() string {
	return Stringify(resourcetype)
}