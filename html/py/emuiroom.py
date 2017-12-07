#!/usr/bin/python
# -*- coding: utf-8 -*- 

import time
from flask import Flask, request
from flask.ext import restful
from random import randint
"""
	Requiere instalación Restful: pip install flask-restful
    Arranca con: python emuiroom.py
"""
app = Flask(__name__)
api = restful.Api(app)

class temperature(restful.Resource):
	def get(self):

		value = randint(19,22)
		return {'temperature': value}
			
		

class humidity(restful.Resource):
	def get(self):
		value = randint(30,60)
		return {'humidity': value}
			
class light(restful.Resource):
	def get(self):
		value = randint(0,100)
		return {'light': value}

class sound(restful.Resource):
	def get(self):
		value = randint(20,80)
		return {'sound': value}	
		
class motion(restful.Resource):
	def get(self):
		value = randint(0,1)
		return {'motion': value}
			
class red(restful.Resource):	
	def put(self, id):
		print "Color rojo:"+str(id)
		return {'red': id}
		
class green(restful.Resource):	
	def put(self, id):
		print "Color verde:"+str(id)
		return {'green': id}
				  
class blue(restful.Resource):	
	def put(self, id):
		print "Color azul:"+str(id)
		return {'blue': id}



api.add_resource(temperature, '/temperature') 
api.add_resource(humidity, '/humidity') 
api.add_resource(light, '/light')
api.add_resource(sound, '/sound')
api.add_resource(motion, '/motion')
api.add_resource(red, '/red/<int:id>')
api.add_resource(green, '/green/<int:id>')
api.add_resource(blue, '/blue/<int:id>')




if __name__ == "__main__":
	app.run(host='0.0.0.0', port=8000, debug=True)
