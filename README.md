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