from flaskme.app import app
import json

app.config["TESTING"] = True

client = app.test_client()


def test_ping():
    response = client.get("/api/ping")
    print(response.data)
    assert response.status_code == 200
    assert response.content_type == "application/json"
    assert json.loads(response.data) == {"ping": "pong"}
