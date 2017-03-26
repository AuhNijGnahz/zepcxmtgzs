/// <reference path="I:\VSProject\新媒体工作室首页\新媒体工作室\新媒体工作室\layer/layer.js" />
/// <reference path="jquery-3.1.1.min.js" />



$(document).ready(function () {
    var aQuestions = ['1+1=?', '我们是？工作室', '学校简称是ZE ? C'];
    var aAnswers = ['2', '新媒体', 'P'];

    var iNum1 = parseInt(Math.random() * 3);
    $(".question").text(aQuestions[iNum1]);
    //$('input[name="reginvitecode"]').attr("disabled", "disabled");

    $("#loginU").click(function () {
        var xuehao = $('input[name="xuehao"]').val();
        var pwd = $('input[name="password"]').val();
        var verify = $('input[name="verify"]').val();
        if (xuehao == "" || pwd == "") {
            layer.msg("用户名或密码不能为空", { icon: 2 });
        }
        else if (!(verify == aAnswers[iNum1])) {
            layer.msg("验证失败", { icon: 2 });
        }
        else {
            $.post('../app_handle/login.ashx', { 'xuehao': xuehao, 'pwd': pwd, 'type': 'login' }, function (data) {
                var data = eval('(' + data + ')');
                if (data.Success) {
                    layer.msg('登录成功', { icon: 1 });

                    window.location.href = '/me/myindex.aspx';
                }
                else if (data.Success == false) {
                    layer.msg('学号或密码错误', { icon: 2 });
                }
                else {
                    layer.msg('系统错误', { icon: 2 });
                }
            })
        }
    })

    $('input:not(.reginvitecode)').blur(function () {
        var t = $(this).val();
        if (t == '') {
            layer.tips('该项目不能为空', $(this), { tips: [2, '#ff0000'], tipsMore: true });
            $($(this)).addClass('layui-form-danger');
        }
        else {
            var name = $(this).attr('name');
            var str = $(this).val();
            var che;
            switch (name) {
                case "regxuehao":
                    che = /^0\d{9}$/;
                    check(name, che, str, '学号');
                    break;
                case "regrealname":
                    che = /^[\u4e00-\u9fa5]{0,}$/;
                    check(name, che, str, '姓名');
                    break;
                case "regemail":
                    che = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                    check(name, che, str, '邮箱');
                    break;
                case "regpassword":
                    che = /^[a-zA-Z]\w{5,17}$/;
                    check(name, che, str, '密码');
                    break;
            }
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
    }


    $("#Regist").click(function () {
        var xuehao = $('input[name="regxuehao"]').val();
        var realname = $('input[name="regrealname"]').val();
        var email = $('input[name="regemail"]').val();
        var pwd = $('input[name="regpassword"]').val();
        var cpwd = $('input[name="regconfirmpwd"]').val();
        var sex = $('input[name="sex"]:checked').attr("data-sex");
        var verify = $('input[name="regverify"]').val();
        var invitecode = $('input[name="reginvitecode"]').val();

        if (xuehao == "" || realname == "" || email == "" || pwd == "" || cpwd == "" || sex == "" || verify == "") {
            layer.msg("一个或多个必填项目为空，请检查！", { icon: 2 });
        }
        else if (!(cpwd === pwd)) {
            layer.msg('密码不一致！', { icon: 2 });
        }
        else if (!(verify == aAnswers[iNum1])) {
            layer.msg("验证问答错误", { icon: 2 });
        }
        else {
            $.post("../app_handle/reg.ashx", { 'xuehao': xuehao, 'realname': realname, 'email': email, 'pwd': pwd, 'sex': sex, 'invitecode': invitecode }, function (data) {
                if (data === 'ok') {
                    layer.alert('恭喜你注册成功！', { icon: 1 });
                }
                else if (data === 'same') {
                    layer.msg('学号信息已存在，请直接登录', { icon: 2 });
                }
                else if (data === 'empty') {
                    layer.msg('数据缺失', { icon: 2 });
                }
                else if (data === 'limited') {
                    layer.msg('今日注册数量超过上限', { icon: 2 });
                }
                else if (data === 'no') {
                    layer.msg('注册失败，请联系管理员！', { icon: 2 });
                }
                else {
                    layer.msg('系统错误', { icon: 2 });
                }
            })
        }
    })
})