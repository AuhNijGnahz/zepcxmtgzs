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
                case "updateuserinfo":
                    string nickname = context.Request.Form["nickname"];
                    string email = context.Request.Form["email"];
                    string selfdes = context.Request.Form["selfdes"];
                    context.Response.Write(tojson.Serialize(Updateuserinfo(nickname, email, selfdes)));
                    break;
                case "changepwd":
                    string oldpwd = context.Request.Form["oldpwd"];
                    string newpwd = context.Request.Form["newpwd"];
                    context.Response.Write(tojson.Serialize(Updateuserinfo(oldpwd, newpwd)));
                    break;
            }
        }

        private ReturnMessage Updateuserinfo(string nickname, string email, string selfdes)
        {
            UserInfor user = UserInforDAL.CurrentUser();
            if (user != null)
            {
                if (user.Nickname.Length <= 3)
                {
                    user.Nickname = nickname;
                    user.Uemail = email;
                    user.Uselfdes = selfdes;
                }
                else
                {
                    user.Uemail = email;
                    user.Uselfdes = selfdes;
                }

                if (UserInforDAL.m_UserInforDAL.Update(user))
                {
                    rm.Info = "true";
                }
                else
                {
                    rm.Info = "false";
                }
            }
            return rm;
        }
        private ReturnMessage Updateuserinfo(string oldpwd, string newpwd)
        {
            UserInfor user = UserInforDAL.CurrentUser();
            if (user != null)
            {
                if (user.password == oldpwd)
                {
                    user.password = newpwd;
                }
                else
                {
                    rm.Info = "incorrect";
                    return rm;
                }

                if (UserInforDAL.m_UserInforDAL.Update(user))
                {
                    rm.Info = "true";
                }
                else
                {
                    rm.Info = "false";
                }
            }
            return rm;
        }

        public ReturnMessage Getuserinfo()
        {
            UserInfor user = UserInforDAL.CurrentUser();
            List<object> list = new List<object>();
            if (user != null)
            {
                list.Add(user.Nickname);
                list.Add(user.Realname);
                list.Add(user.UIdentity);
                if (user.Udepartment == null)
                {
                    list.Add("-");
                }
                else
                {
                    list.Add(user.Udepartment);
                }
                list.Add(user.Ucash);
                list.Add(getdayoff(user.CreatedTime) + "天");
                list.Add(user.Uemail);
                list.Add(user.Sex);
                list.Add(user.Uselfdes);
                rm.Data = list;
            }
            return rm;
        }

        public int getdayoff(string regtime)
        {
            try
            {
                regtime = regtime.Replace("年", "-");
                regtime = regtime.Replace("月", "-");
                regtime = regtime.Replace("日", "");
                string regT = regtime;
                string NowYear = DateTime.Now.ToString("yyyy");
                string NowMouth = DateTime.Now.ToString("MM");
                string NowDay = DateTime.Now.ToString("dd");
                if (NowMouth.Length == 1)
                {
                    NowMouth = "0" + NowMouth;
                }
                if (NowDay.Length == 1)
                {
                    NowDay = "0" + NowDay;
                }
                string NowT = NowYear + "-" + NowMouth + "-" + NowDay;
                DateTime d1 = Convert.ToDateTime(regT);
                DateTime d2 = Convert.ToDateTime(NowT);
                DateTime d3 = Convert.ToDateTime(string.Format("{0}-{1}-{2}", d1.Year, d1.Month, d1.Day));
                DateTime d4 = Convert.ToDateTime(string.Format("{0}-{1}-{2}", d2.Year, d2.Month, d2.Day));
                int days = (d4 - d3).Days;
                return days;
            }
            catch (Exception)
            {

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