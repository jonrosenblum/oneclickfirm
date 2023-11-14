
install:
	cd server && pipenv install

build: install
	cd client && npm install && npm run build

run:
	cd server && HOST=0.0.0.0 pipenv run python run.py

docker-build-dev: 
	@docker build -t stl_dev --target base_im -f Dockerfile.dev .


docker-build-prod:
	@docker build -t stl_prod --target prod_im -f Dockerfile .

docker-dev:
	@echo "visit app at http://localhost:$${PORT:-5001}"
	@docker run --cpus=1 -m=512m --name stl_cd -p $${PORT:=5001}:5001 -p 5173:5173 -v $(PWD):/app stl_dev npm run dev

docker-prod:
	@echo "visit app at http://localhost:$${PORT:-5001}"
	@docker run --cpus=1 -m=512m --name stl_cp -p $${PORT:=5001}:5001 -p 5173:5173 -v $(PWD):/app stl_prod 

docker-stop-prod:
	make docker-stop container=stl_cp

docker-stop-dev:
	make docker-stop

docker-stop: # with an input container=stl_cd or stl_cp
	docker stop $${container:=stl_cd}
	docker rm $${container:=stl_cd}

docker-bash-dev:
	docker exec -it $${container:stl_cd} bash
    
docker-bash-prod:
	make docker-bash-dev container=stl_cp