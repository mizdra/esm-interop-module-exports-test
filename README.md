
## Problem status

解決済み。

## Problem details
`module.exports = ` の右側に書く式によって、export される値が変わることの確認。

`{ default: { math: ..., string: ... }, math: ..., string: ... }` というオブジェクトが export されることを期待していて、ケース1では期待通りになるが、ケース2, 3 は期待通りにならない。

```console

```console
$ node -v
v21.4.0

$ node src/main.js
[Module: null prototype] {
  default: {
    math: { add: [Function: add], subtract: [Function: subtract] },
    string: { join: [Function: join], capitalize: [Function: capitalize] }
  },
  math: { add: [Function: add], subtract: [Function: subtract] },
  string: { join: [Function: join], capitalize: [Function: capitalize] }
}
[Module: null prototype] {
  default: {
    math: { add: [Function: add], subtract: [Function: subtract] },
    string: { join: [Function: join], capitalize: [Function: capitalize] }
  },
  math: { add: [Function: add], subtract: [Function: subtract] }
}
[Module: null prototype] {
  default: {
    math: { add: [Function: add], subtract: [Function: subtract] },
    string: { join: [Function: join], capitalize: [Function: capitalize] }
  }
}
```

ちなみに `main.js` を CommonJS に書き直したバージョンでは、期待通りになる。

```console
$ node src/main.cjs
{
  math: { add: [Function: add], subtract: [Function: subtract] },
  string: { join: [Function: join], capitalize: [Function: capitalize] }
}
{
  math: { add: [Function: add], subtract: [Function: subtract] },
  string: { join: [Function: join], capitalize: [Function: capitalize] }
}
{
  math: { add: [Function: add], subtract: [Function: subtract] },
  string: { join: [Function: join], capitalize: [Function: capitalize] }
}
```

## Solution

Node.js の仕様だということがわかりました。

- https://twitter.com/mizdra/status/1742911589517516924
