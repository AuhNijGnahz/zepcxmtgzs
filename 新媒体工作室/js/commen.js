/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="cookies.jquery.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layer/layer.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layui/layui.js" />


layui.use('element', function () {
    var element = layui.element();

    //…
});

layui.use('form', function () {
    var form = layui.form();

    //监听提交
});

layui.use('layer', function () {
    var layer = layui.layer;
});

function Logout() {
    $.cookie('CLoginUser', null);
    $.cookie('CLoginUser', null, { path: '/' });
    location.reload();
}
$(function () {
    $('.avatarF').hide();

    $.post('../app_handle/login.ashx', { 'type': 'checklogin' }, function (data) {
        var data = eval('(' + data + ')');
        if (data.Success) {
            $(".uavatar").attr('src', '../images/avatar/default/' + data.Info);
            $(".loginF").hide();
            $('.avatarF').show();
            //$('.avatarF').attr('title','进入个人中心');
        }
        else {
            $(".loginF").show();
            $('.avatarF').hide();
        }
    })
})