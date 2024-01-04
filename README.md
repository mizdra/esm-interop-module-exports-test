
## What's this?

This is a repository that describes the problem of missing named exports.

## What is the problem?

Node.js allows us to import CJS from ESM with the import statement. The behavior is similar to importing ESM from ESM.

The original CJS does not support named exports. Therefore, it is not possible to import named items from the original CJS. But, for convenience, Node.js parses the CJS code and provides the expected named exports. This mechanism is explained in the following document:

- https://nodejs.org/api/esm.html#commonjs-namespaces

However, named exports are detected statically by [cjs-module-lexer](https://github.com/nodejs/cjs-module-lexer). Therefore, some cases that cannot be detected by cjs-module-lexer will be missing named exports.

This repository introduces one such case.

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
