using com.DAL.Base;
using com.Model.Base;
using com.Utility;
using DAL.zjh;
using Model.zjh;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;

namespace 新媒体工作室.app_handle
{

    /// <summary>
    /// login 的摘要说明
    /// </summary>
    public class login : IHttpHandler, IRequiresSessionState
    {
        ReturnMessage rm = new ReturnMessage();
        JavaScriptSerializer tojson = new JavaScriptSerializer();
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            context.Request.ContentEncoding = Encoding.GetEncoding("utf-8"); //必须加上，否则会产生乱码
            string xuehao = context.Request.Form["xuehao"];
            string pwd = context.Request.Form["pwd"];
            string type = context.Request.Form["type"];

            if (type == "login")
            {
                var result = tojson.Serialize(Login(xuehao, pwd));
                context.Response.Write(result);
            }
            else if (type == "checklogin")
            {
                var result = tojson.Serialize(checklogin());
                context.Response.Write(result);
            }
        }

        public ReturnMessage Login(string a, string b)
        {
            try
            {
                UserInfor user = null;
                List<dbParam> list = new List<dbParam>() {
                new dbParam() { ParamName="@xuehao",ParamValue=a},
                new dbParam() { ParamName="@pwd",ParamValue=b}
            };

                user = UserInforDAL.m_UserInforDAL.GetModel("Xuehao=@xuehao and Password=@pwd", list);

                if (user != null)
                {
                    cookieHelper.SetCookie("CLoginUser", cookieHelper.EncryptCookie(string.Format("{0}/{1}/{2}", WebHelp.GetIP(), user.Xuehao, user.password)), 60);
                    rm.Success = true;
                    rm.Info = user.Uavatar;
                }
                else
                {
                    rm.Success = false;
                }
                return rm;
            }
            catch (Exception em)
            {

                throw;
            }
        }

        public ReturnMessage checklogin()
        {
            try
            {
                if (UserInforDAL.CurrentUser() != null)
                {
                    UserInfor user = UserInforDAL.CurrentUser();
                    rm.Success = true;
                    rm.Info = user.Uavatar;
                }
                else
                {
                    rm.Info = "no";
                }
                return rm;
            }
            catch (Exception)
            {
                rm.Info = "no";
                return rm;
                throw;
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}