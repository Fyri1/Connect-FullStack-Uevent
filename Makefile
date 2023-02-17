install: 
	make -C server setup
	make -C client install

start-frontend:
	make -C ./client start

start-backend:
	make -C ./server start & nodemon ./Ebank/index.js

start-all:
	make -C ./server start & nodemon ./Ebank/index.js & make -C ./client start