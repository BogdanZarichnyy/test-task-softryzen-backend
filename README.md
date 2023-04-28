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
        - тип запиту POST
        - сервер повертає новоствореного користувача в JSON форматі. В БД (Mongoose) у документі користувача для поля "accessToken" генерується токен авторизації:
            {
                "user": {
                    "_id": "644bc887ce42cbd679b0b571",
                    "username": "testing",
                    "email": "testingapi@email.com",
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJjODg3Y2U0MmNiZDY3OWIwYjU3MSIsImlhdCI6MTY4MjY5MjEwNCwiZXhwIjoxNjgyNzc4NTA0fQ.y_vex1WLmRgKFmH6YbOPEzwJsmWvTY9mbHGPn-w7i3M"
                }
            }

●	авторизація (логін) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/login
    з фронтенду приходят такі поля в JSON форматі:
        {
            "email": "examle@email.com",
            "password" "..."
        }
        - тип запиту POST
        - сервер повертає авторизованого користувача в JSON форматі. В БД (Mongoose) у документі користувача для поля "accessToken" генерується токен авторизації:
            {
                "user": {
                    "_id": "644bc887ce42cbd679b0b571",
                    "username": "testing",
                    "email": "testingapi@email.com",
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJjODg3Y2U0MmNiZDY3OWIwYjU3MSIsImlhdCI6MTY4MjY5MjEwNCwiZXhwIjoxNjgyNzc4NTA0fQ.y_vex1WLmRgKFmH6YbOPEzwJsmWvTY9mbHGPn-w7i3M"
                }
            }

●	отримання актуального користувача (current) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/current
    з фронтенду приходить токен авторизації у хедері:
        - в хедерах (headers) у полі "authorization" вказується значення "accessToken" авторизованого користувача
        - тип запиту GET
        - сервер повертає поточного авторизованого користувача в JSON форматі:
            {
                "user": {
                    "_id": "644bc887ce42cbd679b0b571",
                    "username": "testing",
                    "email": "testingapi@email.com",
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJjODg3Y2U0MmNiZDY3OWIwYjU3MSIsImlhdCI6MTY4MjY5MjEwNCwiZXhwIjoxNjgyNzc4NTA0fQ.y_vex1WLmRgKFmH6YbOPEzwJsmWvTY9mbHGPn-w7i3M"
                }
            }

●	вихід (logout) по маршруту - https://test-task-softryzen-backend.onrender.com/api/users/logout
    з фронтенду приходить токен авторизації у хедері:
        - в хедерах (headers) у полі "authorization" вказується значення "accessToken" авторизованого користувача
        - тип запиту GET
        - сервер повертає статус 202 "No Content". В БД (Mongoose) у документі користувача знаяення поля "accessToken" очищується.



На сервері доступні такі роути для роботи з фільмами (колекція в БД "movies"):

●	отримання всіх фільмів певного користувача з можливою пагінацією (параметри запиту page та limit) по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies
    з фронтенду приходить токен авторизації у хедері:
        - тип запиту GET
        - доступні опції для пагінації - поля "page", "limit" та "query", приклад - https://test-task-softryzen-backend.onrender.com/api/movies?page=3&limit=3?query=Robocop
        - сервер повертає масив фільмів в JSON форматі:

●	отримання одного фільму за id по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies/:movieId
    з фронтенду приходить токен авторизації у хедері:
        - тип запиту GET
        - приклад - https://test-task-softryzen-backend.onrender.com/api/movies/644bd006ce42cbd679b0b5ad
        - сервер повертає фільм в JSON форматі:
            {
                "movie": {
                    "_id": "644bd006ce42cbd679b0b5ad",
                    "title": "Robocop 10",
                    "director": "Joi Smith",
                    "date": "2023-04-27T00:00:00.000Z",
                    "owner": {
                        "_id": "644bc887ce42cbd679b0b571",
                        "username": "testing",
                        "email": "testingapi@email.com"
                    },
                    "createdAt": "2023-04-28T13:54:14.551Z",
                    "updatedAt": "2023-04-28T13:54:14.551Z"
                }
            }

●	додавання фільму по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies/
    з фронтенду приходить токен авторизації у хедері та дані для фільму з наступними полями в JSON форматі:
        - тип запиту POST
            {
                "title": "Robocop 1",
                "director": "Joi Smith",
                "date": "27-04-2023",
            }
        - сервер повертає доданий фільм з повідомленням в JSON форматі:
            {
                "message": "Created new movie",
                "movie": {
                    "title": "Robocop 1",
                    "director": "Joi Smith",
                    "date": "2023-04-27T00:00:00.000Z",
                    "owner": "644bc887ce42cbd679b0b571",
                    "_id": "644be852fe395e63b78f6a4a",
                    "createdAt": "2023-04-28T15:37:54.955Z",
                    "updatedAt": "2023-04-28T15:37:54.955Z"
                }
            }

●	оновлення фільму за id по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies/:movieId
    з фронтенду приходить токен авторизації у хедері та дані для фільму з наступними полями в JSON форматі:
        - тип запиту PUT
        {
            "title": "Robocop 12",
            "director": "Joi Smith Vilkerson",
            "date": "25-04-2023"
        }
        - сервер повертає оновлений фільм з повідомленням в JSON форматі:
            {
                "message": "Updated movie",
                "movie": {
                    "_id": "644bcc9a9a728cc5e0b428a6",
                    "title": "Robocop 12",
                    "director": "Joi Smith Vilkerson",
                    "date": "2023-04-25T00:00:00.000Z",
                    "owner": {
                        "_id": "644bc887ce42cbd679b0b571",
                        "username": "testing",
                        "email": "testingapi@email.com"
                    },
                    "createdAt": "2023-04-28T13:39:38.358Z",
                    "updatedAt": "2023-04-28T15:51:10.921Z"
                }
            }

●	видалення фільму за id по маршруту - https://test-task-softryzen-backend.onrender.com/api/movies/:movieId
    з фронтенду приходить токен авторизації у хедері:
        - тип запиту DELETE
        - сервер повертає видалений фільм з повідомленням в JSON форматі:
            {
                "message": "Movie deleted",
                "movie": {
                    "_id": "644bcc9a9a728cc5e0b428a6",
                    "title": "Robocop 12",
                    "director": "Joi Smith Vilkerson",
                    "date": "2023-04-25T00:00:00.000Z",
                    "owner": {
                        "_id": "644bc887ce42cbd679b0b571",
                        "username": "testing",
                        "email": "testingapi@email.com"
                    },
                    "createdAt": "2023-04-28T13:39:38.358Z",
                    "updatedAt": "2023-04-28T15:51:10.921Z"
                }
            }