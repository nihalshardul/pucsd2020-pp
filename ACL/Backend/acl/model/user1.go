package model

type User1 struct {
	Id         int64  `json:"id,omitempty" key:"primary"  column:"id"`
	FirstName  string `json:"first_name" column:"first_name"`
	LastName   string `json:"last_name" column:"last_name"`
	Email      string `json:"email" column:"email"`
	Password   string `json:"password" column:"password"`
	IsUserRoot int    `json:" is_user_root " column:"is_user_root"`
	UpdatedBy  int64  `json:"updated_by" column:"updated_by"`
}

func (user1 *User1) Table() string {
	return "user_info"
}

func (user1 *User1) String() string {
	return Stringify(user1)
}
