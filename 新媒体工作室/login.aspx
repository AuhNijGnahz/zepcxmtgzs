<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="新媒体工作室.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="layui/css/layui.css" rel="stylesheet" />
    <link href="css/login.css" rel="stylesheet" />
    <link href="css/commen.css" rel="stylesheet" />
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="layui/layui.js"></script>
    <script src="js/commen.js"></script>
    <script src="js/login.js"></script>
    <script src="js/navigation.js"></script>
    <title>登录新媒体工作室</title>
</head>
<body data-page="loginpage">
    <!--#include file="templete/include/navigation.html"-->
    <form id="form1" runat="server" class="layui-form" action="">
        <div id="login" class="main">
            <div class="layui-elem-quote">
                <p>带“*”的项目为必填项目</p>
            </div>
            <div class="layui-tab  layui-tab-brief">
                <ul class="layui-tab-title">
                    <li class="layui-this">登录</li>
                    <li>注册</li>
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
                            <label class="layui-form-label"><span style="color: red">*</span>密码：</label>
                            <div class="layui-input-inline">
                                <input type="password" name="password" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
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
                                <a class="layui-btn" id="loginU">登录</a>
                                <a class="forgetpwd" href="/forget.aspx">忘记密码？</a>
                            </div>
                        </div>
                    </div>
                    <div class="layui-tab-item">
                        <div class="layui-tab-item layui-show">
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>学号：</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="regxuehao" lay-verify="required" placeholder="请输入学号" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>姓名：</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="regrealname" lay-verify="required" placeholder="请输入姓名" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>邮箱：</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="regemail" lay-verify="required" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>密码：</label>
                                <div class="layui-input-inline">
                                    <input type="password" name="regpassword" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>确认密码：</label>
                                <div class="layui-input-inline">
                                    <input type="password" name="regconfirmpwd" lay-verify="required" placeholder="确认一遍密码" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label"><span style="color: red">*</span>性别：</label>
                                <div class="layui-input-block">
                                    <input type="radio" name="sex" value="男" title="男" data-sex="1" checked="checked">
                                    <input type="radio" name="sex" value="女" title="女" data-sex="2">
                                </div>
                            </div>
                            <div class="layui-form-item layui-form-pane">
                                <label class="layui-form-label">邀请码：</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="reginvitecode" lay-verify="required" placeholder="请输入邀请码(没有请留空)" autocomplete="off" class="layui-input reginvitecode">
                                </div>
                            </div>

                            <div class="layui-tab-item layui-show">
                                <div class="layui-form-item layui-form-pane">
                                    <label class="layui-form-label"><span style="color: red">*</span>验证：</label>
                                    <div class="layui-input-inline verify">
                                        <input type="text" name="regverify" lay-verify="required" placeholder="答案" autocomplete="off" class="layui-input">
                                    </div>
                                    <div class="layui-form-mid layui-word-aux question"></div>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <div class="layui-input-inline">
                                    <a class="layui-btn" id="Regist">注册</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
