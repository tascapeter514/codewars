# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.


test_case = "abracadabra"


# my solution
def get_count(sentence):
    count = 0
    for l in sentence:
        if l == 'a' or l == 'e' or l == 'i' or l == 'o' or l == 'u':
            print(l)
            count += 1
    return count
    



print(get_count(test_case))

# codewars solution

def get_vowels(sentence):
    return sum(1 for let in sentence if let in 'aeiou')

print(get_vowels(test_case))