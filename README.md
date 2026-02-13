# Test Task: Laravel + React Blog
## Тестовое задание: разработка REST API на Laravel и фронтенда на React для управления статьями и комментариями.
### Технологии:

Backend: Laravel (Sail)

Frontend: React (Vite)

Database: MySQL

Environment: Docker

## Инструкция по запуску
Для работы проекта необходимо наличие установленного Docker и запущенного Docker Engine.
### 1. Запуск Backend (Laravel Sail)
Перейдите в директорию проекта, установите sail и запустите контейнеры:

cd blog

composer require laravel/sail --dev # если запускаете впервые

php artisan sail:install # если запускаете впервые

./vendor/bin/sail up -d

### 2. Миграции и наполнение данными
Чтобы создать таблицы и сразу заполнить их тестовыми данными (5 статей), выполните:

./vendor/bin/sail artisan migrate:fresh --seed

Если нужно запустить команды по отдельности:

Миграции: ./vendor/bin/sail artisan migrate

Сидеры: ./vendor/bin/sail artisan db:seed (можно запускать повторно для генерации новых данных).

### 3. Запуск Frontend (React)
В новом окне терминала или после перехода в папку:

cd react

npm install node # если запускаете впервые

npm run dev

## Остановка проекта
Чтобы остановить фронтенд, нажмите Ctrl + C в его терминале.

Для остановки Docker-контейнеров выполните:

cd ../

./vendor/bin/sail down

## API Эндпоинты
GET /api/articles — список статей.

GET /api/articles/{id} — просмотр статьи.

POST /api/articles — создание статьи.

POST /api/articles/{id}/comments — добавление комментария.
