install: 
	pipenv install

build: install
	cd client && npm install && npm run build