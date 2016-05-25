# Event.js
兼容pc端及移动端的事件绑定-针对移动端点透bug进行处理

### 代码演示

解决点透，但不支持移除
Event.addEvent(obj,'end',touchHandle,true);

支持移除的普通绑定事件
Event.addEvent(obj,'end',touchHandle);

移除事件
Event.removeEvent(obj,'end',touchHandle);

## Demo 预览
http://www.winqee.com/backup/mzEvent/
