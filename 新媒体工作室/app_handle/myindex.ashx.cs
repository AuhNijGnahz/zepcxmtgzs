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
    /// myindex 的摘要说明
    /// </summary>
    public class myindex : IHttpHandler, IRequiresSessionState
    {
        ReturnMessage rm = new ReturnMessage();
        JavaScriptSerializer tojson = new JavaScriptSerializer();
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");

            string type = context.Request["type"].ToString();
            switch (type)
            {
                case "getuserinfo":
                    context.Response.Write(tojson.Serialize(Getuserinfo()));
                    break;
            }
        }

       

        public ReturnMessage Getuserinfo()
        {
            UserInfor user = UserInforDAL.CurrentUser();
            List<object> list = new List<object>();
            if (user != null)
            {
                if (user.Nickname == null)
                {
                    list.Add(user.Realname);
                }
                else
                {
                    list.Add(user.Nickname);
                }
                list.Add(user.UIdentity);
                if (user.Udepartment == null)
                {
                    list.Add("-");
                }
                else {
                    list.Add(user.Udepartment);
                }
                list.Add(user.Ucash);
                list.Add(user.CreatedTime);
                list.Add(user.Uemail);
                list.Add(user.Sex);
                rm.Data = list;
            }
            return rm;
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