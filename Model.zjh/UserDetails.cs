using com.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.zjh
{
    public class UserDetails : BaseModel
    {
        public UserDetails()
        {
            PrimaryKey = "UserID";
            DataBaseName = DataBaseEnum.sq_xmtgzs;
        }

        public int UserID { get; set; }
        public string test { get; set; }
    }
}
