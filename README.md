# Back-end

### Register New User

POST to https://bw-one-line-a-day.herokuapp.com/api/auth/register

Takes an object including:
`{
    username: "username",
    password: "pass"
}`

Returns newly created user object as well as JSON Web Token (JWT)



### Login Existing User

POST to https://bw-one-line-a-day.herokuapp.com/api/auth/login

Takes an object including:
`{
    username: "username",
    password: "pass"
}`

Returns JWT



### Get posts by user ID

GET to https://bw-one-line-a-day.herokuapp.com/api/users/:id/posts

Returns an array of post objects

**Testing Notice**
Database is seeded with 3 users and 1 sample post for each of them. Use id 1,2 or 3 in URL