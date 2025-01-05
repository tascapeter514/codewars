# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

test_one = "No offense but,\nYour writing is among the worst I've ever read"
test_two = "This website is for losers LOL!"


# my solution
def disemvowel(str):
    consonants = [c for c in str if c not in 'aeoiuAEIOU']
    return "".join(consonants)

# codewars solutions
# def codewars_one(str):
#     return "".join(c for c in str if c.lower() not in 'aeiou')


# def codewars_two(str):
#     for i in 'aeiouAEIOU':
#         str = str.replace(i, '')
#     return str


# print(codewars_two(test_one))

    
    
print(disemvowel(test_one))
print(disemvowel(test_two))
