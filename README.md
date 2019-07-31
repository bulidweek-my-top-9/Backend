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
if valid entry, returns a token for the user  

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
