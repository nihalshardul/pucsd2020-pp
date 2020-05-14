package model

type GroupPermission struct {
	ResourceId       int64  `json:"resource_id,omitempty" column:"resource_id "`
	Id            int64  `json:"id,omitempty"   column:"id"`
    PermissionId     int64   `json:"permission_id,omitempty"   column:"permission_id"`
}

func (grouppermission GroupPermission) Table() string {
	return "group_permission"
}

func (grouppermission *GroupPermission) String() string {
	return Stringify(grouppermission)
}
