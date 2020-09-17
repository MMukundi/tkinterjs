py = $(wildcard pythonProjects/*.py)

python: $(py)
	python3 -m transcrypt pythonProjects/mOSPython.py