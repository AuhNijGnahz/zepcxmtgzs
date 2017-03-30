using com.DAL.Base;
using Model.zjh;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.zjh
{
    class UserDetailsDAL : System.Web.UI.Page
    {
        public static BaseDAL<UserDetails> m_UserDetails = new BaseDAL<UserDetails>();
    }
}