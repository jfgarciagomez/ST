#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import time
import json
import urllib3
import MySQLdb

db = MySQLdb.connect(host = "localhost", user = "adroom", passwd = "admin", db = "iroom")

#create table sensors( time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, nombre VARCHAR(15), valor INTEGER);
type_sensor = ['temperature', 'humidity', 'light', 'sound', 'motion']
last_value = [0,0,0,0,0,0,0,0]
#ACTULIZAR LA VARIABLE server CON LA DIRECCIÓN IP DE LA MÁQUINA EN LA QUE ESTÑE CORRIENDO EL EMULADOR DE IROOM
server = 'http://10.0.8.20:8000/'

http = urllib3.PoolManager()
def updateSensor(code):
	value = 0
	try:
		""" PARTE 1:COMPLETAR AQUÍ EL CÓDIGO PARA LLEER EL VALOR DE UN SENSOR CON API REST"""

	except ValueError:
		print 'Error de decodificación JSON'
	if value != last_value[code]:
		with db:

			""" PARTE 1: COMPLETAR AQUÍ EL CÓDIGO PARA ESCRIBIR EN LA BASE DE DATOS EL VALOR DEL SENSOR"""

def controlLightColor():
	with db:
		cursor.execute ("""SELECT valor FROM sensors WHERE nombre='red' order by time desc""")
		red = int(cursor.fetchone()[0])
		if (red != last_value[5]):
			last_value[5] = red
			print "red:" + str(red)
			response = http.request('PUT', server+'red/'+str(red))


		""" PARTE 1: COMPLETAR AQUI EL RESTO DE CÓDIGO PARA PROCESAR EL COLOR VERDE Y AZUL"""

if __name__ == "__main__":
	cursor=db.cursor()
	cursor.execute ("""DROP table sensors""")
	cursor.execute ("""create table sensors( time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, nombre VARCHAR(15), valor INTEGER)""")
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('temperature', 20))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('humidity', 40))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('light', 30))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('sound', 10))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('motion', 0))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('red', 20))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('blue', 20))
	cursor.execute ("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", ('green', 20))
	db.commit()
	while True:
		for code in range(0, 5):
			updateSensor(code)
			controlLightColor()
			time.sleep(5)
