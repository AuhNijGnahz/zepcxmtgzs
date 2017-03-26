/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layui/layui.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layer/layer.js" />

$(function () {
    //页面加载时默认样式

    //$('.jiaruxmt').text('已入职');
    //$('.username').append('<span class="rz smrz">实名认证</span>')
    var datapage = $('#rightpage').attr('data-page');
    switch (datapage) {
        case 'basicset':
            $('.basic').parent().addClass('cnav-this').siblings().removeClass('cnav-this');
            break;
        case 'changepwd':
            $('.changepwd').parent().addClass('cnav-this').siblings().removeClass('cnav-this');
            break;
    }

    $.post('../app_handle/login.ashx', { 'type': 'checklogin' }, function (data) {
        var data = eval('(' + data + ')');
        if (data.Success) {
            GetUserInfo();
        }
    })
    $('.cnav').click(function () {
        switch ($(this).children().text()) {
            case '基础资料':
                location.href='../me/myindex.aspx';
                break;
            case '修改密码':
                location.href = '../me/changepwd.aspx';
                break;
        }
    })

    function GetUserInfo() {
        $.post('../app_handle/myindex.ashx?type=getuserinfo', {}, function (data) {
            var data = eval('(' + data + ')');
            $.each(data, function (i, value) {
                var username = value[0];
                var iden = value[1];
                var dep = value[2];
                var cash = value[3];
                var regtime = value[4];
                var email = value[5];
                var sex = value[6];
                var idd;
                switch (iden) {
                    case '1':
                        idd = '管理员';
                        $('.jiaruxmt').addClass('layui-btn-disabled');
                        $('.jiaruxmt').text('已入职');
                        break;
                    case '2':
                        idd = '学生';
                        break;
                    case '3':
                        idd = '正式成员';
                        $('.jiaruxmt').addClass('layui-btn-disabled');
                        $('.jiaruxmt').text('已入职');
                        break;
                    case '4':
                        idd = '外援团成员';
                        $('.jiaruxmt').addClass('layui-btn-disabled');
                        $('.jiaruxmt').text('已入职');
                        break;
                    case '5':
                        idd = '教师';
                        $('.jiaruxmt').addClass('layui-btn-disabled');
                        $('.jiaruxmt').text('无需加入');
                        break;
                    case '6':
                        idd = '已封禁';
                        $('.jiaruxmt').addClass('layui-btn-disabled');
                        $('.jiaruxmt').text('禁止加入');
                        break;
                }
                switch (sex) {
                    case 1:
                        $('.Csex').text('男');
                        break;
                    case 2:
                        $('.Csex').text('女');
                        break;
                    default:
                        $('.Csex').text('性别');
                        break;
                }
                $('.username').text(username);
                $('.myidentity').text(idd);
                $('.mydepartment').text(dep);
                $('.score').text(cash);
                $('.intime').text(regtime);
                $('input[name=email]').val(email);
            })
        })
    }


    $('.chgavatar').css({ 'display': 'none' });
    $('.useravatar').hover(function () {
        $('.chgavatar').css({ 'display': 'inline-block' });
    })

    $('.chgavatar').mouseout(function () {
        $('.chgavatar').css({ 'display': 'none' });

    })
})

//城市选择
