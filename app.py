from flask import *
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods = ['POST'])
def result():
    data = request.get_json()
    print(data)
    return data


if __name__ == '__main__':
  app.run(debug=True)
