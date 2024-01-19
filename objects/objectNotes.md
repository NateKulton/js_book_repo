Problem 1:

This is pretty much the object version of acessing stuff in an array with its index

Problem 2:
Which of the following values are valid keys for an object?

1 :No (Right answer: Yes)
'1' :Yes (Right answer: Yes)
undefined :No (Right answer: Yes)
'hello world' :Yes (Right answer: Yes)
true :No (Right answer: Yes)
'true' :Yes (Right answer: Yes)

Well LS says they all are valid keys, but I'd argue that they over simplifying the answer.
Because JS coerces them into strings and they don't stay as the same data type,
so that isn't the same as all of this being actual valid keys.
If they were truly valid keys they would have no need for the coercion for them to work.
On the other hand they may say it this way so if you are working with other data types you remember that they are all
reduced down to a single key aka if you use 1 as the key it turns into '1' so on a fundemental level they are the same

Problem 3:

I thought they wanted me to use a for/ in loop, because they act a lot like a normal for loop that you use on an array

Problem 4:

Looks like I did what they said...Till I look at their answer lol.
So I did they same thing except I got rid of the console.log() that confirmed that I didn't mutate they og object

Problem 5:

So I did more than they did, because I wanted to make sure it wasn't somehow just logging the values of myProtoObj.
So I added to the object to make sure it was different compared to the og object so I knew it was a different one.
That also had something added to it

Problem 6:

I got them all right. Not much to say tbh

Problem 7:

Snippet 1:
This will make an array of the keys of the myObj object and then the function will log them to the console

Snippet 2:
This will log all the keys to the console as well. It just uses a more simple syntax to read

So I was wrong about the output because snippet 1 only logs myObj's "own" properties. Not the inherited properties too
but snippet 2 does go through them all like I was expecting

LS Note: We can add a conditional to snippet 2 to get the same output from for..in:
 all we need to do is check whether the key is myObj's own property:

Problem 8:

This was a tough one. I was kinda on the right track I just didn't know how to put it all together

Problem 9:

Will I forgot to explain why I thought my answer was what it was lol
(I wasn't sure about my answer so that was probably a part of it)
so I knew the qux variable was a global variable, and argument2 never actually reassigned anything,
so that is why it was just 'hello'
and argument1 reassigned the key value pair on line 9

Problem 10:

"primitive values and 4 object values" at first,
 but I had in mind to count all the primitive values even the ones inside of object values too
 so I had the right answer in mind I just rushed looking at the answer without double checking my answer

Problem 11:

I knew what I needed to do I just rushed again

Problem 12:

So at first I was writitng bar = foo() and I forgot that that invokes the function rather and assigning something.
So I tried to look at modzilla for a syntax refresher but I knew I didn't know how to search for it on there.
Because of what it was, so I went to stackoverflow and found an example that helped me out
(so the main reason I was confused was because I thought I needed () beside the function
 to make JavaScript treat it as a function)

Problem 13:

I knew I needed to pass the function another function I just didn't understand that you console.log(bar())
just needed a function passed to it like the way they did it. (Always I was confused,
 because it looked like they kinda hard coded it tbh)

Problem 14:

It would be hard to rewrite all of my answer,
 so imma just copy paste the answer so I need see it here if I ever look back on this


// LS: Answer
Variables: hello, xyzzy, greeting, name, howdy, and foo. Remember that function names and parameters are variables. In addition, constants created with const are variables that can't be reassigned. Property names in an object are not variables.

Property Names: a, b, c, d. It's also worth noting that array indexes are property names, so 0, 1, and 2 are property names for the [3, 4, 5] array. (Don't worry if you missed the array indexes as property names.)

Primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', and 'Grace' are the most obvious primitive values. It's worth noting that object property names are usually strings, and strings are primitive values. Thus, we should also include 'a', 'b', 'c', and 'd' in the list and 0, 1, and 2 for the array indexes of [3, 4, 5].

Objects: The functions hello and xyzzy are both objects, as are the following:

{ a: 1, b: 2, c: [3, 4, 5], d: {} }
[3, 4, 5]
{}.

Problem 15:

Variables: bar, arg1, arg2, foo, qux, result

Property Values: abc, def, ghi, jkl, mno, pqr (and the indexes of abc, o, 1, 2,* and 3)

Primitive values: null, NaN, foo, arg1, arg2 (arg1, and arg2 these primitives won't be created until we run the code. )

LS answer: Primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', and 'Antonina' are the most apparent primitive values.
Since property names are strings in most cases, and strings are primitive values, we should also include 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.


Objects: the function bar and the object qux are both objects
[1, 2, 3, [4, 5, 6]]
[4, 5, 6] are objects as well
