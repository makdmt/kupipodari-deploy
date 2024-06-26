# Учебный проект: REST Api сервиса вишлистов

Сервис для тех, кто любит получать и дарить подарки.
Каждый зарегистрированный пользователь может рассказать о том, какой подарок он бы хотел получить, а также скинуться на подарок для другого пользователя, указав сумму, которую готов на это потратить.

**Освоенные технологии:**
- Nest.js
- PostgreSQL
- TypeORM
- Настройка базовой безопасности: CORS, Interceptors, Throttler

## Как собрать и запустить код

**Установите БД**
PostgreSQL https://www.enterprisedb.com/downloads/postgres-postgresql-downloads<br>
Параметры синхронизации заданы в /src/config/configuration.ts<br>
При старте приложение автоматически адаптирует таблицы в базе под typeORM entities описанные в коде.

```sh
# установите зависимости
npm i

# запустите сервер в dev режиме
npm run start
```

- Документация http://127.0.0.1:3000/api/docs
генерируется автоматически плагином @nestjs/swagger

- Фронтенд для проекта можно скачать здесь: https://github.com/yandex-praktikum/kupipodariday-frontend 

## Планы по доработке:
- Написать тесты
- Докерезировать
- Добавить стратегии регистрации passport-yandex, passport-google
- Настроить логирование