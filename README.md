
# My Top 9 Backend

This file contains instructions on how to access the endpoints of the My Top 9 api.

##Server Link
https://top-9-backend.herokuapp.com
# Endpoints

##User Register
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
##User Login
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

##Musicians View All
table: musicians
Method: GET
Endpoints: /api/music
returns the list of all artists in the musicians table

