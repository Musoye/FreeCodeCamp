#The board
aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
number_of_play = 0

name   = input("What is your name? ")
print("Welcome to Tic Tac Toe, " + name + ". Here is our playing board:")
print("You have to play two round before you can abort the game.")
for i in aboard:
    print(f'{i}\n')

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

player = "X"

#displaying score
score = {'X':0,'O':0}

# Loop for each turn
contd = True
while contd:
  print("It's " + player + "'s turn")
  position = input("Enter a position (i.e., 1,1): ")
  
  # Check the position is valid
  valid = position[0].isnumeric() and position[1] == "," and position[2].isnumeric()
  
  if valid:
    row = int(position[0])
    col = int(position[2])
  else:
    print("invalid position")
    continue
  
  # Update the correct variable based on the position entered
  if row == 1:
    if col == 1:
      aboard[0][0] = player
    elif col == 2:
      aboard[0][1] = player
    elif col == 3:
      aboard[0][2] = player
  elif row == 2:
    if col == 1:
      aboard[1][0] = player
    elif col == 2:
      aboard[1][1] = player
    elif col == 3:
      aboard[1][2] = player
  elif row == 3:
    if col == 1:
      aboard[2][0] = player
    elif col == 2:
      aboard[2][1] = player
    elif col == 3:
      aboard[2][2] = player

  #checking if scoring
  value = player
  if (value == aboard[0][0] and value == aboard[1][1]  and value == aboard[2][2]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[0][2] and value == aboard[1][1] and value == aboard[2][0]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[0][0] and value == aboard[0][1] and value == aboard[0][2]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[1][0] and value == aboard[1][1] and value == aboard[1][2]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[2][0] and value == aboard[2][1] and value == aboard[2][2]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[0][0] and value == aboard[1][0] and value == aboard[2][0]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[0][1] and value == aboard[1][1] and value == aboard[2][1]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  elif (value == aboard[0][2] and value == aboard[1][2] and value == aboard[2][2]):
    score[value] = score[value] + 1
    number_of_play += 1
    for i in aboard:
      print(f'{i}\n')
    print(f"The score:\n X: {score['X']} , O: {score['O']}\n")
    aboard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
  
  # print the board
  for i in aboard:
    print(f'{i}\n')

  #decide whether to continue with the game or not
  if (number_of_play % 2 == 0 and number_of_play != 0):
    aqu = input("Will you like to continue with this game y/n: ")
    if (aqu == 'n'):
      contd = False

  
  # Update Player
  if player == "X":
    player = "O"
  else:
    player = "X"