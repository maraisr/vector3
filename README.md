Vector 3
========
[![Bower version](https://badge.fury.io/bo/vector3.svg)](https://github.com/maraisr/vector3.ts)

## Example Usuage
```JavaScript
var myVectorOne = new Vector.Three([1,2,3]),
    myVectorTwo = new Vector.Three([3,4,5]);

myVectorOne.angle(myVectorTwo).toString() // 0.18623876586484955
myVectorOne.add(myVectorTwo).toString() // vec3:(4, 6, 8)
myVectorOne.multiplyScalar(2).array // [ 2, 4, 6 ] *JavaScript Array primitive*
myVectorOne.eq(myVectorTwo) // false
```

### Variables
```JavaScript
x // X axis (get:set)
y // Y axis (get:set)
z // Z axis (get:set)
array // [ x, y, z ]
magnitude // Vector magnitude
normal // Vector normal
```

### Basic Arithmetic
```JavaScript
add // Add one vector to another
subtract // Subtract one vector from another
multiplyScalar // Multiply vector by a scalar
divideScalar // Divide vector by a scalar
```

### Comparators
```JavaScript
eq // Returns true if side a is equal to side b. Eg. A.eq(b)
neq // Returns true if side a is NOT equal to side b. Eg. A.neq(b)
```

### Methods
```JavaScript
multiply // Multiplies vector a with vector b
divide // Divides vector a by vector b
angle // Calcualtes the angle between vector a and vector b
dot // Dot product of a and b
cross // Cross product of vector a and b
distance // The distance between vector a and vector b
reflect // The reflection vector of a
```

### Static Methods
```JavaScript
max // Returns a new vector with the larger axis values
min // Returns a new vector with the smaller axis values
```

## Complete Usuage
```JavaScript
var myVectorOne = new Vector.Three([1,2,3]),
    myVectorTwo = new Vector.Three([3,4,5]);

myVectorOne.array; // [ 1, 2, 3 ]
myVectorOne.magnitude; // 14
myVectorOne.normal; //3.7416573867739413

myVectorOne.add(myVectorTwo).toString(); // vec3:(4, 6, 8)
myVectorOne.subtract(myVectorTwo).toString(); // vec3:(-2, -2, -2)
myVectorOne.multiplyScalar(2).toString(); // vec3:(2, 4, 6)
myVectorOne.divideScalar(2).toString(); // vec3:(0.5, 1, 1.5)

myVectorOne.eq(myVectorTwo); // false
myVectorOne.neq(myVectorTwo); // true

myVectorOne.multiply(myVectorTwo).toString(); // vec3:(3, 8, 15)
myVectorOne.divide(myVectorTwo).toString(); // vec3:(0.3333333333333333, 0.5, 0.6)
myVectorOne.angle(myVectorTwo); // 0.18623876586484955
myVectorOne.dot(myVectorTwo); // 26
myVectorOne.cross(myVectorTwo).toString(); // vec3:(-2, 4, -2)
myVectorOne.distance(myVectorTwo); // 3.4641016151377544

Vector.Three.max(myVectorOne, myVectorTwo).toString(); //vec3:(3, 4, 5)
Vector.Three.min(myVectorOne, myVectorTwo).toString(); // vec3:(1, 2, 3)
```