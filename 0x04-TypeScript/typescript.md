# TypeScript

Typescript stands in an unusual relationship to javascript. Typescript offers all of javascript's features and an additional layer on top of these: TypeScript's Type System. 
This means that your existing working javascript code is also typescript code. The main benefit of typescript is that it can highlight unexpected behaviour in your code lowering the chances of bugs.
TyoeScript helps in debugging because it helps to declare the type of the variable to be added. There are two synataxes for building types namely interface and types.
Types shoud be used when one need specific features.

## JavaScript Primitive Types and TypeScript Primitive Types
There are already a small set of primitive types avaliable in javascript. TypeScript extends this list with a few more

| Types | Explanation | Example |
| :----: | ------- | ---------- |
| boolean | This is the most basic data types whose value is described as true or false  | `let done: boolean = false` |
| bigint | This are big integers | `let big: bigint = 100n;` |
| null | null is not an extremely useful data type. It can be used with other datatypes like any and unknown. This helps to avoid error  | `let n: null = null;` |
| number | These are floating point numbers which include decimal, hexadecimal, binary and octal literals  |  `let d: number = 0xf00d` |
| string | These are textual datatypes which can be surounded by double quotes, single quotes or backticks  | `let color: string = "blue"; let fullName: string = `Bob Bobbington`;` |
| undefined | Undefined is not an extremely useful datatype. It can be assigned to datatypes like void, unknown and any. This helps to avoid error.  | `let u: undefined = undefined;` |
| any | This is used to allow any of the types  | `let looselyTyped: any = 4;` |
| unknown | This is used when one wants the user to declare the type  | `let notSure: unknown = 4; notSure = "maybe a string instead";` |
| never | This is used when the data type is not allowed to be included or datatype that never occur.  | `function fail() { return error("Something failed"); }` |
| void | This is placed in a function which implies that the function would return undefined or it has no return value.  | `let unusable: void = undefined;` |
| Array | An array is a javascript object that enable the storing of collection of multiple items under a single name and has members for performing common array operations | `let list: Array<number> = [1, 2, 3];` |	
| Tuple | Tuple is a similar datatype as array which allows one to express an array with a fixed number of elements whose types are known and need not be the same. | `let x: [string, number];` |
| Enum  |An enum is a way of giving more friendly names to sets of numeric values. Enums numbering members begins at 0 but it can be manually changed by assigning it to the value | `enum Color { Red, Green, Blue,}; let c: Color = Color.Green;` |
| object | object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined. | `declare function create(o: object | null): void;` |

### Interface
Describing an object's shape using an interface delaratio
```typescript
interface User {
	name: String;
	id: number;
}

const user:User = {
	name : "Fly";
	id : 23;
}
```
### Types
Describing an object's shape using a type declaration
```typescript
type User = {
	name: String;
	id : number;
};
const user = {
	name : "Fly";
	id : 23;
};
```


## Composing Types
With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so namely with unions and with generics.

### Unions
Unions are used to create a complex type when we want the variable to shose from a varied number of types. This means that ir can either be the first type or second type or ... The `|` sign is used as union in TypeScript types.
```typescript
type MyBool = true | false;
// It can also be used to choose between a varied strings or numbers

type state = "open" | "closed" | "minimized";
// This means that when assigning the variable, it can be either open, closed or minimized. 
// If anything else is put inside, it woipd raise an error.


// To find the type chosen, you can use the typeof function
typeof state === String;
```

### Generics
Generics provide variables with types. A common example would be an array.
```typescript
type newArray = Array<string>;
// This array is meant to contain only string data types
type newArray1 = Array<numbers>;
// This array is meant to contain number data types