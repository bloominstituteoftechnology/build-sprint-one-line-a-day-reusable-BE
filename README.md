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



### Create a new post

POST to https://bw-one-line-a-day.herokuapp.com/api/users/:id/posts

Where :id in URL is user id

Takes an object including:
`{
    title: "title",
    contents: "contents"
}`

Returns id of post



### Update a post

PUT to https://bw-one-line-a-day.herokuapp.com/api/users/posts/:id

Where :id in URL is post id

Takes an object including:
`{
    title: "title UPDATED",
    contents: "contents UPDATED"
}`

Returns 1 for successful update



### Delete a post

DELETE to https://bw-one-line-a-day.herokuapp.com/api/users/posts/:id

Where :id in URL is post id

Returns "removed: 1" for successful delete