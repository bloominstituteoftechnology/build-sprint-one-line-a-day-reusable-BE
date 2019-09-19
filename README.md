# Back-end

#Register New User

POST to {URL}

Takes an object including:
{
    username: "username",
    password: "pass"
}

Returns newly created user object as well as JSON Web Token (JWT)



#Login Existing User

POST to {URL}

Takes an object including:
{
    username: "username",
    password: "pass"
}

Returns JWT