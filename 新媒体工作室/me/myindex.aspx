<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="myindex.aspx.cs" Inherits="新媒体工作室.myindex" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="../layui/css/layui.css" rel="stylesheet" />
    <link href="../css/navigation.css" rel="stylesheet" />
    <link href="../css/commen.css" rel="stylesheet" />
    <link href="../css/myindex.css" rel="stylesheet" />
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/commen.js"></script>
    <script src="../layer/layer.js"></script>
    <script src="../js/myindex.js"></script>
    <title>个人中心 - ZEPC新媒体工作室</title>
</head>
<body data-page="myindexpage">
    <div id="notlog" class="layui-elem-quote layui-main" hidden="hidden">
        <p>
            你尚未登录，无法进行此操作。<br />
            【<a href="../login.aspx">点击此处</a>】返回登录
        </p>
    </div>
    <!--#include file="../templete/include/navigation.html"-->
    <%-- 顶部用户信息部分 --%>
    <!--#include file="../templete/include/myindex/header.html"-->
    <%-- 左侧导航部分 --%>
    <div class="left main" id="leftnav">
        <!--#include file="../templete/include/myindex/leftnav.html"-->
    </div>
    <%-- 左侧导航结束 --%>
    <div id="rightpage" class="right" data-page="basicset">
        <%-- 基础资料部分 --%>
        <!--#include file="../templete/include/myindex/basicset.html"-->
        <%-- 基础资料结束 --%>
    </div>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
