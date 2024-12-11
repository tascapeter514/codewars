# Description:

# A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.




def is_pangram(st):
    alphabet = [chr(x) for x in range(ord('a'), ord('z') + 1)]
    return all(el in st.lower() for el in alphabet)