Problem 1:

My answer: the output will be => [1, 4, 3]

Problem 2:

-That the greeting isn't defined on line 4 at character (column) 15
-And there is an anonymous object on line 13 character (column) 1

LS. said the rest of the error is telling us about how node does its magic so it doesn't really matter to us

Problem 3:

Was very simply so I don't really have anything to say

Problem 4:

So I got the same answer as the right one,
 except I put mine in a function,
  because at first I thought I needed to iterate through an array of numbers.
Also I wanted my code to be more reusable and that is why I wanted a function.
I didn't test their list because the problem said "Given a list of numbers" not 'With the given list of numbers',
so it made it seemd like those were just examples of any numbers that could be used. And that is also why I thought I
needed a function because I thought it needed to be able to used for any list I swapped it too

Problem 5:

So string.split will split the string and will put them into an array if it has spaces in it and then reverse that string.
but if it is just a one word string it won't look like anything happened so far.
And you can't reverse a one word string in an array.
.map will copy the array and then it needs a callback function and in this code we are using the .length method.
So it will end up returning 1

So I was wrong and I know why. I thought the .length was being called on the array itself not the elements in the array.
When we called .map we were working on the elements in the array instead

Problem 6:

So after looking at the answer I see I was not noticing the code I was given was two arguments,
 so I had to make parameters to match those arguments. I need to take my time and look at the little details like that.
 I didn't fully understand that part and I should have studied it instead of trying to type the code
  if I didn't understand that part because I introduced bugs and got derailed because of it

Problem 7:

Exception handling is a way we can make it so if your code throws an error it won’t shut
the program down by making it output undefined (edit: or null) instead.

So that was my answer till I looked back on the chapter. Exception handling is a way to manage errors so they don't
ruin otherwise working code

How LS defines it: Exception handling is a process that deals with errors in a manageable and predictable manner.
 For now, you should be familiar with how exception handling works and what it looks like in a program.
  The reserved words try and catch (and sometimes finally) often occur in real-world JavaScript programs,
   so you should learn enough to understand what they do.

Problem 8:

So I used the JavaScript docs and learned remember how this worked. Also I was used the ! symbol before I looked deeper
into the docs, but I was confused to why con if else statements weren't working and it was, becaue NaN is not equal to
NaN weirdly enough

Problem 9:

So it looks like I got the output I was looking for. I did look at the hint though.
I also tested and saw I could have used 1 to divide by,
 but I thought dividing by 1 looked silly to me so I used 2 instead.
So I got the right output, I just may have wrote more code than I needed to

Problem 10:

Spot I’m on in Launch School (JavaScript book(More Stuff(Exercises)))

So at first I thought it would not work and throw an error or something.
But I thing it will coerce the string into a number and then increment it by one from there

So I almost had it, the return value is 5 because y++ returns the value before incrementing.
 ++y Would have returned 6 but we were working with y++ not ++y. (the value of y is 6)

One more note to at. This is the last chapter of the book and I wanted to explain organized my code like I did.
I first tried to put notes directly with the code and you'll see that if you look back in my code,
 but then I learned that that is too messy and so I stop doing that. But when it comes to the exercises themselves
 I only used one file because I wasn't sure if I how I should treat files that needed to by made before I got to the
 exercise session and I was sure if I had too many files it'd get messy, plus sometimes problems would make you go back
 to old ones and I thought it would be easy to lose track of what problem I was on because of that. So instead I just
 commented out my problems that I just finished and then would move on to the next one
