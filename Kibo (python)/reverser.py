def reverser(newarr):
    arr = newarr
    length = len(arr)
    for i in range(int(length/2)):
        lastIndex = length - i - 1
        backNum = arr[lastIndex]
        arr[lastIndex] = arr[i]
        arr[i] = backNum
    return arr


test = reverser([1, 2, 3, 4, 5, 6])
print(test)
print(reverser(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']))


#testing the unicode character in python (set by UTF-8 and ASCII)
print(chr(32))  
print(ord('a'))  