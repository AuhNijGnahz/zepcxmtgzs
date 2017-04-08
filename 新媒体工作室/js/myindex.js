/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layui/layui.js" />
/// <reference path="commen.js" />
/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layer/layer.js" />
$(function () {
    //页面加载时默认样式
    $('#notlog').show().siblings('div').hide();
    //$('.jiaruxmt').text('已入职');
    $.post('../app_handle/login.ashx', { 'type': 'checklogin' }, function (data) {
        var data = eval('(' + data + ')');
        if (data.Success) {
            GetUserInfo();
            $('#notlog').hide().siblings('div').show();
        }
        else {
            $('#notlog').show().siblings('div').hide();
        }
    })

    var datapage = $('#rightpage').attr('data-page');
    switch (datapage) {
        case 'basicset':
            $('.basic').parent().addClass('cnav-this').siblings().removeClass('cnav-this');
            break;
        case 'changepwd':
            $('.changepwd').parent().addClass('cnav-this').siblings().removeClass('cnav-this');
            break;
        case 'smrz':
            $('.shiming').parent().addClass('cnav-this').siblings().removeClass('cnav-this');
            break;
    }

    $('.cnav').click(function () {
        switch ($(this).children().text()) {
            case '基础资料':
                location.href = '../me/myindex.aspx';
                break;
            case '修改密码':
                location.href = '../me/changepwd.aspx';
                break;
            case '实名认证':
                //location.href = '../me/smrz.aspx';
                layer.alert('该功能尚未开放！', { icon: 4, title: '实名认证' });
                break;
        }
    })

    function GetUserInfo() {
        $.post('../app_handle/myindex.ashx?type=getuserinfo', {}, function (data) {
            var data = eval('(' + data + ')');
            $.each(data, function (i, value) {
                var nickname = value[0];
                var realname = value[1];
                var iden = value[2];
                var dep = value[3];
                var cash = value[4];
                var regtime = value[5];
                var email = value[6];
                var sex = value[7];
                var selfdes = value[8];
                var idd;
                var rqid = $('.leftnav li').attr('data-rqid');
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
                //alert(typeof (nickname)+"%%%%"+nickname);
                if (nickname == '' || nickname == null || typeof (nickname) == 'undefined') {
                    $('.username').text(realname);
                }
                else {
                    $('.username').text(nickname);
                    $('input[name=nickname]').attr('disabled', 'disabled');
                    $('input[name=nickname]').val(nickname);
                }
                $('.Crealname').text(realname);
                //$('.Crealname').parent().append('<span class="rz smrz">未认证</span>');
                $('.myidentity').text(idd);
                $('.mydepartment').text(dep);
                $('.score').text(cash);
                $('.intime').text(regtime);
                $('input[name=email]').val(email);
                $('textarea[name=gerenjj]').val(selfdes);
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

    $('input').blur(function () {
        var name = $(this).attr('name');
        var str = $(this).val();
        var che;
        switch (name) {
            case "nickname":
                if ($(this).val().length <= 3 || $(this).val().length >= 16) {
                    layer.tips('昵称长度不符合规范', $(this), { tips: [2, '#ff0000'] });
                    $(this).val('');
                }
                else {
                    che = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
                    check(name, che, str, '昵称');
                }
                break;
            case "email":
                if ($(this).val().length <= 1) {
                    layer.tips('邮箱长度不符合规范', $(this), { tips: [2, '#ff0000'] });
                    $(this).val('');
                }
                else {
                    che = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                    check(name, che, str, '邮箱');
                }
                break;
        }
    })

    function check(name, che, str, text) {
        if (!(che.test(str))) {
            layer.tips(text + '不符合规范', $('input[name=' + name + ']'), { tips: [2, '#ff0000'] });
            $('input[name=' + name + ']').addClass('layui-form-danger');
            $('input[name=' + name + ']').val('');
        }
        else {
            $('input[name=' + name + ']').removeClass('layui-form-danger');
        }
        return;
    }

    $('.btnsave').click(function () {
        var Title = $('.titleT').text();
        switch (Title) {
            case '设置基础资料':
                User_Basicset();
                break;
            case '修改密码':
                User_Changepwd();
                break;
        }
    })

    function User_Basicset() {
        var nickname = $('input[name=nickname]').val();
        var email = $('input[name=email]').val();
        var selfdes = $('textarea[name=gerenjj]').val();
        if (email == '') {
            layer.msg("邮箱不能为空！", { icon: 2 });
            $('input[name=email]').addClass('layui-form-danger');
        }
        else if (selfdes.length >= 141) {
            layer.msg("个人简介太长了，必须在140字符以内！", { icon: 2 });
            $('textarea[name=gerenjj]').addClass('layui-form-danger');
        }
        else {
            $.post('../app_handle/myindex.ashx?type=updateuserinfo', { 'nickname': nickname, 'email': email, 'selfdes': selfdes }, function (data) {
                var data = eval('(' + data + ')');
                if (data.Info == 'true') {
                    layer.alert('修改成功', { icon: 1 });
                }
                else {
                    layer.alert('修改失败', { icon: 2 });
                }
            });
        }
    }
    function User_Changepwd() {
        var oldpwd = $('input[name=oldpwd]').val();
        var newpwd = $('input[name=newpwd]').val();
        var cnpwd = $('input[name=cnewpwd]').val();
        if (newpwd != cnpwd) {
            layer.tips('两次输入的密码不相同', $('input[name=cnewpwd]'), { tips: [2, '#ff0000'] });
        }
        else if (newpwd.length < 8) {
            layer.tips('新密码不符合规范', $('input[name=newpwd]'), { tips: [2, '#ff0000'] });
        }
        else if (oldpwd.length < 8) {
            layer.tips('原密码不符合规范', $('input[name=oldpwd]'), { tips: [2, '#ff0000'] });
        }
        else {
            $.post('../app_handle/myindex.ashx?type=changepwd', { 'oldpwd': oldpwd, 'newpwd': newpwd }, function (data) {
                var data = eval('(' + data + ')');
                switch (data.Info) {
                    case 'incorrect':
                        layer.alert('原密码不符，修改失败！', { icon: 2 });
                        break;
                    case 'true':
                        layer.alert('修改成功！', { icon: 1 });
                        break;
                    case 'false':
                        layer.alert('修改失败，请重试！', { icon: 2 });
                        break;
                }
            })
        }
    }
})

//城市选择
