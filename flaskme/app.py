from flask import Flask, jsonify, render_template

app = Flask("flaskme")


# @app.route("/")
# def hello_world():
#     return "Hello World!"


@app.route("/ping")
def ping():
    return jsonify({"ping": "pong"})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == "__main__":
    app.run("0.0.0.0", 5000, debug=True)  # pragma: no cover
