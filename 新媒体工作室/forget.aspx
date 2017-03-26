<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="forget.aspx.cs" Inherits="新媒体工作室.Forget" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="layui/css/layui.css" rel="stylesheet" />
    <%--<link href="css/login.css" rel="stylesheet" />--%>
    <link href="css/navigation.css" rel="stylesheet" />
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="layui/layui.js"></script>
    <script src="js/commen.js"></script>
    <%--<script src="js/login.js"></script>--%>
    <title>登录新媒体工作室</title>
</head>
<body>
        <!--#include file="templete/include/navigation.html"-->
    <form id="form1" runat="server" class="layui-form" action="">
        <div id="login" class="main">
            <div class="layui-elem-quote">
                <p>带“*”的项目为必填项目</p>
                <p>找回密码：学号，姓名，邮箱必须完全匹配才可以找回密码。</p>
            </div>
            <div class="layui-tab  layui-tab-brief">
                <ul class="layui-tab-title">
                    <li class="layui-this">找回密码</li>
                </ul>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <div class="layui-form-item layui-form-pane">
                            <label class="layui-form-label"><span style="color: red">*</span>学号：</label>
                            <div class="layui-input-inline">
                                <input type="text" name="xuehao" lay-verify="required" placeholder="请输入学号" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-form-pane">
                            <label class="layui-form-label"><span style="color: red">*</span>姓名：</label>
                            <div class="layui-input-inline">
                                <input type="text" name="realname" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-form-pane">
                            <label class="layui-form-label"><span style="color: red">*</span>邮箱：</label>
                            <div class="layui-input-inline">
                                <input type="text" name="email" lay-verify="required" placeholder="请输入学号" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-tab-item layui-show">
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>验证：</label>
                                <div class="layui-input-inline verify">
                                    <input type="text" name="verify" lay-verify="required" placeholder="答案" autocomplete="off" class="layui-input">
                                </div>
                                <div class="layui-form-mid layui-word-aux question"></div>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-inline">
                                <a class="layui-btn" id="loginU">立即申请</a>
                            </div>
                            <div class="layui-input-block">
                                <a class="layui-btn layui-btn-primary" id="Back" href="login.aspx">返回登录</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
