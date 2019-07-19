/* keyPressListener 1.0, 2019-07-19
 * https://github.com/ryadpasha/keyPressListener
 * Copyright (c) 2019 Ryad Pasha <@RyadPasha>
 * Licensed under the GNU General Public License v3.0 */
var keyPressListener={configObj:{defaultInput:'key',version:1.0},config:function(configObject){keyPressListener.configObj=Object.assign(keyPressListener.configObj,configObject)},replaceArray:function(string,find,replace){var replaceString=string.toUpperCase();for(var i=0;i<find.length;i++){replaceString=replaceString.replace(find[i].toUpperCase(),replace[i])}
return replaceString},convertToKeyCode:function(char){var char=char.toUpperCase();key=['Alt','Ctrl','Shift','ESC','Escape','Enter','Backspace','Cmd'],code=[18,17,16,27,27,13,8,91],char2=keyPressListener.replaceArray(char,key,code);if(char==char2){return char.toUpperCase().charCodeAt(0)}else return parseInt(char2)},when:function(keys,callback,type){if(typeof callback!='function')return alert('Missing callback function.');if(!window.callbacks)window.callbacks=[];if(!window.keys)window.keys=[];window.callbacks.push(callback);type=(typeof type=='undefined'?keyPressListener.configObj.defaultInput:type);var keys=keys.split('+'),x,nddCodes=[];for(x in keys){if(type=='code')nddCodes[x]=parseInt(keys[x].trim());else nddCodes[x]=keyPressListener.convertToKeyCode(keys[x].trim())}
var down={};window.keys.push(nddCodes);document.onkeydown=function(e){var evtobj=window.event?event:e;down[evtobj.keyCode]=!0}
document.onkeyup=function(e){var evtobj=window.event?event:e;for(var j=0;j<window.keys.length;j++){var found=!1;for(var i=0;i<window.keys[j].length;i++){var index=window.keys[j][i];if(down[index]){found=!0}else{found=!1;break}}
if(found)window.callbacks[j]()}
down[evtobj.keyCode]=!1}}}
