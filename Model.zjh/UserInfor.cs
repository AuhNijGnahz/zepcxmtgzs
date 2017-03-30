using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using com.Model.Base;

namespace Model.zjh
{
    public class UserInfor : BaseModel
    {
        public UserInfor()
        {
            PrimaryKey = "UserID";
            DataBaseName = DataBaseEnum.sq_xmtgzs;
        }

        public int UserID { get; set; }
        public string Xuehao { get; set; }
        public string password { get; set; }
        public string Nickname { get; set; }
        public string Realname { get; set; }
        public int Sex { get; set; }
        public string PhoneNum { get; set; }
        public string Uemail { get; set; }
        public string CreatedTime { get; set; }
        public string Uselfdes { get; set; }
        public string Uavatar { get; set; }
        public string UIdentity { get; set; }
        public string Udepartment { get; set; }
        public int Ucash { get; set; }
        public string RegIP { get; set; }
        public string LoginIP { get; set; }
    }
}
