console.log("Tests that the (x/-1)|0 case in the DFG is handled correctly even when there is some interesting register allocation going on.");

function foo(c, d, a, b) {
  return c + d + (a / b | 0);
}

silentTestPass = true;
noInline(foo);

for (var i = 0; i < 2000; i++) {
  // i = dfgIncrement({f:foo, i:i + 1, n:50}))
  foo(0, 0, i, -1) === -i;
}