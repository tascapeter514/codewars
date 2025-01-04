


# my solution
def row_sum_odd_numbers(n):
    # initalize matrix with odds[0] = [1]
    odds = [[1]]
    # loop through 1 to n, inclusive
    for i in range(1, n + 1):
        row = []
        # create row and add two to the last number in the odds list
        num = odds[len(odds) - 1][len(odds) - 1] + 2
        row.append(num)
        for j in range(i):
            num = row[j] + 2
            row.append(num)
        odds.append(row)
    return sum(odds[n - 1])

# print(row_sum_odd_numbers(19))


# codewars solutions
# def odds(n):
#     return n**3

# print(odds(3))

