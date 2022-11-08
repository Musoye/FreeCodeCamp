# Write your solution below the starter code
# Follow the instructions in the tab to the right

import random

# Welcome the user to the game
print("Welcome to rock, paper, scissors. Good luck!")

# Make a choice for the computer player
# Get a choice from the user
# Compare the user and computer choice
# Print the right message, based on the choices
def game(player, computer):
  dic = {'R':'Rock','P':'Paper','S':'Scissors'}
  if (computer == 'R' and player =='S') or (computer == 'P' and player =='R') or (computer == 'S' and player =='P'):
    print(f'The computer chooses {dic[computer]}')
    print(f"{dic[computer]} smashes {dic[player]}, You lose")
  elif (player == 'R' and computer == 'S') or (player == 'P' and computer == 'R') or (player == 'S' and computer == 'P'):
    print(f'The computer chooses {dic[computer]}')
    print(f"{dic[player]} smashes {dic[computer]}, You win")
  else:
    print("There is a tie")
    #if the computer and the player input is the same.The function go on recursively to satisfy the game.
    list =['R','P','S']
    player = input('Enter a letter between R,P,and S: ')
    player = player.upper()
    while player not in list:
      print("Error! Pick between the list")
      player = input('Enter a letter between R,P,and S: ')
      player = player.upper()   
    computer = random.choice(list)
      #what the player and the computer output
    dic = {'R':'Rock','P':'Paper','S':'Scissors'}
    output = f'Player { dic[player] } : Computer { dic[computer] }'
    print(output)
    #calling of function of the game
    game(player,computer)


list =['R','P','S']
player = input('Enter a letter between R,P,and S: ')
player = player.upper()
while player not in list:
    print("Error! Pick between the list")
    player = input('Enter a letter between R,P,and S: ')
    player = player.upper()
computer = random.choice(list)
#what the player and the computer output
dic = {'R':'Rock','P':'Paper','S':'Scissors'}
output = f'Player { dic[player] } : Computer { dic[computer] }'
print(output)
#calling of the game function
game(player,computer)