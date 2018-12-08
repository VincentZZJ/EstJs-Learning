//  树形菜单组件
Ext.define('Demo.view.menuTree',{
    extend : 'Ext.tree.Panel',
    alias : 'widget.menutree',      // 别名
    border : false,
//    规定锚链接地址的显示区域
    hrefTarget : 'mainContent',
//    是否显示根节点
    rootVisible : false,
//    数据集
    store : 'menuStore',
//    菜单样式
    bodyStyle : {
        background : '#ffc',
        padding : '10px'
    }
});
// 至此，树形菜单组件已经建立完成，但是没有数据，因此后续得添加数据模型，以及对应的数据集