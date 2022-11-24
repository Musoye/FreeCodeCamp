# See the Instructions tab.
# Scroll down to see where you should write your solution
roster = [
  "Thibaut Courtois",
  "Dani Carvajal",
  "Brahim Díaz",
  "Éder Militão",
  "Jesús Vallejo",
  "Nacho",
  "Eden Hazard",
  "Toni Kroos",
  "Karim Benzema",
  "Takefusa Kubo",
  "Álvaro Odriozola",
  "Luka Modrić",
  "Marco Asensio",
  "Marcelo",
  "Andriy Lunin",
  "Martin Ødegaard",
  "Casemiro",
  "Federico Valverde",
  "Luka Jović",
  "Sergio Ramos",
  "Lucas Vázquez",
  "Gareth Bale",
  "Dani Ceballos",
  "Vinícius Júnior",
  "Raphaël Varane",
  "Rodrygo",
  "Isco",
  "Ferland Mendy",
  "Mariano"
]

# Write your solution below
print("\nThe current Real Madrid roster:\n")
# Print the current roster using a for loop
for i in roster:
  print(i)
# Remove players using pop()
roster.pop(2)
roster.pop(8)
roster.pop(8)
roster.pop(12)
roster.pop(15)
roster.pop(19)

# Add players using append()
roster.append('Eduardo Camavinga')
roster.append('David Alaba')
 
print("\n------")
print("\nThe new Real Madrid roster:\n")
# Print the new roster using a for loop
for i in roster:
  print(i)