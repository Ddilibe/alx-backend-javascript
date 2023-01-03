# ES6 Data Manipulation

## Learning Objectives
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

### Demos
1. Array
```javascript
const test_array = new Array('Pawpaw', 'Mango', 'Apple', 'Pear', 'Coconut')
test_array.at(2) //Apple
test_array.concat(["Guava", "Watermelon"]) // Returns the shallow copy of the new array
test_array.forEach((value) => {console.log(value)})
// Prints out Everyvalue
```
2. Typed Array
```javascript
// First, Create an Array buffer and declare the length in the function
const buffer = new ArrayBuffer(32);
// Second, create an Data View of your chose to read the chunk of memory space occupied by the buffer
const int32view = new Int32Array(buffer);
// Third, the data view can now be used as an array
int32view[3] = 4;
```
3. Set
```javascript
// To create a new set
const new_set = new Set();
// To add objects to the set
new_set.add(1); // {1}
new_set.add(3); // {1, 3}
// Sets can't contain duplicate items
new_set.add(1); // {1, 3}

// To remove all elements from a set
new_set.clear(); // {}

for (var i = 0; i < 10; i++) {
	new_set.add(i);
}
console.log(new_set); // {0,1,2,3,4,5,6,7,8,9}

// To remove a single element from a set
new_set.delete(3); // {0,1,2,4,5,6,7,8,9}

// To verify that a set has a value
new_set.has(5); // true
new_set.has(3); // false

// calling a function for each value in a set
new_set.forEach((value, index, set) => {
	console.log(`This value ${value} was extracted from this index ${index} in this set ${set}\n`);
});
/*This value 0 was extracted from this index 0 in this set [object Set]

This value 1 was extracted from this index 1 in this set [object Set]
...
This value 9 was extracted from this index 9 in this set [object Set]*/


```
4. Maps
```javascript
const newMap = new Map();
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

### Resources
1. [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
3. [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
4. [Map Data Structure]
5. [Weakmap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)