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
Endpoint: api/users/:user_id  
if valid entry returns object with username, user id, item ids,  and names     
example:  
```
{
  "user": {
    "username": "backend4",
    "id": 4
  },
  "top_music": [
    {
      "artist_name": "Black Sabbath",
      "id": 11,
      "user_id": 4
    },
    {
      "artist_name": "Nirvana",
      "id": 14,
      "user_id": 4
    }
  ],
  "top_movies": [
    {
      "movie_title": "The Godfather",
      "id": 1,
      "user_id": 4
    },
    {
      "movie_title": "There Will Be Blood",
      "id": 2,
      "user_id": 4
    }
  ],
  "top_animals": [
    {
      "animal_name": "Red Fox",
      "id": 1,
      "user_id": 4
    },
    {
      "animal_name": "turtle",
      "id": 2,
      "user_id": 4
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
endpoint: /api/music/:user_id/:item_id, id of user and item being edited   
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
endpoint: /api/music/:user_id/:item_id, id of user and item being deleted   
if successful, returns the value 1 and removes item. returns 0 if item is not found   

## Musicians View All
Token: NOT required  
table: musicians  
Method: GET  
Endpoints: /api/music  
returns the list of all artists in the musicians table  

## Movies
movies endpoints are the same as music but with the following differences:  
/movies instead of /music in the url  
json for posts and puts will contain "movie_title" instead of "artist_name" 

## Animals
animals endpoints are the same as music but with the following differences:  
/animals instead of /music in the url  
json for posts and puts will contain "animal_name" instead of "artist_name" 
