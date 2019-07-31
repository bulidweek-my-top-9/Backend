# My Top 9 Backend

This file contains instructions on how to access the endpoints of the My Top 9 api.

## Server Link
https://top-9-backend.herokuapp.com
# Endpoints

## User Register  

table: users  
Method: POST  
Endpoint: /api/users/register  
expects to receive  
```
{
"username": "aUsername",
"password": "aPassword"
}
```
if valid entry, returns the id of the registered user  
## User Login
table: users  
Method: POST  
Endpoint: /api/users/login  
expects to receive  
```
{
"username": "aUsername",
"password": "aPassword"
}
```
if valid entry, returns an object of user info  
example
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6InVzZXJ1c2VyIiwiaWF0IjoxNTY0NTk0NzQyLCJleHAiOjE1NjQ2ODExNDJ9.MyS5ggf_HrTZjkZyYJLOQFk6ULke0fct9DOyiL-xPO4",
  "user": {
    "id": 7,
    "username": "useruser",
    "password": "$2a$11$8TFa.u0cGhikoxpbOS0Xe.I5dJAw/k93xSyBgxobibtk0/1uknR.O"
  }
}
```

## View User By Id
Method: get  
Endpoint: api/users/:id  
if valid entry returns object with username, id, and favs    
example  
```
{
  "user": {
    "username": "user1",
    "id": 1
  },
  "top_music": [
    {
      "artist_name": "AC/DC",
      "user_id": 1
    },
    {
      "artist_name": "Daft Punk",
      "user_id": 1
    },
    {
      "artist_name": "Clarence Clarity",
      "user_id": 1
    },
    {
      "artist_name": "Iceage",
      "user_id": 1
    },
    {
      "artist_name": "Aerosmith",
      "user_id": 1
    },
    {
      "artist_name": "Aesop Rock",
      "user_id": 1
    },
    {
      "artist_name": "America",
      "user_id": 1
    },
    {
      "artist_name": "Animal Collective",
      "user_id": 1
    },
    {
      "artist_name": "The Beatles",
      "user_id": 1
    }
  ]
}
```
## Musicians View All
table: musicians  
Method: GET  
Endpoints: /api/music  
returns the list of all artists in the musicians table  
