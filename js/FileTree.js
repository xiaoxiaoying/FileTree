/**
 * Created by xiaoxiaoying on 2017/1/17/017.
 */

var FileTree = {
        urlListMap: function (data) {
            let map = new Map();
            data.forEach((items)=> {
                let name = items.name;
                var split = name.split('/');
                split.forEach((split_item, index)=> {

                    if (Utils.isNull(split_item))
                        split_item = '根目录';

                    let hasName = map.has(index + '-' + split_item);
                    if (hasName) {
                        let d = map.get(index + '-' + split_item);
                        let item = d.item_id;
                        item[item.length] = items.id;
                        d['item_id'] = item;
                        map.set(index + '-' + split_item, d);
                    } else {
                        let d = {};
                        let item = [];
                        item[0] = items.id;
                        d['id'] = index;
                        d['item_id'] = item;
                        d['name'] = split_item;
                        // d['child'] = [];
                        map.set(index + '-' + split_item, d);
                    }


                })
            });

            return map;
        },

        dataToTree: function (data, itemId, parent_id) {
            var ret = [];
            data.forEach((item)=> {
                if (item.id == parent_id) {
                    let hasItemId = FileTree.intersectionItemId(item.item_id, itemId);
                    if (hasItemId) {
                        item.children = FileTree.dataToTree(data, item.item_id, item.id + 1);
                        ret.push(item);//把当前项保存到临时数组中
                    }
                }
            });
            return ret;
        },

        intersection: function (id) {
            return id.toString().indexOf(',') == -1;
        },

        intersectionItemId: function (a, b) {
            var hasInter = false;
            if (b.length == 0)
                return true;
            a.forEach((item)=> {
                b.forEach((itemId)=> {
                    if (item == itemId) {
                        hasInter = true;
                        return true;
                    }
                });

            });
            return hasInter;
        },

        getFileSizeAndTime: function (data, v) {
            let size = 0,
                time = 0;
            v.forEach((ids)=> {
                data.forEach((items)=> {
                    if (ids == items.id) {
                        size += items.st_size;
                        if (items.mtime > time)
                            time = items.mtime;
                    }
                });
            });

            let value = {};
            value.size = size;
            value.time = time;
            return value;
        },

        getChildren: function (treeData, name, index) {
            let children = [];
            treeData.forEach((item) => {
                if (item.name == name && item.id == index) {
                    children = item.children;
                    return children;
                } else {
                    if (item.children != undefined && item.children.length != 0 && children.length == 0)
                        children = FileTree.getChildren(item.children, name, index);
                }
            });

            return children;
        },

        getChildrenTree: function (data, treeData, name, index) {
            let children = FileTree.getChildren(treeData, name, index);
            Log.logBlue("children = " + JSON.stringify(children));
            let result = [];
            if (children.length != 0) {
                children.forEach((items)=> {
                    let item = {};
                    let value = FileTree.getFileSizeAndTime(data, items.item_id);
                    item.time = value.time;
                    item.size = value.size;
                    item.ids = items.item_id;
                    item.name = items.name;
                    result.push(item);
                });
            }
            return result;

        }
    }
    ;
