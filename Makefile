
install: 
	cd server && pipenv install

build: install
	cd client && npm install && npm run build

run:
	cd server && HOST=0.0.0.0 pipenv run python run.py

docker-build-dev: 
	@docker build -t stl_dev --target base_im -f Dockerfile .


docker-build-prod:
	@docker build -t stl_prod --target prod_im -f Dockerfile .

docker-dev:
	@echo "visit app at http://localhost:$${PORT:-5001}"
	@docker run --name stl_cd -p $${PORT:=5001}:5001 -p 5173:5173 -v $(PWD):/app stl_dev npm run dev

docker-prod:
	@echo "visit app at http://localhost:$${PORT:-5001}"
	@docker run --name stl_cp -p $${PORT:=5001}:5001 -p 5173:5173 -v $(PWD):/app stl_prod npm run dev


docker-stop:
	docker stop $${container:=stl_cd}
	docker rm $${container:=stl_cd}

docker-bash:
	docker exec -it $${container:stl_cd} bash
    