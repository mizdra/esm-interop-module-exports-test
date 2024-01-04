`module.exports = ` の右側に書く式によって、export される値が変わることの確認。

```console
$ node -v
v21.4.0

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
