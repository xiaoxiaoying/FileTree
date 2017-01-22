/**
 * Created by xiaoxiaoying on 2017/1/22/022.
 */
(function () {
    class FS {
        constructor(app) {
            this.app = app;
        }

        init() {
            this.file_list = new Vue({
                el: '#file-list',
                data: {
                    data: []
                },
                filters: {
                    formatSize: formatSize,

                    formatTime: function (t) {
                        return new Date(t * 1000).toLocaleString();
                    }
                },
                methods: {}
            });
        }

        initData() {
            this.data = Utils.getFileData();
            let map = FileTree.urlListMap(this.data);
            let data = [];
            map.forEach((value, key)=> {
                data.push(value);
            });

            var tree = FileTree.dataToTree(data, [], 0);
            Log.logBlue("tree = " + JSON.stringify(tree));
            const html = this.loadTree(tree, false);
            Log.logBlue("html == " + html);
            $('.left-list').append(html);
            this.ulList(tree);
        }

        ulList(treeData) {
            let self = this;
            $(".left-list").find("li").not(":has(ul)").children("a").css({
                textDecoration: "none",
                color: "#333",
                background: "none"
            }).click(function () {
                // $(this).get(0).location.href = "'" + $(this).attr("href") + "'";
                $(this).get(0).html()
                Utils.Toast($(this).html());
            });
            $(".left-list").find("li:has(ul)").children("a")
                .click(function () {
                    if ($(this).next("ul").is(":hidden")) {
                        $(this).next("ul").slideDown("slow");
                        $(this).attr('class', 'icon-chevron-down');
                        if ($(this).parent("li").siblings("li").children("ul").is(":visible")) {
                            $(this).parent("li").siblings("li").find("ul").slideUp("1000");
                            $(this).parent("li").siblings("li:has(ul)").children("a")
                                .end().find("li:has(ul)").children("a");
                        }
                        Log.logBlue("  =====  " + $(this).html() + "  id = " + $(this).attr("href"));


                        let rightData = FileTree.getChildrenTree(self.data, treeData, $(this).html(), $(this).attr("href").replace('#', ''));
                        Log.logBlue("right data = " + JSON.stringify(rightData));
                        self.setFileData(rightData);

                        return false;
                    } else {
                        $(this).next("ul").slideUp("normal");
                        //不用toggle()的原因是为了在收缩菜单的时候同时也将该菜单的下级菜单以后的所有元素都隐藏
                        $(this).next("ul").children("li").find("ul").fadeOut("normal");
                        $(this).attr('class', 'icon-chevron-right');
                        return false;
                    }
                });
        }

        loadTree(data, cls) {
            const ul = $('<ul></ul>');
            if (cls)
                ul.addClass('child');
            data.forEach((item)=> {
                const li = $('<li></li>').appendTo(ul);
                const node = $('<a href="#" style="text-decoration:none;font-size: 14px;"></a>');
                node.html(item.name);
                node.attr("href", '#' + item.id);
                node.appendTo(li);
                if (item.children != undefined && item.children.length != 0) {
                    node.attr('class', 'icon-chevron-right');
                    this.loadTree(item.children, true).appendTo(li);
                }

            });
            return ul;
        }

        setFileData(data) {
            this.file_list.data = data;
        }
    }
    class EventEmitter {
        constructor() {
            this.events = new Map();
        }

        on(event, fn) {
            let listeners = this.events.get(event);
            if (!listeners) {
                listeners = new Set();
                this.events.set(event, listeners);
            }
            listeners.add(fn);
        }

        un(event, fn) {
            let listeners = this.events.get(event);
            if (listeners) {
                listeners.delete(fn);
                if (listeners.size == 0) {
                    this.events.delete(event);
                }
            }
        }

        emit(event, data) {
            let listeners = this.events.get(event);
            if (listeners) {
                for (let listener of listeners) {
                    listener.call(null, event, data);
                }
            }
        }
    }

    class App extends EventEmitter {

        constructor() {
            super();

        }

        init() {

            this.fs = new FS(this);
            this.fs.init();
            this.fs.initData();

            // this.disk.update();

        }


    }

    $(()=> {
        let app = new App();
        app.init();
    });
})();