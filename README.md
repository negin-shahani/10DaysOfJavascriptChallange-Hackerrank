# 10 Days Of Javascript Challange -Hackerrank :computer:
**I am trying to master JavaScript by joining the challenges in [HackerRank](https://www.hackerrank.com/domains/tutorials/30-days-of-code).**
## Day 8: Buttons Container

**Task:** _We want to create nine buttons enclosed in a div, laid out so they form a `3X3` grid. Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button._

_Complete the code in the editor so that it satisfies the following criteria:_
- `Initial State`. The initial layout looks like this: </br> </br>
      <img src="https://s3.amazonaws.com/hr-challenge-images/0/1456631615-634977c808-ScreenShot2016-02-28at9.22.14AM.png" alt="TryHackMe">
      
      
      
- `Element IDs`. Each element in the document must have an id, specified below:
    - The button container `div's id` must be `btns`.
    - The `initial innerHTML labels` must have the following button ids:
    
        | innerHTML  | id |
        | ------------- | ------------- |
        | 1  | btn1  |
        | 2  | btn2  |
        | 3  | btn3  |
        | 4  | btn4  |
        | 5  | btn5  |
        | 6  | btn6  |
        | 7  | btn7  |
        | 8  | btn8  |
        | 9  | btn9  |
        
-  `Styling`. The document's elements must have the following styles:
    - The `width` of btns is 75%, relative to the document body's width.
    - Each button (i.e., btn1 through btn9) satisfies the following:
        - The `width` is 30%, relative to its container width.
        - The `height` is 48px.
        - The `font-size` is 24px.
 
- `Behavior`. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., `bt1`, `btn2`, `btn3`, `btn4`, `btn6`, `btn7`, `btn8`, `btn9`) must rotate in the clockwise direction. Do not update the button id's.


_The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:_

```
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>
```
## Day 8: Create a Button

**Task:** _Complete the code in the editor so that it creates a clickable button satisfying the following properties:_
- The `button`'s id is `btn`.
- The `button`'s initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS object's `innerHTML` property.
- The button has the following `style` properties:
    - A `width` of 96px.
    - A `height` of 48px.
    - The `font-size` attribute is 24px.


_The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:_

```
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
```
## Day 7: Regular Expressions I

**Task:** _Complete the function in the editor below by returning a RegExp object, `re`, that matches any string `s` that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u._

**Input Format:** 
- The length of string `s` is  >=3.
- String `s` consists of lowercase letters only (i.e., [a-z]).

**Output Format:** _The function must return a `RegExp object` that matches any string s beginning with and ending in the same vowel._

**Sample Input 0**
```
  bcd
```

**Sample Output 0**
```
  false
```

**Sample Input 1**
```
  abcda
```

**Sample Output 1**
```
  true
```
**Sample Input 2**
```
  abcdo
```

**Sample Output 2**
```
  false
```


## Day 7: Regular Expressions II

**Task:** _Complete the function in the editor below by returning a RegExp object, `re`, that matches any string `s` satisfying both of the following conditions:_

