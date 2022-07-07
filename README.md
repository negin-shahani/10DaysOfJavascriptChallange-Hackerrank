# 10 Days Of Javascript Challange -Hackerrank :computer:
**I am trying to master JavaScript by joining the challenges in [HackerRank](https://www.hackerrank.com/domains/tutorials/30-days-of-code).**
## Day 0: Hello, World!
**Task:** _A greeting function has one parameter, parameterVariable._
1. Use `console.log()` to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
2. Use `console.log()` to print the contents of parameterVariable (i.e., the argument passed to main).

**Input Format:** 
| Data Type  | Parameter | Description |
| ------------- | ------------- | ------------- |
| string  | parameterVariable  | A single line of text containing one or more space-separated words.|

**Output Format:** _Print the following two lines of output:_
1. On the first line, print Hello, World! (this is provided for you in the editor).
2. On the second line, print the contents of parameterVariable.

**Sample Input**
```
  Welcome to 10 Days of JavaScript!
```

**Sample Output**
```
  Hello, World!
  Welcome to 10 Days of JavaScript!
  
```  
## Day 0: Data Types
**Task:** _Variables named `firstInteger`, `firstDecimal`, and `firstString` are declared. You must use the  operator to perform the following sequence of operations:_

1. Convert `secondInteger` to an integer (Number type), then sum it with `firstInteger` and print the result on a new line using **console.log**.
2. Convert `secondDecimal` to a floating-point number (Number type), then sum it with `firstDecimal` and print the result on a new line using **console.log**.
3. Print the concatenation of `firstString` and `secondString` on a new line using console.log. Note that  must be printed first.

**Input Format:** 
| Data Type  | Parameter | Description |
| ------------- | ------------- | ------------- |
| string  | secondInteger  | The string representation of an integer you must sum with firstInteger.|
| string  | secondDecimal  | The string representation of a floating-point number you must sum with firstDecimal.|
| string  | secondString  | A string of one or more space-separated words you must append to firstString.|

**Output Format:** _Print the following three lines of output:_
1. On the first line, print the sum of firstInteger and the integer representation of secondInteger.
2. On the second line, print the sum of firstDecimal and the floating-point representation of secondDecimal.
3. On the third line, print firstString concatenated with secondString. You must print firstString before secondString.

**Sample Input**
```
  12
  4.32
  is the best place to learn and practice coding!
```

**Sample Output**
```
  16
  8.32
  HackerRank is the best place to learn and practice coding!
  
```  
## Day 1: Arithmetic Operators
**Task:** _Complete the following functions:_

1. `getArea(length, width)`: Calculate and return the area of a rectangle having sides length and width.
2. `getPerimeter(length, width)`: Calculate and return the perimeter of a rectangle having sides length and width .

**Input Format:**  `getArea`:
| Data Type  | Parameter | Description |
| ------------- | ------------- | ------------- |
| Number  | length  | A number denoting the lenght of a rectangle.|
| Number  | height  | A number denoting the height of a rectangle.|

`getPerimeter(length, height)`:

| Data Type  | Parameter | Description |
| ------------- | ------------- | ------------- |
| Number  | length  | A number denoting the lenght of a rectangle.|
| Number  | height  | A number denoting the height of a rectangle.|

**Output Format:**

| Function  | Return Type | Description |
| ------------- | ------------- | ------------- |
| getArea  | Number  | The area of a rectangle having sides _length_ and _width_.|
| getPerimeter  | Number  | The perimeter of a rectangle having sides _length_ and _width_.|

**Sample Input**
```
  3
  4.5
```

**Sample Output**
```
  13.5
  15
```  
## Day 1: Functions
**Task:** _Implement a function named `factorial()` that has one parameter: an integer, n. It must return the value of  n!(i.e., n factorial)._

**Input Format:** _Locked stub code in the editor reads a single integer, `n`, from stdin and passes it to a function named factorial._

**Output Format:** _The function must return the value of `n!`._


**Sample Input**
```
  4
```

**Sample Output**
```
  24
  
``` 
## Day 1: Let and Const
**Task:**
1. Declare a constant variable, PI, and assign it the value `Math.PI`. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, r, denoting the radius of a circle from stdin.
3. Use PI and r to calculate the *area* and *perimeter* of a circle having radius.
4. Print *area* as the first line of output and print *perimeter* as the second line of output.

**Input Format:** _A single integer, r, denoting the radius of a circle._

**Output Format:** _Print the following two lines:_
1. On the first line, print the *area* of the circle having radius r.
2. On the second line, print the *perimeter* of the circle having radius r.

**Sample Input**
```
  2.6
```

**Sample Output**
```
  21.237166338267002
  16.336281798666924
  
```
