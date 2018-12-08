// 该文件是树形菜单的数据集
Ext.define('Demo.store.menuStore',{
    extend : 'Ext.data.TreeStore',
    defaultRoodId : 'root',
    proxy : {
        type : 'ajax',
        url : './server/data.json',
        reader : 'json',
        autoLoad : true
    }
});
// 数据模型以及数据集添加完成后，可以添加json数据