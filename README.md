# test-task-softryzen-backend
test-task-softryzen-backend

https://test-task-softryzen-backend.onrender.com

На сервері доступні такі роути щодо реєстрації та авторизації (колекція в БД "users"):
●	реєстрація по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/registration
    з фронтенду приходять такі поля в JSON форматі:
        {
            "username": "username",
            "email": "examle@email.com",
            "password" "..."
        }
        - сервер повертає новоствореного користувача. В БД (Mongoose) у документі користувача для поля "accessToken" генерується токен авторизації.

●	авторизація (логін) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/login
    з фронтенду приходят такі поля в JSON форматі:
        {
            "email": "examle@email.com",
            "password" "..."
        }
        - сервер повертає авторизованого користувача. В БД (Mongoose) у документі користувача для поля "accessToken" генерується токен авторизації.

●	отримання актуального користувача (current) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/current
    з фронтенду приходить токен авторизації у хедері:
        - в хедерах (headers) у полі "authorization" вказується значення "accessToken" авторизованого користувача
        - сервер повертає поточного авторизованого користувача.

●	вихід (logout) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/logout
    з фронтенду приходить токен авторизації у хедері:
        - в хедерах (headers) у полі "authorization" вказується значення "accessToken" авторизованого користувача
        - сервер повертає статус 202 "No Content". В БД (Mongoose) у документі користувача знаяення поля "accessToken" очищується.



На сервері доступні такі роути для роботи з фільмами (колекція в БД "movies"):
●	отримання всіх фільмів певного користувача з можливою пагінацією (параметри запиту page та limit) по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies
    з фронтенду приходить токен авторизації у хедері:
    - тип запиту GET
    - доступні опції для пагінації - поля "page", "limit" та "query", приклад - https://test-task-softryzen-backend.onrender.com/api/movies?page=3&limit=3?query=Robocop
    
●	отримання одного фільму за id:
●	додавання фільму з валідацією тіла запиту за допомогою Joi (роут повинен повертати доданий фільм):
●	оновлення фільму за id (роут повинен повертати оновлений фільм):
●	видалення фільму за id (роут повинен повертати видалений фільм):
