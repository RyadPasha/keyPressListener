/* keyPressListener 1.7, 2021-02-09
 * https://github.com/ryadpasha/keyPressListener
 * Copyright (c) 2021 Ryad Pasha <@RyadPasha>
 * Licensed under the GNU General Public License v3.0 */
var keyPressListener = {
    configObj: {
      ignoreOtherInput: true, // If false and you passed for example (Ctrl+A), then if user presses more than the passed, for example (Ctrl+A+Y) or (Ctrl+A+Y+X ...etc.) it won't response.
      defaultInput: 'key',    // Accepts: key, code.
      splitter: '+',          // The splitter char between each key.
      version: 1.8
    },
    config: function(configObject) {
        keyPressListener.configObj = Object.assign(keyPressListener.configObj, configObject);
        return keyPressListener;
    },
    replaceArray: function(string, find, replace) {
      var replaceString = string.toUpperCase();
      for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i].toUpperCase(), replace[i]);
      }
      return replaceString;
    },
    convertToKeyCode: function(char) {
      var char = char.toUpperCase();
      key  = ['Alt', 'Ctrl', 'Shift', 'ESC', 'Escape', 'Enter', 'Backspace', 'Cmd'],
      code = [18, 17, 16, 27, 27, 13, 8, 91],
      char2= keyPressListener.replaceArray(char, key, code);
      if(char==char2) { // The key is not a letter or a number
        return char.toUpperCase().charCodeAt(0);
      } else return parseInt(char2);
    },
    when: function(keys, callback, type) {
      if(typeof callback != 'function') return alert('Missing callback function.');
      type = (typeof type == 'undefined' || type == '' ? keyPressListener.configObj.defaultInput : type);
      var keys = keys.split(keyPressListener.configObj.splitter), x, nddCodes=[];
      for (x in keys) {
        if(type == 'code') nddCodes[x] = parseInt(keys[x].trim());           // Code
        else nddCodes[x] = keyPressListener.convertToKeyCode(keys[x].trim());// Key
        var down = {};
        document.addEventListener('keydown', function(e) {
          var e = e || window.event; // to deal with IE
          down[e.keyCode] = true;
        });
        document.addEventListener('keyup', function(e) {
          var e = e || window.event; // to deal with IE
          var found = false;
          for(var i = 0; i < nddCodes.length; i++) {
            var index = nddCodes[i];
            if(down[index]) {
              found = true;
            } else {
              found = false;
              break;
            }
          }
          if(!keyPressListener.configObj.ignoreOtherInput) {
            var entrd=0;
            for(var k in down) {
              if(down[k]) ++entrd;
            }
            var cond = (nddCodes.length == entrd);
          } else var cond = true;
          if(found && cond) callback();
          down[e.keyCode] = false;
        });
      }
      return keyPressListener;
    }
};
