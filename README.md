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
## Day 2: Conditional Statements: If-Else
**Task:** _Complete the getGrade(score) function. It has one parameter: an integer, *score*, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her *grade* according to the following rules:_
- `if 25 < score <= 30, then grade = A`
- `if 20 < score <= 25, then grade = B`
- `if 15 < score <= 20, then grade = C`
- `if 10 < score <= 15, then grade = D`
- `if 5 < score <= 10, then grade = E`
- `if 0 < score <= 5, then grade = F`

**Input Format:** _Stub code in the editor reads a single integer denoting score from stdin and passes it to the function._

**Output Format:** _The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam._


**Sample Input**
```
  11
```

**Sample Output**
```
  D
  
``` 
## Day 2: Conditional Statements: Switch
**Task:** _Complete the `getLetter(s)` function in the editor. It has one parameter: a string, *s*, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:_
- If the first character in string *s* is in the set `{a,e,i,o,u}`, then return A.
- If the first character in string *s* is in the set `{b,c,d,f,g}`, then return B.
- If the first character in string *s* is in the set `{h,j,k,l,m}`, then return C.
- If the first character in string *s* is in the set `{n,p,q,r,s,t,u,v,w,x,y,z}`, then return D.

**Input Format:** _reads a single string denoting s from stdin._

**Output Format:** _ returns ,a string ,a single letter determined as described above._

**Sample Input**
```
  adfgt
```

**Sample Output**
```
  A
  
```
## Day 2: Loops
**Task:** 
1. First, print each vowel in *s* on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in *s*.
2. Second, print each consonant (i.e., non-vowel) in *s* on a new line in the same order as it appeared in *s*.

**Input Format:** _There is one line of input with the string s._

**Output Format:** _First, print each vowel in *s* on a new line (in the same order as they appeared in *s*). Second, print each consonant (i.e., non-vowel) in *s* on a new line (in the same order as they appeared in *s*)._

**Sample Input**
```
  javascriptloops
```

**Sample Output**
```
  a
  a
  i
  o
  o
  j
  v
  s
  c
  r
  p
  t
  l
  p
  s
  
```  
## Day 3: Arrays
**Task:** _Complete the `getSecondLargest()` function._

**Input Format:** 
1. The first line contains an integer, n, the size of the nums array.
2. The second line contains n space-separated numbers that describe the elements in nums.

**Output Format:** _Return the **second largest number** in nums_

**Sample Input**
```
  5
  2 3 6 6 5
```

**Sample Output**
```
  5
  
```  
## Day 3: Try, Catch, and Finally
**Task:** _Complete the `reverseString()` function; it has one parameter, s. You must perform the following actions:_
1. Try to reverse string s using the `split`, `reverse`, and `join` methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

**Input Format:** _reads variable s from stdin and passes it to the function._

**Output Format:** _You must write two print statements using `console.log()`:_
1. Print the contents of a caught exception's message on a new line. If no exception was thrown, this line should not be printed.
2. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

**Sample Input 0**
```
  "1234"
```

**Sample Output 0**
```
  4321
  
``` 
**Sample Input 1**
```
  Number(1234)
```

**Sample Output 1**
```
  s.split is not a function
  1234
  
``` 
Explanation:
_`s =Number(1234)` is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, it throws an exception. We then catch the exception and print its message, which is `s.split` is not a function. Next, we finally print s which, because it wasn't able to be reversed, is Number(1234)._

```  
## Day 3: Throw
**Task:** _Complete the `isPositive()` function below. It has one integer parameter, a. If the value of a is positive, it must return the string `YES`. Otherwise, it must throw an Error according to the following rules:_
- If a is 0, throw an Error with `message = Zero Error`.
- If a is negative, throw an Error with `message = Negative Error`.

**Input Format:** _Locked stub code in the editor reads the following input from stdin and passes each value of a to the function as an argument:_
_The first line is an integer, n, denoting the number of times the function will be called with some a._
_Each line i of the n subsequent lines contains an integer denoting some a._

**Output Format:** _If the value of a is positive, the function must return the string YES. Otherwise, it must throw an Error._


**Sample Input 0**
```
  3
  1
  2
  3
```

**Sample Output 0**
```
  YES
  YES
  YES 
  
``` 
**Sample Input 1**
```
  3
  2
  0
  6
```
**Sample Output 1**
```
  YES
  Zero Error
  YES   
``` 
