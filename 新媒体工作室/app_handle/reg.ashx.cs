using com.DAL.Base;
using DAL.zjh;
using Model.zjh;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using com.Utility;
using com.Model.Base;
using System.Web.Script.Serialization;

namespace 新媒体工作室.app_handle
{
    /// <summary>
    /// reg 的摘要说明
    /// </summary>
    public class reg : IHttpHandler, IRequiresSessionState
    {
        string Json = "";
        ReturnMessage msg = new ReturnMessage();
        JavaScriptSerializer tojson = new JavaScriptSerializer();
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            string xuehao = context.Request.Form["xuehao"];
            string realname = context.Request.Form["realname"];
            string email = context.Request.Form["email"];
            string pwd = context.Request.Form["pwd"];
            int sex = int.Parse(context.Request.Form["sex"]);
            string invitecode = context.Request.Form["invitecode"];
            string avatar = "default.png";
            if (xuehao == "" || realname == "" || email == "" || pwd == "" || sex == 0)
            {
                context.Response.Write("empty");
            }
            else
            {
                List<dbParam> list = new List<dbParam>() {
                    new dbParam { ParamName="@xuehao",ParamValue=xuehao},
                                        new dbParam { ParamName="@realname",ParamValue=realname},
                                                            new dbParam { ParamName="@email",ParamValue=email}
                };
                if (UserInforDAL.m_UserInforDAL.Exists("Xuehao=@xuehao and Realname=@realname and Uemail=@email", list))
                {
                    context.Response.Write("same");
                }
                else
                {
                    UserInfor user = new UserInfor();
                    user.Xuehao = xuehao;
                    user.Realname = realname;
                    user.Nickname = null;
                    user.Uemail = email;
                    user.password = pwd;
                    user.Sex = sex;
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
                    string NowTime = NowYear + "年" + NowMouth + "月" + NowDay + "日";
                    user.CreatedTime = NowTime;
                    user.Uavatar = avatar;
                    user.UIdentity = "2";
                    user.Ucash = 0;
                    user.RegIP = WebHelp.GetIP();
                    user.LoginIP = WebHelp.GetIP();
                    if (UserInforDAL.m_UserInforDAL.Add(user) > 0)
                    {
                        context.Response.Write("ok");
                    }
                    else
                    {
                        context.Response.Write("no");
                    }
                }

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