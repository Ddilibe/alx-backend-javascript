# Javascript Set

A set object is a javascript object which lets youstore unique values of any type whether primitive values or object references. A set object is a collection of values. A value in a set may occur only once and it is unique to a set's collection. You can iterate through a set in insertion order. 

```javascript
// To create a new set
const new_set = new Set();
```

### Properties of a set
1. get Set[@@species]: The constructor function that is used to create derived objects.


2. Set.prototype[@@toStringTag]: The initial value of the @@toStringTag property is the string "Set". This property is used in Object.prototype.toString().

3. Set.prototype.size: Returns the number of values in the Set object.

### Methods of a set

- Set.prototype.add(): Inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

- Set.prototype.clear(): Removes all elements from the Set object.

- Set.prototype.delete(): Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

- Set.prototype.has(): Returns a boolean asserting whether an element is present with the given value in the Set object or not.

- Set.prototype[@@iterator](): Returns a new iterator object that yields the values for each element in the Set object in insertion order.

- Set.prototype.values(): Returns a new iterator object that yields the values for each element in the Set object in insertion order.

- Set.prototype.keys(): An alias for Set.prototype.values().

- Set.prototype.entries(): Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is similar to the Map object, so that each entry's key is the same as its value for a Set.

- Set.prototype.forEach(): Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.

### Example method of using sets
```javascript
// Using the set variable declared earlier
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