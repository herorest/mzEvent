/**
 * 一个小插件，针对移动端的事件绑定函数做了封装处理，特别解决了点透bug，但对于移除绑定事件无奈
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
         root.Event = factory(root.Zepto);
     }
 }(this, function() {
	var Event = {
		touchtype : function(type){
			switch(type){
				case 'start':
					return client.ifmobile ? "touchstart" : "mousedown";
				case 'move':
					return client.ifmobile ? "touchmove" : "mousemove";
				case 'end':
					return client.ifmobile ? "touchend" : "mouseup";
				default:
					return type;
			}
		},

		addEvent:function(elm, evType, fn, check){
			if(elm){
				var callback  = fn;
				evType = this.touchtype(evType);
				if(check){
					Event.addEvent(elm,'start',function(){
						Event.currentTarget = elm;
					});
					callback = function(e){
						if(Event.currentTarget == elm){
							fn.call(this,e);
						}
					};
				}
				if (elm.addEventListener) {
					elm.addEventListener(evType, callback, false);//DOM2.0
					return true;
				}else if (elm.attachEvent) {
					var r = elm.attachEvent('on' + evType, callback);//IE5+
					return r;
				}else {
					elm['on' + evType] = callback;//DOM 0
				}
			}
		},

		removeEvent : function(elm, evType, fn) {
			if(elm){
				evType = this.touchtype(evType);
				if (elm.removeEventListener) {
					elm.removeEventListener(evType, fn);//DOM2.0
					return true;
				}else if (elm.detachEvent) {
					var r = elm.detachEvent('on' + evType, fn);//IE5+
					return r;
				}else {
					elm['on' + evType] = null;//DOM 0
				}
			}
		},

		stopDefault : function ( e ) {
    		if ( e && e.preventDefault )
        		e.preventDefault();
			else
				window.event.returnValue = false;
			return false;
		},

		currentTarget: null
	};

    return Event;

}));
