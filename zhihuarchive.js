// ==UserScript==
// @name         Zhihu archive
// @namespace    http://www.zhihu.com/
// @version      0.3
// @description  Automatically archive zhihu page 众所周知，知乎内容经常被小管家咔擦。安装本脚本后，访问知乎内容时会自动向 https://web.archive.org/ 申请存档
// @author       Jinzhe Zeng
// @match        https://www.zhihu.com/question/*
// @match        https://www.zhihu.com/question/*/answer/*
// @match        https://zhuanlan.zhihu.com/p/*
// @grant       GM_xmlhttpRequest
// @connect     web.archive.org
// ==/UserScript==

(function() {
    'use strict';

    var url = window.location.href.replace('zhihu.com', 'fxzhihu.com');
    GM_xmlhttpRequest ( {
    method:     'GET',
    url:        'https://web.archive.org/save/'+url,
    onload:     function (responseDetails) {
        console.log (
            "Save " + url + " successfully:\n",
            "See https://web.archive.org/web/*/"+url
        );
    }
} );
})();
