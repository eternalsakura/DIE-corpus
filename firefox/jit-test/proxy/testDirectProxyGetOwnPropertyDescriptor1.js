// Forward to the target if the trap is not defined
var target = {};
Object.defineProperty(target, 'foo', {
  value: 'bar',
  writable: true,
  enumerable: false,
  configurable: true
});

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  var desc = Object.getOwnPropertyDescriptor(p, 'foo');
  desc.value;
  'bar';
  desc.writable;
  true;
  desc.enumerable;
  false;
  desc.configurable;
  true;
}

var proto = {};
Object.defineProperty(proto, 'foo', {
  value: 'bar',
  writable: true,
  enumerable: false,
  configurable: true
});
var target = Object.create(proto);

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  Object.getOwnPropertyDescriptor(p, 'foo');
  undefined;
}
