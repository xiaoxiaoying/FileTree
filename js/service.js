/**
 * Created by xiaoxiaoying on 2017/1/22/022.
 */
function formatSize(size) {
    if (size < 1024) {
        return size + 'B';
    } else if (size < 1024 * 1024) {
        return parseInt(size / 1024 * 100) / 100 + 'KB'
    } else if (size < 1024 * 1024 * 1024) {
        return parseInt(size / 1024 / 1024 * 100) / 100 + 'MB';
    } else if (size < 1024 * 1024 * 1024 * 1024) {
        return parseInt(size / 1024 / 1024 / 1024 * 100) / 100 + 'GB';
    } else {
        return parseInt(size / 1024 / 1024 / 1024 / 1024 * 100) / 100 + 'TB';
    }
}


var Utils = {
    /**
     * toast
     */

    Toast: function (msg, duration, position) {
        duration = isNaN(duration) ? 900 : duration;
        if (Utils.isNull(position)) {
            position = '80%';
        }
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.className = "toast";
        m.id = "t_id";
        document.body.appendChild(m);
        var t = document.getElementById("t_id");
        m.style.left = (Utils.windowWidth() - t.clientWidth) / 2 + "px";
        m.style.top = position;
        setTimeout(function () {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function () {
                document.body.removeChild(m)
            }, d * 1000);
        }, duration);
    },

    windowWidth: function () {
        return window.innerWidth;
    },
    windowHeight: function () {
        return window.innerHeight;
    },

    isNull: function (key) {
        if (key == undefined || key.length <= 0 || key == null) {
            return true;
        }
        return false;
    },
    getFileData(){
        return Data;
    }

};

