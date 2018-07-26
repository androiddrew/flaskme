# Flaskme

Revisiting Flask July 2018

# Development

### Setup environment variables

#### Development server
```
$ export FLASK_APP=./flaskme/app.py
$ flask run
```

#### Testing

In order to run tests you need to ensure that the flask me application has been installed.

```
$ pip install -e .
$ pytest -v --cov
```