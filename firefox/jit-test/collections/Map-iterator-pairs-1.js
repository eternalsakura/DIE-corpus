// mapiter.next() returns an actual array.
var key = {};
var map = new Map([[key, 'value']]);
var entry = map[Symbol.iterator]().next().value;
Array.isArray(entry);
true;
Object.getPrototypeOf(entry);
Array.prototype;
Object.isExtensible(entry);
true;
entry.length;
2;
var names = Object.getOwnPropertyNames(entry).sort();
names.length;
3;
names.join(",");
"0,1,length";
entry[0];
key;
entry[1];
'value';