 # JavaScript Arrays

### What are arrays?
An array is a javascript object that enable the storing of collection of multiple items under a single name and has members for performing common array operations

### Characteristics of arrays
1. Arrays are resizeable and can contain a mix of different data types
2. Arrays are not associative arrays
3. Arrays are zero-indexed
4. Array-copy operations create shallow copies

```javascript
const test_array = new Array('Pawpaw', 'Mango', 'Apple', 'Pear', 'Coconut')
```
### Array Properties

1. Array.prototype.length: The length attribute is used to determine the length of the array ie the number of elements in an array. It can also be used to increase and decrease the length of the array
2. get_Array\[@@species\]: Returnd the array constructor

3. Array.prototype\[@@unscopables\]: Contains property names that were not included in the ECMAScript standard prior to the ES 2015 version and for with statement binding purpose.
```javascript
// Display the length of the array test_array
console.log(test_array.length) // 4

// Assigning a positive intger value either increases or decreases the length of the array
test_array.length = 6
console.log(test_array.length)
// 6
```
### Array Methods
- Array.from(): Creates a new Array instance from an array-like object or iterable object.

- Array.isArray(): Returns true if the argument is an array, or false otherwise.

- Array.of(): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

- Array.prototype.at(): Returns the array item at the given index. Accepts negative integers, which count back from the last item.

- Array.prototype.concat(): Returns a new array that is the calling array joined with other array(s) and/or value(s).

- Array.prototype.copyWithin(): Copies a sequence of array elements within an array.

- Array.prototype.entries(): Returns a new array iterator object that contains the key/value pairs for each index in an array.

- Array.prototype.every(): Returns true if every element in the calling array satisfies the testing function.

- Array.prototype.fill(): Fills all the elements of an array from a start index to an end index with a static value.

- Array.prototype.filter(): Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

- Array.prototype.find(): Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

- Array.prototype.findIndex(): Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

- Array.prototype.findLast(): Returns the value of the last element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

- Array.prototype.findLastIndex(): Returns the index of the last element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

- Array.prototype.flat(): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

- Array.prototype.flatMap(): Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.

- Array.prototype.forEach(): Calls a function for each element in the calling array.

- Array.prototype.group() Experimental: Groups the elements of an array into an object according to the strings returned by a test function.

- Array.prototype.groupToMap() Experimental: Groups the elements of an array into a Map according to values returned by a test function.

- Array.prototype.includes(): Determines whether the calling array contains a value, returning true or false as appropriate.

- Array.prototype.indexOf(): Returns the first (least) index at which a given element can be found in the calling array.

- Array.prototype.join(): Joins all elements of an array into a string.

- Array.prototype.keys(): Returns a new array iterator that contains the keys for each index in the calling array.

- Array.prototype.lastIndexOf(): Returns the last (greatest) index at which a given element can be found in the calling array, or -1 if none is found.

- Array.prototype.map(): Returns a new array containing the results of invoking a function on every element in the calling array.

- Array.prototype.pop(): Removes the last element from an array and returns that element.

- Array.prototype.push(): Adds one or more elements to the end of an array, and returns the new length of the array.

- Array.prototype.reduce(): Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.

- Array.prototype.reduceRight(): Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.

- Array.prototype.reverse(): Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

- Array.prototype.shift(): Removes the first element from an array and returns that element.

- Array.prototype.slice(): Extracts a section of the calling array and returns a new array.

- Array.prototype.some(): Returns true if at least one element in the calling array satisfies the provided testing function.

- Array.prototype.sort(): Sorts the elements of an array in place and returns the array.

- Array.prototype.splice(): Adds and/or removes elements from an array.

- Array.prototype.toLocaleString(): Returns a localized string representing the calling array and its elements. Overrides the Object.prototype.toLocaleString() method.

- Array.prototype.toString(): Returns a string representing the calling array and its elements. Overrides the Object.prototype.toString() method.

- Array.prototype.unshift(): Adds one or more elements to the front of an array, and returns the new length of the array.

- Array.prototype.values(): Returns a new array iterator object that contains the values for each index in the array.

- Array.prototype[@@iterator](): An alias for the values() method by default.

``` javascript
// Testing some of the mentioned methods
// Using Test Array declared at the begining of the article

test_array.at(2) //Apple
test_array.concat(["Guava", "Watermelon"]) // Returns the shallow copy of the new array
test_array.forEach((value) => {console.log(value)})
// Prints out Everyvalue

```

#### To Deep Copy an array
```javascript
const sam2 = JSON.parse(JSON.stringify(sam))
```
### Note

Static methods are those methods that can be called without an array instance while intance method are those methods that has to be called from an array instance

