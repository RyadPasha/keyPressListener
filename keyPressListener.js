/* keyPressListener 1.5, 2019-07-19
 * https://github.com/ryadpasha/keyPressListener
 * Copyright (c) 2019 Ryad Pasha <@RyadPasha>
 * Licensed under the GNU General Public License v3.0 */
var keyPress = {
    configObj: {
        defaultInput: 'key',
        splitter: '+',
        version: 1.1
    },
    config: function(configObject) {
        keyPress.configObj = Object.assign(keyPress.configObj, configObject)
    },
    replaceArray: function(string, find, replace) {
        var replaceString = string.toUpperCase();
        for (var i = 0; i < find.length; i++) {
            replaceString = replaceString.replace(find[i].toUpperCase(), replace[i])
        }
        return replaceString
    },
    convertToKeyCode: function(char) {
        var char = char.toUpperCase(),
        key = ['Alt', 'Ctrl', 'Shift', 'ESC', 'Escape', 'Enter', 'Backspace', 'Cmd'],
        code = [18, 17, 16, 27, 27, 13, 8, 91],
        char2 = keyPress.replaceArray(char, key, code);
        if (char == char2) {
            return char.toUpperCase().charCodeAt(0)
        } else return parseInt(char2)
    },
    when: function(keys, callback, type) {
        if (typeof callback != 'function') return alert('Missing callback function.');
        type = (typeof type == 'undefined' ? keyPress.configObj.defaultInput : type);
        var keys = keys.split(keyPressListener.configObj.splitter),
            x, nddCodes = [];
        for (x in keys) {
            if (type == 'code') nddCodes[x] = parseInt(keys[x].trim());
            else nddCodes[x] = keyPress.convertToKeyCode(keys[x].trim());
            var down = {};
            document.addEventListener('keydown', function(event) {
                var evtobj = window.event ? event : e;
                down[evtobj.keyCode] = !0
            });
            document.addEventListener('keyup', function(event) {
                var evtobj = window.event ? event : e;
                var found = !1;
                for (var i = 0; i < nddCodes.length; i++) {
                    var index = nddCodes[i];
                    if (down[index]) {
                        found = !0
                    } else {
                        found = !1;
                        break
                    }
                }
                if (found) callback();
                down[evtobj.keyCode] = !1
            })
        }
    }
}
