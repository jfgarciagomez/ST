import random
diccionario = {'nombre':'ARD1','temperatura' : 25, 'humedad' : 22, 'sonido': 79, 'red': 13}

def impr(dc):
    for a, b in diccionario.items():
        print(a, ':', b)


impr(diccionario)
diccionario['green']= 12
diccionario['blue']=24
diccionario['red']+=10
for c in diccionario:
    diccionario[c]=random.randint(0,99)
print('\n\nDiccionario actualizado:')
impr(diccionario)