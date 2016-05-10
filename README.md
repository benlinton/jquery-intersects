# jQuery Within Plugin

A jQuery plugin that detects whether widgets are overlapping or not.

This plugin is useful for working with jQuery UI `Draggable` and
`Droppable` widgets. But it could also solve many other problems.


## Usage

### Any In

Returns `true` if any of `#item` is inside the bounds of `#container`.

```
$('#item').within('#container', 'any');
```

![Any In](docs/any.gif)


### Mostly In

Returns `true` if the center point of `#item` is inside the bounds of `#container`.

```
$('#item').within('#container', 'mostly');
```

![Mostly In](docs/mostly.gif)


### Fully In

Returns `true` if all of `#item` is inside the bounds of `#container`.

```
$('#item').within('#container', 'fully');
```

This option is the default so you can use shorthand instead.

```
$('#item').within('#container');
```

![Fully In](docs/fully.gif)


## License

This plugin is licensed under the [MIT License](LICENSE.txt).

Copyright (c) 2016 [Benjamin Linton](http://benlinton.com)
