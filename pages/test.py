from Cryptodome.Util.number import *

# int(input("ENTER n : "))
n = 1763350599372172240188600248087473321738860115540927328389207609428163138985769311
e = 65537  # int(input("ENTER e : "))
#int(input("ENTER c : "))
c = 916327286977254647126410302042461056506864664193281676779634312639235819857319682

print("Find out p and q from factordb")

# p = int(input("ENTER P : "))
# q = int(input("ENTER q : "))
p = 31415926535897932384626433832795028841
q = 56129192858827520816193436882886842322337671

phi = (p-1)*(q-1)

d = inverse(e, phi)

m = pow(c, d, n)

print("The message is :")
print(m)
print("-"*69)
print("The message after long_to_bytes is :")
print(long_to_bytes(m))
