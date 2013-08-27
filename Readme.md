# when
  
  Loop with setInterval until condition is true. We use it to test that third-party libraries have loaded the proper global variables onto `window`.

  Not great, I know. Have a better idea? [Let me know.](mailto:ian@segment.io)

## Installation

    $ component install segmentio/when

## Example

```
var when = require('when');

when(function () {
  return requirement() === met;
}, function () {
  doStuff();
});
```

## API

### when(condition, callback, [interval])
  When `condition` evaluates to `true`, call the `callback`. Check every `interval` milliseconds, defaulting to `10`.

## License

  MIT
