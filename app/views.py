from app import app
import requests

@app.route('/')
@app.route('/index')
def index():
	return 'Meow'

SPOTIFY_API = 'https://api.spotify.com/v1/'

TODO make this method useful
def request_spotify()
	r = requests.get(SPOTIFY_API)
	return r.text