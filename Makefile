up:
	docker compose up -d
up-build:
	docker compose up -d --build
up-front:
	docker compose up -d sbox-ui

shell-ui:
	docker compose exec sbox-ui ash
install-ui:
	docker compose exec sbox-ui npm i
run-ui:
	docker compose exec sbox-ui npm run dev
build-ui:
	docker compose exec sbox-ui npm run build
down:
	docker compose down