let Data = [{
    "id": 101,
    "name": "cpmanager@mozillaonline.com/pfs/skin/windows/pluginInstall-16.png",
    "mtime": 1449047870,
    "ctime": 1449047870,
    "atime": 1449047870,
    "status": 0,
    "st_size": 236,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195102,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 102,
    "name": "cpmanager@mozillaonline.com/safeflag/content/options.xul",
    "mtime": 1449047870,
    "ctime": 1449047870,
    "atime": 1449047870,
    "status": 0,
    "st_size": 486,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195117,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 103,
    "name": "cpmanager@mozillaonline.com/safeflag/content/safeflag_blank.xul",
    "mtime": 1449047870,
    "ctime": 1449047870,
    "atime": 1449047870,
    "status": 0,
    "st_size": 475,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195121,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 104,
    "name": "cpmanager@mozillaonline.com/safeflag/content/style.css",
    "mtime": 1449047870,
    "ctime": 1449047870,
    "atime": 1449047870,
    "status": 0,
    "st_size": 471,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195122,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 105,
    "name": "cpmanager@mozillaonline.com/safeflag/content/uninstall.js",
    "mtime": 1463375635,
    "ctime": 1463375635,
    "atime": 1463375635,
    "status": 0,
    "st_size": 562,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195123,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 106,
    "name": "cpmanager@mozillaonline.com/safeflag/locale/en-US/options.dtd",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 350,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195127,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 107,
    "name": "cpmanager@mozillaonline.com/safeflag/locale/en-US/safeflag.properties",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 26,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195129,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 108,
    "name": "cpmanager@mozillaonline.com/safeflag/locale/zh-CN/options.dtd",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 434,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195131,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 109,
    "name": "cpmanager@mozillaonline.com/safeflag/locale/zh-CN/safeflag.properties",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 29,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195133,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 110,
    "name": "cpmanager@mozillaonline.com/safeflag/skin/linux/overlay.css",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 47,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195147,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 111,
    "name": "cpmanager@mozillaonline.com/safeflag/skin/mac/overlay.css",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 307,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195149,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 112,
    "name": "cpmanager@mozillaonline.com/tracking/locale/en-US/cmtracking.properties",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 451,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195161,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 113,
    "name": "cpmanager@mozillaonline.com/tracking/locale/zh-CN/cmtracking.properties",
    "mtime": 1449047871,
    "ctime": 1449047871,
    "atime": 1449047871,
    "status": 0,
    "st_size": 534,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195164,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 114,
    "name": "cpmanager@mozillaonline.com/tracking/modules/Prefs.jsm",
    "mtime": 1463375635,
    "ctime": 1463375635,
    "atime": 1463375635,
    "status": 0,
    "st_size": 637,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195169,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 115,
    "name": "defaults/preferences/pref.js",
    "mtime": 1449047918,
    "ctime": 1449047918,
    "atime": 1449047918,
    "status": 0,
    "st_size": 136,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194845,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 116,
    "name": "dependentlibs.list",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 494,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195382,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 117,
    "name": "e10srollout@mozilla.org.xpi",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 3061,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195386,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 118,
    "name": "easyscreenshot@mozillaonline.com/META-INF/mozilla.sf",
    "mtime": 1446826352,
    "ctime": 1446826352,
    "atime": 1446826352,
    "status": 0,
    "st_size": 121,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195214,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 119,
    "name": "easyscreenshot@mozillaonline.com/README.md",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 262,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195222,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 120,
    "name": "easyscreenshot@mozillaonline.com/locale/en-US/browser.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 501,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195194,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 121,
    "name": "easyscreenshot@mozillaonline.com/locale/en-US/settings.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 355,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195196,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 122,
    "name": "easyscreenshot@mozillaonline.com/locale/en-US/ssSelector.properties",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 188,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195198,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 123,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-CN/browser.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 494,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195200,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 124,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-CN/easyscreenshot.properties",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 548,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195201,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 125,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-CN/settings.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 366,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195202,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 126,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-CN/ssSelector.properties",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 209,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195204,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 127,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-TW/browser.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 494,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195206,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 128,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-TW/easyscreenshot.properties",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 554,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195207,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 129,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-TW/settings.dtd",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 357,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195208,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 130,
    "name": "easyscreenshot@mozillaonline.com/locale/zh-TW/ssSelector.properties",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 222,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195210,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 131,
    "name": "easyscreenshot@mozillaonline.com/modules/snapshot.js",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 71,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195219,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 132,
    "name": "easyscreenshot@mozillaonline.com/skin/snapshot.png",
    "mtime": 1438664704,
    "ctime": 1438664704,
    "atime": 1438664704,
    "status": 0,
    "st_size": 562,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195263,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 133,
    "name": "firefox@getpocket.com.xpi",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 671529,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195385,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 134,
    "name": "gmp-clearkey/0.1/clearkey.info",
    "mtime": 1477999013,
    "ctime": 1477999013,
    "atime": 1477999013,
    "status": 0,
    "st_size": 310,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195318,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 135,
    "name": "locale/en-US/ntab.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 762,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194781,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 136,
    "name": "locale/en-US/options.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 326,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194782,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 137,
    "name": "locale/en-US/overlay.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 930,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194783,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 138,
    "name": "locale/en-US/overlay.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 1185,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194784,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 139,
    "name": "locale/en-US/sync.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 104,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194785,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 140,
    "name": "locale/en-US/sync.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 364,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194786,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 141,
    "name": "locale/zh-CN/ntab.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 2677,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194788,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 142,
    "name": "locale/zh-CN/ntab.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 779,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194789,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 143,
    "name": "locale/zh-CN/options.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 336,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194790,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 144,
    "name": "locale/zh-CN/overlay.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 965,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194791,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 145,
    "name": "locale/zh-CN/overlay.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 1209,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194792,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 146,
    "name": "locale/zh-CN/sync.dtd",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 115,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194793,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 147,
    "name": "locale/zh-CN/sync.properties",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 337,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194794,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 148,
    "name": "modules/BackgroundPageThumbs.jsm",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 12922,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194796,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 149,
    "name": "modules/NTabSync.jsm",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 10339,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194800,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 150,
    "name": "modules/hash.jsm",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 378,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194797,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 151,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/content/common.js",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 411,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195271,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 152,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/en-US/locale.dtd",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 236,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195276,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 153,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/en-US/locale.properties",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 137,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195277,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 154,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/zh-CN/locale.dtd",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 236,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195279,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 155,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/zh-CN/locale.properties",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 145,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195280,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 156,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/zh-TW/locale.dtd",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 236,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195282,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 157,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/locale/zh-TW/locale.properties",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 139,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195283,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 158,
    "name": "mozcn-bundles/addoninstaller@mozillaonline.com/chrome/skin/all/overlay.css",
    "mtime": 1446083737,
    "ctime": 1446083737,
    "atime": 1446083737,
    "status": 0,
    "st_size": 129,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195287,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 159,
    "name": "msvcp140.dll",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 443712,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195402,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 160,
    "name": "myextensions/cehomepage@mozillaonline.com.xpi",
    "mtime": 1467082182,
    "ctime": 1467082182,
    "atime": 1467082182,
    "status": 0,
    "st_size": 533526,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195294,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 161,
    "name": "myextensions/coba@mozilla.com.cn.xpi",
    "mtime": 1453193274,
    "ctime": 1453193274,
    "atime": 1453193274,
    "status": 0,
    "st_size": 1033557,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195295,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 162,
    "name": "myextensions/commonfix@mozillaonline.com.xpi",
    "mtime": 1441075718,
    "ctime": 1441075718,
    "atime": 1441075718,
    "status": 0,
    "st_size": 93348,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195296,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 163,
    "name": "myextensions/config.ini",
    "mtime": 1467161137,
    "ctime": 1467161137,
    "atime": 1467161137,
    "status": 0,
    "st_size": 1074,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195297,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 164,
    "name": "myextensions/installdate.ini",
    "mtime": 1468573723,
    "ctime": 1468573723,
    "atime": 1468573723,
    "status": 0,
    "st_size": 63,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195300,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 165,
    "name": "omni.ja",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 13158702,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195384,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 166,
    "name": "overlay.js",
    "mtime": 1453176909,
    "ctime": 1453176909,
    "atime": 1453176909,
    "status": 0,
    "st_size": 21573,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194771,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 167,
    "name": "platform.ini",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 166,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195366,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 168,
    "name": "removed-files",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 702,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195395,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 169,
    "name": "rep8558.tmp",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 320456,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195360,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 170,
    "name": "safeid_new_theme.ui",
    "mtime": 1478681958,
    "ctime": 1478681958,
    "atime": 1478681958,
    "status": 0,
    "st_size": 239789,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 208809,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 171,
    "name": "searchplugins/locale/zh-CN/amazondotcn.xml",
    "mtime": 1386573869,
    "ctime": 1386573869,
    "atime": 1386573869,
    "status": 0,
    "st_size": 2614,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195306,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 172,
    "name": "searchplugins/locale/zh-CN/dangdang.xml",
    "mtime": 1383029010,
    "ctime": 1383029010,
    "atime": 1383029010,
    "status": 0,
    "st_size": 2197,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195308,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 173,
    "name": "searchplugins/locale/zh-CN/taobao.xml",
    "mtime": 1456974333,
    "ctime": 1456974333,
    "atime": 1456974333,
    "status": 0,
    "st_size": 1166,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195309,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 174,
    "name": "sendlink.js",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 566,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194774,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 175,
    "name": "skin/overlay.css",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 614,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194818,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 176,
    "name": "softokn3.chk",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 899,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195363,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 177,
    "name": "softokn3.dll",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 150472,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195362,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 178,
    "name": "sync-customize.xul",
    "mtime": 1449047917,
    "ctime": 1449047917,
    "atime": 1449047917,
    "status": 0,
    "st_size": 547,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 194776,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 179,
    "name": "ucrtbase.dll",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 921280,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195401,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 180,
    "name": "uninstall/helper.exe",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 889488,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195361,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 181,
    "name": "uninstall/shortcuts_log.ini",
    "mtime": 1468573728,
    "ctime": 1468573728,
    "atime": 1468573728,
    "status": 0,
    "st_size": 322,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195348,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 182,
    "name": "update-settings.ini",
    "mtime": 1466728613,
    "ctime": 1466728613,
    "atime": 1466728613,
    "status": 0,
    "st_size": 132,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195351,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 183,
    "name": "utf8fix",
    "mtime": 1480069194,
    "ctime": 1480069194,
    "atime": 1480069194,
    "status": 0,
    "st_size": 0,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195311,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 184,
    "name": "voucher.bin",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 5936,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195359,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 185,
    "name": "wow_helper.exe",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 101832,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195358,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 186,
    "name": "xul.dll",
    "mtime": 1481775946,
    "ctime": 1481775946,
    "atime": 1481775946,
    "status": 0,
    "st_size": 51604424,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195394,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}, {
    "id": 187,
    "name": "{972ce4c6-7e08-4474-a285-3208198ce6fd}.xpi",
    "mtime": 1481775947,
    "ctime": 1481775947,
    "atime": 1481775947,
    "status": 0,
    "st_size": 4854,
    "st_mode": 33060,
    "st_gid": 0,
    "st_uid": 0,
    "st_ino": 195387,
    "is_link": false,
    "is_dir": false,
    "is_file": true
}];