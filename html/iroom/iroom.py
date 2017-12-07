#!/usr/bin/python
# -*- coding: utf-8 -*- 

from flask import Flask, url_for, session, render_template, Response, request, flash, redirect, abort, jsonify
from flaskext.mysql import MySQL
import json
import time


mysql = MySQL()

app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('IROOM_SETTINGS', silent=True)
mysql.init_app(app)
last_value = [0,0,0,0,0]

def event_sensor():
	while True:		   
		conn = mysql.connect()
		cursor = conn.cursor()
		
		cursor.execute ("select valor from sensors where nombre='temperature' order by time desc")
		temperatura = int(cursor.fetchone()[0])
		if temperatura != last_value[0]:
			sensor = {"tipo":"temperatura", "valor":temperatura}
			data_json = json.dumps(sensor)
			print sensor
			yield 'data: %s\n\n' % str(data_json)
			last_value[0] = temperatura
			#flash('Actualizado sensor de temperatura')
			 
		
		"""PARTE 2: ARRIBA TIENE UN EJEMPLO DE ATUALIZACIÓN DEL SENSOR DE TEMPERATURA POR SSE CUANDO
		SE HA ACTUALIZADO EL VALOR EN LA BASE DE DATOS
		ESCRIBA LE CODIGO PARA EL RESTO DE SENSORES """

			   
@app.route('/update_sensor')
def sse_request():	  
	return Response(event_sensor(), mimetype='text/event-stream')
	  
@app.route('/')
def main(): 
	return render_template('index.html')
		
@app.route('/sensors')
"""PARTE 2: INSERTE AQUÍ EL CÓDIGO DE LA FUNCION SENSORS PARA REDIRIGIR A LA VISTA sensors.html 
   CUANDO SE RECIBE UN GET A /sensors""" 


@app.route('/login', methods=['GET', 'POST'])
def login():
	error = None
	if request.method == 'POST':
		if request.form['username'] != app.config['USERNAME']:
			error = 'Invalid username'
		elif request.form['password'] != app.config['PASSWORD']:
			error = 'Invalid password'
		else:
			session['logged_in'] = True
			flash('Has entrado en la sesion')
			return redirect(url_for('sensors'))
	return render_template('login.html', error=error)

@app.route('/logout')
def logout():
	session.pop('logged_in', None)
	flash('Has salido de la sesion')
	return redirect(url_for('main'))


@app.route('/iluminacion')
def iluminacion():
	return render_template('iluminacion.html')

	
@app.route('/setcolor', methods=['GET'])
def setcolor():
	
	"""PARTE 3: INSERTE AQUI EL CÓDIGO PARA GUARDAR EL COLOR DE LA BASE DE DATOS 
	   CUANDO SE RECIBE DESDE EL CLIENTE POR AJAX""" 

if __name__=='__main__':
	with app.test_request_context():
		app.debug = True
		app.run(host ='0.0.0.0')
		
