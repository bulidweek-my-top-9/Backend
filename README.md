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
Token: required
Method: get  
Endpoint: api/users/:id  
if valid entry returns object with username, user id, item ids,  and names     
example:  
```
{
  "user": {
    "username": "user1",
    "id": 1
  },
  "top_music": [
    {
      "artist_name": "AC/DC",
      "id": 1,
      "user_id": 1
    },
    {
      "artist_name": "De La Soul",
      "id": 2,
      "user_id": 1
    },
    {
      "artist_name": "Daft Punk",
      "id": 3,
      "user_id": 1
    },
    {
      "artist_name": "Iglooghost",
      "id": 4,
      "user_id": 1
    },
    {
      "artist_name": "Aesop Rock",
      "id": 5,
      "user_id": 1
    },
    {
      "artist_name": "America",
      "id": 6,
      "user_id": 1
    },
    {
      "artist_name": "Animal Collective",
      "id": 7,
      "user_id": 1
    }
  ]
}
```
## Add New Musician to Top 9
Token: required
method: post  
endpoint: /api/music/:user_id, id of the logged in user  
expects to recieve json   
```
{
	"artist_name": "name of band entered"
}
```
if successful, returns a message saying the artist was added and whether it was in the database already or not  

## Edit Musician in Top 9
Token: required  
method: put   
endpoint: /api/music/:id, id item being edited   
expects to recieve json     
```
{
	"artist_name": "name of band entered"
}
```
if successful, returns a message saying the artist was edited and whether it was in the database already or not 

## Delete a Musician from Top 9 
Token: required  
method: delete   
endpoint: /api/music/:id, id item being deleted   
if successful, returns the value 1 and removes item. returns 0 if item is not found  

## Musicians View All
Token: NOT required
table: musicians  
Method: GET  
Endpoints: /api/music  
returns the list of all artists in the musicians table  
