Ext.define('Demo.view.contextMenu',{
    extend : 'Ext.menu.Menu',
    alias : "widget.contextmenu",
    float : true,
    items : [
        {
            xtype : 'button',
            text : '添加',
            action : 'add',
            iconCls : 'leaf'
        },
        {
            xtype : 'button',
            text : '编辑',
            action : 'edit',
            iconCls : 'leaf'
        },
        {
            xtype : 'button',
            text : '删除',
            action : 'delete',
            iconCls : 'leaf'
        }
    ]
});
//  新增加组件后得在控制器中加入