from flaskme.app import app
import json

app.config["TESTING"] = True

client = app.test_client()


def test_hello_world():
    response = client.get("/")
    assert response.status_code == 200
    assert b"Hello World!" in response.data


def test_ping():
    response = client.get("/ping")
    print(response.data)
    assert response.status_code == 200
    assert response.content_type == "application/json"
    assert json.loads(response.data) == {"ping": "pong"}
