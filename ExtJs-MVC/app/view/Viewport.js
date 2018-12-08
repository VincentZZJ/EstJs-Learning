// viewport 代表整个浏览器显示区域，该对象渲染到页面的body上
Ext.define('Demo.view.Viewport',{           // 这里是路径配置
    extend : 'Ext.container.Viewport',
//    布局方式为border
    layout : 'border',
    items : [
        {
            title : 'ExtJs-Demo',
            collapsible : true,
            region : 'north',
            height : 100,
            html : '<br/><div style="text-align: center;font:20px bold ">ExtJS-MVC案例</div>'
        },{
            title : 'Options',
            region : 'west',
            collapsible : true,
            width : 180,
            split : true,
            // html : '这里是菜单选项'
            items : [
                {
                    xtype : 'menutree'
                }
            ]

        },{
            id : 'mainContent',
            title : '主题内容显示区',
            layout : 'fit',
            region : 'center',
            xtype : 'tabpanel',
            collapsible : true
            // contentEl : 'contentBox'            // 这里对应显示框中的div
    }
    ]
})