- String `s` starts with the prefix Mr., Mrs., Ms., Dr., or Er.
- The remainder of string `s` (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

**Input Format:** 
- The length of string `s` is  >=3.

**Output Format:** _The function must return a `RegExp object` that matches any string s satisfying both of the given conditions._

**Sample Input 0**
```
  Mr.X
```

**Sample Output 0**
```
  false
```

**Sample Input 1**
```
  Dr#Joseph
```

**Sample Output 1**
```
  false
```
**Sample Input 2**
```
 Er .Abc
```

**Sample Output 2**
```
  false
```

## Day 7: Regular Expressions III

**Task:** _Complete the function in the editor below by returning a `RegExp object`, `re`, that matches every integer in some string `s`._

**Input Format:** 
- The length of string `s` is  >=3.
- It's guaranteed that string `s` contains at least one integer.

**Output Format:** _The function must return a R`egExp object` that matches every integer in some string s._

**Sample Input 0**
```
  102, 1948948 and 1.3 and 4.5
```

**Sample Output 0**
```
  102
  1948948
  1
  3
  4
  5
```

**Sample Input 1**
```
  1 2 3
```

**Sample Output 1**
```
  1
  2
  3
```
## Day 6: Bitwise Operators

**Task:** _We define `S` to be a sequence of distinct sequential integers from 1 to n; in other words, `S={1,2,3,...,n}`. We want to know the maximum bitwise AND value of any two integers, `a` and `b` (where `a < b`), in sequence `S` that is also less than a given integer, `k`._

**Input Format:** _The first line contains an integer, `q`, denoting the number of function calls._
_Each of the `q` subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of `n` and `k`._

**Output Format:** _Return the maximum possible value of `a & b < k` for any `a < b` in sequence S._

**Sample Input**
```
  3
  5 2
  8 5
  2 2
```

**Sample Output**
```
  1
  4
  0
```
## Day 6: JavaScript Dates

**Task:** _Given a , `date string`, in the format **MM/DD/YYYY**, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday._

**Input Format:** _The first line contains an integer, `d`, denoting the number of dates to check._
_Each line `i` of the `d` subsequent lines contains a date in MM/DD/YYYY format; each date denotes some `date string` that is passed to the function._

**Output Format:** _The function must return a string denoting the day of the week corresponding to the date denoted by `date string`._

**Sample Input**
```
  2
  10/11/2009
  11/10/2010
```

**Sample Output**
```
  Sunday
  Wednesday
```
## Day 5: Inheritance

**Task:** _We provide the implementation for a `Rectangle` class in the editor. Perform the following tasks:_

1. Add an `area()` method to Rectangle's prototype.
2. Create a `Square` class that satisfies the following:
    - It is a subclass of Rectangle.
    - It contains a `constructor` and no other methods.
    - It can use the Rectangle class' area method to print the area of a Square object._

## Day 5: Template Literals

**Task:** _It has a tagged template literal that passes the `area` and `perimeter` of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values._
_Complete the function in the editor so that it does the following:_
  1. Finds the initial values of `s1` and `s2` by plugging the area and perimeter values into the formula: (`a` is area and `p` is perimeter)
      - `s1 = (p + Math.sqrt((p*p)- (16*a)))/4`
      - `s2 = (p - Math.sqrt((p*p)- (16*a)))/4`
  2. Creates an array consisting of `s1` and `s2` and sorts it in ascending order.
  3. Returns the sorted array.


**Input Format:** _The first line contains an integer denoting `s1`._
_The second line contains an integer denoting `s2`._

**Output Format:** _Return an array consisting of `s1` and `s2`, sorted in **ascending** order._

**Sample Input**
```
  10
  14
```

**Sample Output**
```
  10
  14
  
```

**Explanation:** 

_The locked code in the editor passes the following arrays to the tag function:_
_The value of literals is `[ 'The area is: ', '.\nThe perimeter is: ', '.' ]`._
_The value of expressions is [ 140, 48 ], where the first value denotes the rectangle's area, A, and the second value denotes its perimeter, P._
_We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer._

## Day 5: Arrow Functions

**Task:** _It has one parameter: an array, `nums`. It must iterate through the array performing one of the following actions on each element:_
    - If the `element is even`, multiply the element by `2`.
    - If the `element is odd`, multiply the element by `3`.

**Input Format:** 
_The first line contains an integer, `n`, denoting the size of `nums`._
_The second line contains n space-separated integers describing the respective elements of `nums`._

**Output Format:** _Return the modified array where every even element is doubled and every odd element is tripled._

**Sample Input**
```
  5
  1 2 3 4 5
```

**Sample Output**
```
  3 4 9 8 15 
```

## Day 4: Create a Rectangle Object
**Task:** _Complete the function in the editor. It has two parameters: `a` and `b`. It must return an object modeling a rectangle that has the following properties:_
- `length`: This value is equal to a.
- `width`: This value is equal to b.
- `perimeter`: This value is equal to `2 * (a + b)`.
- `area`: This value is equal to `a * b`.

**Input Format:** _The first line contains an integer denoting a._
_The second line contains an integer denoting b._

**Output Format:** _Return a object that has the properties specified above. Locked code in the editor prints the returned object's `length`, `width`, `perimeter`, and  `area` to STDOUT._


**Sample Input**
```
  4
  5
```

**Sample Output**
```
  4
  5
  18
  20
  
```
## Day 4: Count Objects
**Task:** _Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by `x` and `y`. The function must return a count of all such objects  in array  that satisfy `o.x == o.y`._


**Input Format:** _The first line contains an integer denoting n._
_Each of the n subsequent lines contains two space-separated integers describing the values of x and y._

**Output Format:** _Return a count of the total number of objects `O` such that `o.x == o.y`. Locked stub code in the editor prints the returned value to STDOUT._


**Sample Input**
```
  5
  1 1
  2 3
  3 3
  3 4
  4 5
```

**Sample Output**
```
  2
  
```
**Explanation:** 

_There are `n = 5` objects in the **Objects** array:_
- objects<sub>0</sub> = {x:1 , y:1}
- objects<sub>1</sub> = {x:2 , y:3}
- objects<sub>2</sub> = {x:3 , y:3}
- objects<sub>3</sub> = {x:3 , y:4}
- objects<sub>4</sub> = {x:4 , y:5}

_Because we have two objects O that satisfy  `o.x == o.y`(i.e., objects<sub>0</sub> and objects<sub>2</sub>), we return **2** as our answer._

## Day 4: Classes

**Task:** _Create a **Polygon class** that has the following properties:_
- A `constructor` that takes an array of integer values describing the lengths of the polygon's sides.
- A `perimeter()` method that returns the polygon's perimeter.


**Input Format:** _There is no input for this challenge._

**Output Format:** _The perimeter method must return the **polygon's perimeter** using the side length array passed to the constructor._

**Explanation:** 

_Consider the following code:_
```
// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());

```
_When executed with a properly implemented Polygon class, this code should print the result of `3 + 4 + 5 = 12`._

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
