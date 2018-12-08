// 控制器负责监听事件，并对某些事件作出相应的动作
Ext.define('Demo.controller.demoController',{
    extend : 'Ext.app.Controller',
//    将相关的视图组件添加进控制器当中
    views : ['Viewport','menuTree','contextMenu'],
    stores : ['menuStore'],
    model : ['menuModel'],
//    通过init函数来对视图组件的监听
    init : function () {
    //    init 函数通过this.control来负责监听
        this.control({
        //    被监听的组件的别名
            'menutree' : {
            //    监听鼠标点击事件，触发相应函数
                itemclick : this.changePage,
            //    监听鼠标右键点击事件
                itemcontextmenu : this.contextMenu
            }
        });
    },
    //页面切换方法
    changePage : function(view , rec , item , index , e){
    // //    获取url地址
    //     var url = rec.get('url');
    //    获取当前节点信息
        var title =  rec.get('text');
    //    获取当前节点的深度
        var leaf  =  rec.get('leaf');
        var tabPanel = Ext.getCmp('mainContent');
    //    子节点才可以打开，父节点不设置相应
        if(leaf == false){      // 数据中父节点存放为0， 0 == false
            return ;
        }
        // 以当前节点的title值来设置为tab的id值，若存在则tab active，若无则新建tab
        var newPanel = tabPanel.getChildByElement(title);
        if(newPanel == null){
            tabPanel.add({
                id : title,
                title : title,
                html : "当前页面是" + title + "<br/><br/>",
                closable : true                     // 意思为是否可删除
            });
        }
        tabPanel.setActiveTab(title);
        // //    将内容显示区的url地址设定为点击对象对应的url
    //     Ext.getDom('contentBox').src = url;
    // //    将显示区的title变更为点击对象对应的title
    //     Ext.getCmp('mainContent').setTitle = title;
    },
    //显示右键菜单方法
    contextMenu : function (tree , record , item , index , e , eOpts) {
    //    阻止浏览器默认右键事件
        e.preventDefault();
        e.stopEvent();
    //    显示右键菜单
        var view = Ext.widget('contextmenu');
        view.showAt(e.getXY());
    }
});