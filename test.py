if __name__ == "__main__":
    """update the 1-calculator to receive CLD"""
    import sys
    from calculator_1 import add, mul, sub, div

    argv = sys.argv
    b = len(argv) - 1
    signs = ['+', '*', '/', '-']
    if b != 3:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        sys.exit(1)
    elif argv[2] not in signs:
        print("Unknown operator. Available operators: +, -, * and /")
        sys.exit(1)
    else:
        if argv[2] == '+':
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], add(int(argv[1]), int(argv[3]))))
        elif argv[2] == '*':
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], mul(int(argv[1]), int(argv[3]))))
        elif argv[2] == '/':
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], div(int(argv[1]), int(argv[3]))))
        elif argv[2] == '-':
            print("{} {} {} = {}".format(argv[1], argv[2], argv[3], add(int(argv[1]), int(argv[3]))))