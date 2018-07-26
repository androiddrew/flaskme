from setuptools import setup

with open('requirements.in', 'r') as f:
    requirements = [line for line in f]

setup(
    name="flaskme",
    version="0.1.0",
    description="Flaskme is just an excuse to use flask again",
    license='MIT',
    install_requires=requirements
)
