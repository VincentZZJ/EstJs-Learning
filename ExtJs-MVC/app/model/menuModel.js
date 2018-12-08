// 该文件是树形菜单对应的数据模型
Ext.define('Demo.model.menuModel',{
    extend : 'Ext.data.Model',
    fields : [
        {name : 'id', type : 'int'},
        {name : 'pid', type : 'int'},
        {name : 'text', type : 'varchar'},
        // 当type为布尔值时，后面得跟加一个默认值，否则会出错
        {name : 'leaf' , type : 'boolean' , defaultValue : true},
        {name : 'url' , type : 'varchar'}
    ]
});