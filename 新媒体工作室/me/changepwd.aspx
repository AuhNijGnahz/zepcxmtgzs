<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="changepwd.aspx.cs" Inherits="新媒体工作室.me.changepwd" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="../layui/css/layui.css" rel="stylesheet" />
    <link href="../css/navigation.css" rel="stylesheet" />
    <link href="../css/commen.css" rel="stylesheet" />
    <link href="../css/myindex.css" rel="stylesheet" />
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/commen.js"></script>
    <script src="../layer/layer.js"></script>
    <script src="../js/myindex.js"></script>
    <script src="../js/leftnav.js"></script>
    <title>修改密码 - ZEPC新媒体工作室</title>
</head>
<body>
<body data-page="myindexpage">
    <!--#include file="../templete/include/navigation.html"-->
    <%-- 顶部用户信息部分 --%>
    <!--#include file="../templete/include/myindex/header.html"-->
    <%-- 左侧导航部分 --%>
    <div class="left main" id="leftnav">
        <!--#include file="../templete/include/myindex/leftnav.html"-->
    </div>
    <%-- 左侧导航结束 --%>
    <div id="rightpage" class="right" data-page="changepwd">
        <%-- 基础资料部分 --%>
        <!--#include file="../templete/include/myindex/changepwd.html"-->
        <%-- 基础资料结束 --%>
    </div>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
