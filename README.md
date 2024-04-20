# Simple Todo App

This is a simple todo app built with Node.js and Nest Js framework.
You can learn the simple structure project and how to setup docker compose to run project through docker compose file

## Prerequisites

If you run the app on your local machine, make sure you have the following installed on your machine:

- Node.js
- npm

If your machine installed Docker, doesn't care above content :)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jarzt-pham/simple-todo-app-node.git
```

2. Navigate to the project directory:

```bash
cd simple-todo-app-node
```

3. Follow the Prerequisites Section:<br />

```
Node.js and npm:
bash
> npm install
```

```
Docker Setup:
bash
> docker compose up
```

## API

You can import the collection in the documents/collection-json. I used [Hoppscotch](https://hoppscotch.io/) to test my apis :)

### Find All Todos

- **URL:** `/todo`
- **Method:** GET
- **Description:** Get all todos
- **Response:** JSON array of todos

### Find One Todo

- **URL:** `/todo/:id`
- **Method:** GET
- **Description:** Get a specific todo by ID
- **Response:** JSON object of the todo

### Create Todo

- **URL:** `/todo`
- **Method:** POST
- **Description:** Create a new todo
- **Request Body:** JSON object with todo details
- **Response:** JSON object of the created todo

### Edit Todo

- **URL:** `/todo/:id`
- **Method:** PUT
- **Description:** Update a specific todo by ID
- **Request Body:** JSON object with updated todo details
- **Response:** JSON object of the updated todo

### Change Todo Status

- **URL:** `/todo/:id/change-status`
- **Method:** PATCH
- **Description:** Change the status of a specific todo by ID
- **Request Body:** JSON object with new status
- **Response:** JSON object of the updated todo

### Delete Todo

- **URL:** `/todo/:id`
- **Method:** DELETE
- **Description:** Delete a specific todo by ID
- **Response:** Success message
