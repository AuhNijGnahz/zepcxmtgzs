using com.DAL.Base;
using com.Utility;
using Model.zjh;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DAL.zjh
{
    public class UserInforDAL: System.Web.UI.Page
    {
        public static BaseDAL<UserInfor> m_UserInforDAL = new BaseDAL<UserInfor>();

        public static bool RegLimit()
        {
            bool b = true;
            List<dbParam> list = new List<dbParam>() { new dbParam() { ParamName = "@ClientIP", ParamValue = WebHelp.GetIP() },
                new dbParam() { ParamName = "@Time", ParamValue =  DateTime.Now.ToString("yyyy-MM-dd") }};
            int count = m_UserInforDAL.GetCount(" RegIP=@ClientIP and CONVERT(varchar(100), CreatedTime, 23)=@Time", list);
            if (count >= 3)
            {
                b = false;
            }
            return b;
        }
        public static UserInfor CurrentUser()
        {
            UserInfor user = null;
            if (System.Web.HttpContext.Current.Request.Cookies["CLoginUser"] == null || System.Web.HttpContext.Current.Request.Cookies["CLoginUser"].Value == "")
            {
                return user;
            }
            else
            {
                string strLoginUser = cookieHelper.DecryptCookie(System.Web.HttpContext.Current.Request.Cookies["CLoginUser"].Value);
                string[] aLoginUser = strLoginUser.Split('/');
                if (aLoginUser.Length != 3)
                {
                    user = null;
                }
                if (WebHelp.GetIP() != aLoginUser[0])
                {
                    user = null;
                }
                else
                {
                    user = m_UserInforDAL.GetModel("Xuehao=@xuehao", new List<dbParam>() { new dbParam() { ParamName = "@xuehao", ParamValue = aLoginUser[1].ToString() } });
                    if (user.password != aLoginUser[2])
                    {
                        user = null;
                    }
                }
            }
            return user;
        }
    }

}
