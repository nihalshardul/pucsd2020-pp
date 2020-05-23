package model

type Permission struct {
	Id            int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
   PermissionInfo string `json:"permission_info" column:"permission_info "`
	
}

func (user1 *Permission) Table() string {
	return "permission"
}

func (user1 *Permission) String() string {
	return Stringify(user1)
}