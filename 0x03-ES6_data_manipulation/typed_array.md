# Javascript Typed Arrays

Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. Typed arrays share many of the same methods with arrays with similar semantics. 

To maximize flexibility and efficiency, typed arrays split the implementations into buffers and views. A buffer is an object representing a chunck of data; it has no format to speak of, and offers no mechanism for accessing its contents. In order to access the memory conrained ina buffer, you need to use a view. A view provides a context that turns the data inti an actual typed array.

The ArrayBuffer is a data type that is used to represent a generic, fixed-length binary data buffer. Typed array views have self descriptive names and provide views for all the usual numeric types like Int8, Uint32, Float64 and so forth. The data view is a low-kevek interface that provides a getter/setter API to read and write abitrary data ti the buffer.

| Type | Value Range | Size in bytes |Description |	Web IDL type | Equivalent C type |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Int8Array	| -128 to 127 | 1 | 8-bit two's complement signed integer | byte | int8_t |
| Uint8Array | 0 to 255 | 1 | 8-bit unsigned integer | octet | uint8_t |
| Uint8ClampedArray | 0 to 255 | 1 | 8-bit unsigned integer (clamped) | octet | uint8_t |
| Int16Array | -32768 to 32767 | 2 | 16-bit two's complement signed integer | short | int16_t |
| Uint16Array | 0 to 65535 | 2 | 16-bit unsigned integer	unsigned | short | uint16_t |
| Int32Array | -2147483648 to 2147483647 | 4 | 32-bit two's complement signed integer | long | int32_t |
| Uint32Array | 0 to 4294967295 | 4 | 32-bit unsigned integer | unsigned long | uint32_t |
| Float32Array | -3.4E38 to 3 4E38 and 1.2E-38 is the min positive number |	4	32-bit IEEE floating point number (7 significant digits e.g., 1.123456) |unrestricted float | float |
| Float64Array | -1.8E308 to | 1 | 8E308 and 5E-324 is the min positive number	8	64-bit IEEE floating point number (16 significant digits e.g., 1.123...15) |unrestricted double | double |
| BigInt64Array | -263 to 263 | - | 1 | 8 |64-bit two's complement signed integer | bigint	| int64_t (signed long long) |
| BigUint64Array | 	0 to 264 |  - 1 | 8 |	64-bit unsigned integer | bigint | uint64_t (unsigned long long) |

## Example method of using typed array
```javascript
```