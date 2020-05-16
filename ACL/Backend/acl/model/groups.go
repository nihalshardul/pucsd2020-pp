package model

type Groups struct {
	Id            int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
	GroupName     string `json:"group_name" column:"group_name"`
	UpdatedBy     int64  `json:"updated_by" column:"updated_by"`
}

func (group *Groups) Table() string {
	return "groups"
}

func (group *Groups) String() string {
	return Stringify(group)
}
