# TODO 1: Replace the below code to accept the "weight" and "height" values as input from the user
weight = float(input('Enter the weight: '))
height = float(input('Enter the height: '))

# TODO 2: Calculate the BMI value based on the weight and height values
BMI = weight / height ** 2

# This is a handy function to round the number to a 1 decimal point
# Don't change the code below
BMI = round(BMI, 1)

print(f"The body mass index is: {BMI}")

print("\n------BMI Categories------")

print("<18.5        : Underweight")
print("18.5 – 24.9  : Normal weight")
print("25 - 29.9    : Underweight")
print(">=30         : Obesity")
