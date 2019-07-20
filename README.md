# keyPressListener
A wonderful and simple keyboard input capturing utility.

* Tiny (1KB minified and gzipped), no dependency
* Perfect to use in websites that have alot of functions.

Check out [examples](https://github.com/RyadPasha/keyPressListener/blob/master/examples/index.html).

Configuration
==========
The default input type is 'key' (A, B, Ctrl).

If you want to change it to 'code' (95, 41), then change the defaultInput value as follows:
```
keyPressListener.config({'defaultInput':'code'});
```

How to use
==========
This utility can be used to listen to keyboard input, let's say that you want to show an alert when the user presses "Ctrl+A".

```
keyPressListener.when('Ctrl + A', function(){
  alert('You clicked Ctrl + A');
});
```

Also, you can define your input buttons with their `Key Codes`:

```
keyPressListener.when('90 + 88', function(){
  alert('You pressed Z + X');
}, 'code'); // <- Note the third parameter here 'code', so it can understand that it's a key code not a char code.
```

### Contribute

* Fork the repo
* Create your branch
* Commit your changes
* Create a pull request

## Discussion
For any queries contact me at: **me@ryadpasha.com**



GNU General Public License v3.0. Copyright 2019 Ryad Pasha <@RyadPasha>.
