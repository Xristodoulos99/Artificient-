'''
Python Assessment:
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> Output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
'''



#helper function
#returns a number cubed
def cube(number):
    return number**3


#returns a string of a list's contents with a spesific format (item1+item2+item3=)
def printtable(arrayofnumbers):
    #initializing the string that returns
    equation=""
    for index, number in enumerate(arrayofnumbers):
        if index<len(arrayofnumbers)-1: #adds a '+' after all the items exept the last one where it adds an '='
            equation=equation+str(number)+ "+"
        else:
            equation = equation + str(number)+ " ="

    return equation


totalsum=0
inputnumber=input("Please give a positive integer:\n")


#Checks if the input is a positive integer and converts it to type int
while not (inputnumber.isdigit()):
    inputnumber = input("Please give a positive integer:\n")
else:
    inputnumber = int(inputnumber)
    if inputnumber<=0:
        inputnumber = input("The number you gave is not positive. Please give a positive integer:\n")

#initializing a list of the cubed numbers for printing purpose
arrayofnumbers=[]

#calculates the cubes and the sum
for number in range(1,inputnumber+1):
    arrayofnumbers.append(cube(number))
    totalsum= totalsum + cube(number)

#Sum can also be found like this
#totalsum= (sum(arrayofnumbers))

#prints final sum , calls printtable to help visualize the result.
print("Sum of all integer numbers cubed up to the input number, including the given number: ",printtable(arrayofnumbers),totalsum)

input("Enter anything to quit")
