from flask import *
from mongoengine import *
import mlab
from geopy import geocoders

app = Flask(__name__)

mlab.connect()

class User(Document):
    username = StringField(required = True, unique = True)
    password = StringField(required=True)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index_test.html')
    elif request.method == 'POST':
        form = request.form
        location1 = form['location1']
        location2 = form['location2']
        location3 = form['location3']
        locations = [location1,location2,location3]
        latlngs = []
        latlng = {}
        lat_sum = 0
        lng_sum = 0
        for location in locations:
            g = geocoders.GoogleV3(api_key='AIzaSyDVu3d_FHZGs_4iUOMyrKGROPX5OhQD_Tw')
            location = g.geocode(location, timeout=10)
            lat_sum += location.latitude
            lng_sum += location.longitude
            latlng['lat'] = location.latitude
            latlng['lng'] = location.longitude
            latlngs.append(latlng.copy())
        optimal_lat = lat_sum/len(locations)
        optimal_lng = lng_sum/len(locations)
        print(optimal_lat,optimal_lng)
        return render_template('result_demo.html', lat = optimal_lat, lng = optimal_lng, latlngs = latlngs)

@app.route('/result')
def result():
    return render_template('result.html', lat = str(optimal_lat), lng = str(optimal_lng))

@app.route('/geocoding-test')
def geocoding():
    return render_template('geocoding_test2.html')

@app.route('/search-test')
def search():
    return render_template('search_test.html')

@app.route('/sign-up', methods = ['GET', 'POST'])
def sign_up():
    if request.method == 'GET':
        return render_template('sign_up.html')
    elif request.method == 'POST':
        form = request.form
        username = form['username']
        password = form['password']
        try:
            new_user = User(username = username, password = password)
            new_user.save()
            return redirect('/')
        except (NotUniqueError):
            return redirect('/sign-up')

if __name__ == '__main__':
  app.run(debug=True)
