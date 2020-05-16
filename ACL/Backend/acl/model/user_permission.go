package model

type UserPermission struct {
	ResourceId        int64  `json:"resource_id,omitempty" column:"resource_id "`
	Id            int64  `json:"id,omitempty"   column:"id"`
    PermissionId     int64   `json:"permission_id,omitempty"   column:"permission_id"`
}

func (uperpermission *UserPermission) Table() string {
	return "user_permission"
}

func (uperpermission *UserPermission) String() string {
	return Stringify(uperpermission)
}
