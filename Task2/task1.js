window.x = 1;

const context = { x: 2 };

function testThis(y) {
  console.log(`x=${this.x}, y=${y}`);
}

testThis(100); // x=1, y=100

function bind(func, contextToBind, ...rest) {
  return function (...args) {
    const uniqueId = "UniqueIdForMyCustomFunctionBind";
    contextToBind[uniqueId] = func;
    const res = contextToBind[uniqueId](...rest, ...args);
    delete contextToBind[uniqueId];
    return res;
  };
}

const boundFunction = bind(testThis, context, 100);
boundFunction(); // x=2, y=100
const secondBoundFunction = bind(testThis, context);
secondBoundFunction(100); // x=2, y=100
