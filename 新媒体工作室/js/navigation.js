/// <reference path="jquery-3.1.1.min.js" />

$(document).ready(function () {
    $("li").click(function () {
        $(this).addClass('layui-this');
        $(this).siblings().removeClass('layui-this');
    })
    var loc = $('body').attr('data-page');
    switch (loc) {
        case 'indexpage':
            $('#indexpage').addClass('layui-this').siblings.removeClass('layui-this');
            break;
        case 'loginpage':
            $('#loginpage').addClass('layui-this').siblings.removeClass('layui-this');
            break;
        case 'myindexpage':
            $('#myindexpage').addClass('layui-this').siblings.removeClass('layui-this');
            break;
    }
})

