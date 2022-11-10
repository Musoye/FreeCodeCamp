blank_board = """
  1   2   3
1   |   |  
 --- --- ---
2   |   | 
 --- --- ---
3   |   |  
"""

name   = input("What is your name? ")
print("Welcome to Tic Tac Toe, " + name + ". Here is our playing board:")
print(blank_board)
position = input("Enter a position (i.e., 1,1): ")
print(position)

# TODO: Check the position is valid
# [your code here]
positions = ['1,1','1,2','1,3','2,1','2,2','2,3','3,1','3,3'];

  



# tic-tac-toe positions
a = " "
b = " "
c = " "
d = " "
e = " "
f = " "
g = " "
h = " "
i = " "



# TODO: Update the correct variable based on the position entered
# [your code here]
while position not in positions:
  print('You enter the wrong position.')
  position = input("Enter a position (i.e., 1,1): ")
if (a != ' '):
  print('It already been played there.')
else:
  a = 'X'



# print the updated board
board = f"""
  1   2   3
1 {a} | {b} | {c}
 --- --- ---
2 {d} | {e} | {f}
 --- --- ---
3 {g} | {h} | {i}
"""
print(board)