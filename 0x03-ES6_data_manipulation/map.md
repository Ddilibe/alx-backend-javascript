# Javascript Maps

A Map object is a javascript object that holds key value pairs and remember the original insertion order of the keys. Any value can be used as either a key or a value. Map objects are collections of key-value pairs. A key in the map may only occur once. it is unique to the map's collection. iteration happens in insertion order which corresponds to the irder in which each key-value pair was first inserted into the map by the set method. 

## Maps and Objects
#### Similarities
1. They let you set keys to values.
2. They also let you retreive those values
3. They let you delete those keys.
4. They let you detect whether something is stored at a key.
Objects has been used as maps historically.

### Differences
| Property | Maps | Objects |
| ---- | ---- | ---- |
| Accidental keys | A Map does not contain any keys by default. It only contains what is explicitly put into it. | An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful. |
| Security | A Map is safe to use with user-provided keys and values. | Setting user-provided key-value pairs on an Object may allow an attacker to override the object's prototype, which can lead to object injection attacks. |
| Key Types | A Map's keys can be any value (including functions, objects, or any primitive). | The keys of an Object must be either a String or a Symbol.|
| Key Order | The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion. | Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order. |
| Size | The number of items in a Map is easily retrieved from its size property. | The number of items in an Object must be determined manually. |
| Iteration | A Map is an iterable, so it can be directly iterated.	| Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default). |
| Performance | Performs better in scenarios involving frequent additions and removals of key-value pairs. | Not optimized for frequent additions and removals of key-value pairs. |
| Serialization and parsing | No native support for serialization or parsing. | Native support for serialization from Object to JSON, using JSON.stringify(). |

### How to Declare an Map
```javascript
const newMap = new Map();
```

### Properties of map
1. get Map[@@species]: The constructor function that is used to create derived objects.

2. Map.prototype[@@toStringTag]: The initial value of the @@toStringTag property is the string "Map". This property is used in Object.prototype.toString().

3. Map.prototype.size: Returns the number of key/value pairs in the Map object.

### Methods of a map
- Map.prototype.clear(): Removes all key-value pairs from the Map object.

- Map.prototype.delete(): Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. map.has(key) will return false afterwards.

- Map.prototype.get(): Returns the value associated to the passed key, or undefined if there is none.

- Map.prototype.has(): Returns a boolean indicating whether a value has been associated with the passed key in the Map object or not.

- Map.prototype.set(): Sets the value for the passed key in the Map object. Returns the Map object.

- Map.prototype[@@iterator](): Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

- Map.prototype.keys(): Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

- Map.prototype.values(): Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

- Map.prototype.entries(): Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

- Map.prototype.forEach(): Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

```javascript
// Using the map instance created at the beginning of the article
// To set keys and values in a map
newMap.set(1, "one");
newMap.set(2, "Two");
newMap.set(3, "three");
newMap.set(4, "Four");
newMap.set(5, "Five");

// To retrive a value in a map
newMap.get(4) // Four
newMap.get(7) // undefined

// To verify that a map has a key
newMap.has(3) // true
newMap.has(9) // false

// To display all the keys in a map
newMap.keys() // [1, 2, 3, 4, 5]

// To display all the values in a map
newMap.values() // ["one", "Two", "three", "Four", "Five"]

```