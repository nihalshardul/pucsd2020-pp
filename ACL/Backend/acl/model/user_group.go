package model

type UserGroup struct {
	Id            int64  `json:"id,omitempty"   column:"id"`
    UserId            int64  `json:"user_id,omitempty"   column:"user_id"`
    }

func (upergroup *UserGroup) Table() string {
	return "user_group"
}

func (upergroup *UserGroup) String() string {
	return Stringify(upergroup)
}
