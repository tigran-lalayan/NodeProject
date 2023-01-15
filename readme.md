# CRUD API for Users

This project provides a simple CRUD API for managing a collection of users and projects. The routes provided allow for the creation, reading, updating, and deletion of users and projects.

## Routes for users
- `GET /users`: Retrieves a list of users with optional query parameters for offset and limit
- `GET /users/email`: Retrieves a specific user by email
- `GET /users/sorted`: Retrieves a list of users sorted by a specified criteria (default: username) and order (default: ascending)
- `GET /users/:userID`: Retrieves a specific user by ID
- `POST /users`: Creates a new user
- `DELETE /users/:userID`: Deletes a specific user by ID
- `PUT /users/:userID`: Updates a specific user by ID

## Routes for projects 

- `GET /projects`: Retrieves a list of users with optional query parameters for offset and limit
- `GET /projects/limited`: Get limited number of projects
- `GET /projects/:projectID`: Retrieves a specific project by ID
- `POST /projects`: Creates a new project
- `DELETE /projects/:projectID`: Deletes a specific project by ID
- `PUT /projects/:projectID`: Updates a specific project by ID

## Link to Github Repo:

- [Github link](https://github.com/tigran-lalayan/NodeProject)
## Sources
- [MongoDB Skip and Limit](https://www.w3resource.com/mongodb/mongodb-skip-limit.php)
- [Mongoose Crash Course](https://youtu.be/vjf774RKrLc)
- [Check if ID exists in a collection with Mongoose](http://ostack.cn/?qa=259390/node-js-check-if-id-exists-in-a-collection-with-mongoose)
- [MongoDB Manual](https://docs.mongodb.com/manual/reference/)
- [Mongoose: Unique Values](https://masteringjs.io/tutorials/mongoose/unique)
