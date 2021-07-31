## Babel plugin transform global window

Transforms previously module scoped variables into globally scoped window properties

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

<div class="bg-pre-me">

```bash
npm install --save-dev babel-plugin-transform-global-window
```

</div>

```bash
yarn add --dev babel-plugin-transform-global-window
```

**Input**

```Javascript {r class.source="bg-danger", class.output="bg-warning"}
const myvar1 = "MyVar1";
let myvar2 = "MyVar2";
const arrfun = () => 1 + 1;
function myFun() {
    return 1 + 1;
}
class myClass {}
```

**Output**

```javascript
const myvar1 = "MyVar1";
let myvar2 = "MyVar2";

const arrfun = () => 1 + 1;

function myFun() {
    return 1 + 1;
}

class myClass {}

window.myvar1 = myvar1;
window.myvar2 = myvar2;
window.arrfun = arrfun;
window.myFun = myFun;
window.myClass = myClass;
```

## License

[MIT](LICENSE)
