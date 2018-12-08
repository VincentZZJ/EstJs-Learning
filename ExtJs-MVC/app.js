Ext.onReady(function () {
//    开启悬浮提示功能
    Ext.QuickTips.init();
//    开启动态加载问题 (PS:默认是不开启的，需要手动开启，否则开发的很多文件都会找不到而报错)
    Ext.Loader.setConfig({
        enabled : true
    });
//    创建应用程序的实例
    Ext.application({
    //    设定命名空间,全局适用，后面在定义其他组件或文件命名时用到
        name : 'Demo',
    //    指定配置选项    （PS:帮我们指定到app文件夹中）
        appFolder : 'app',
    //    加载控制器
        controllers : ['demoController'],
    //    自动化加载和实例化Viewport文件
        autoCreateViewport : true
    });
});