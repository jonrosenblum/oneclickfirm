install: 
	cd server && pipenv install

build: install
	cd client && npm install && npm run build

run:
	cd server && HOST=0.0.0.0 pipenv run python run.py