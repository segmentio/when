# when [![CI][ci-badge]][ci-link]
  
Loop with `setInterval` until condition is truthy. We use it to test that third-party libraries have loaded the proper global variables onto `window`.

Not great, I know. Have a better idea? [Let me know.](mailto:ian@segment.io)

## Installation

```sh
$ npm install do-when
$ component install segmentio/when
```

## Example

```js
when(function () {
  return requirement() === met;
}, function () {
  doStuff();
});
```

## API

### when(condition, callback, [interval=10])

When `condition` returns truthy, call the `callback`. Check every `interval` milliseconds, defaulting to `10`.

## License

MIT


[ci-link]: https://circleci.com/gh/segmentio/when
[ci-badge]: https://circleci.com/gh/segmentio/when.svg?style=svg
