from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
app = Flask(__name__)


# Main web application
@app.route('/', methods=['GET'])
def index():
    if request.method == 'GET':
        return render_template('index.html')


# API routes
@app.route('/api/v1/status', methods=['GET'])
def api_launch_emulationstation():
    if request.method == 'GET':
        data = {
            "status": "ok"
        }
        return jsonify(**data)


if __name__ == '__main__':
    app.run()
