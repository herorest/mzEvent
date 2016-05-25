/**
 * 一个小插件，针对部分机型和系统做了识别，以及可以识别移动端和PC端
 * @depend   Zepto || jQuery
 * @author   Songjing
 * @date     2014-01-01
 * @version  1.0.0
 */
(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        //AMD.
        define(['zepto'], factory);
    } else if (typeof exports === 'object') {
        //CMD.
        module.exports = factory(require('zepto'));
    } else {
        // Browser globals (root is window)
        root.client = factory(root.Zepto);
    }
}(this, function() {
    var browser = {
		ua  : navigator.userAgent,
		init: function () {
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
			this.BS = this.searchBrowser(this.dataBS);
			if(this.OS == 'iPhone' || this.OS == 'iPad' || this.OS == 'Android' || this.OS == 'Winphone' ){
				this.mobile = true;
			}else{
				this.mobile = false;
			}
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = this.ua;
				if (dataString) {
					if (dataString.indexOf(data[i].forSearch) != -1)
						return data[i].forShow;
				}
			}
		},
		searchBrowser: function(data){
			var result = '';
			for (var i=0;i<data.length;i++)	{
				var dataString = this.ua;
				if (dataString) {
					if (dataString.indexOf(data[i].forSearch) != -1){
						result += data[i].forShow + '|';
					}
				}
			}
			return result;
		},
		dataOS : [
			{
				forSearch: "iPhone",
				forShow: "iPhone"
		    },
			{
				forSearch: "iPad",
				forShow: "iPad"
		    },
			{
				forSearch: "Android",
				forShow: "Android"
			},
			{
				forSearch: "Windows Phone",
				forShow: "Winphone"
			}
		],
		dataBS: [
			{
				forSearch: "360browser",
				forShow: "360"
			},
			{
				forSearch: "Maxthon",
				forShow: "Maxthon"
			},
			{
				forSearch: "UCBrowser",
				forShow: "uc"
			},
			{
				forSearch: "Oupeng",
				forShow: "opera"
			},
			{
				forSearch: "Opera",
				forShow: "opera"
			},
			{
				forSearch: "Sogou",
				forShow: "sogou"
			},
			{
				forSearch: "baidu",
				forShow: "baidu"
			},
			{
				forSearch: "Safari",
				forShow: "safari"
			},
			{
				forSearch: "MicroMessenger",
				forShow: "weixin"
			},
			{
				forSearch: "QQ/",
				forShow: "qq"
			},
			{
				forSearch: "Weibo",
				forShow: "weibo"
			},
			{
				forSearch: "MQBrowser",
				forShow: "360"
			},
			{
				forSearch: "MQQBrowser",
				forShow: "qqbrowser"
			},
			{
				forSearch: "CriOS",
				forShow: "Maxthon"
			}
		]

	};

	browser.init();

	return { browser : browser.BS, os : browser.OS, ifmobile : browser.mobile};
}));
