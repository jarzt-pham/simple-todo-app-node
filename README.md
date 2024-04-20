# Simple Todo App

This is a simple todo app built with Node.js and Nest Js framework.
You can learn the simple structure project and how to setup docker compose to run project through docker compose file

## Prerequisites

If you run the app on your local machine, make sure you have the following installed on your machine:

- Node.js
- npm

If your machine installed Docker, doesn't need to care above content :)

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
3.1. Node.js and npm:

```bash
npm install && npm run start:dev
```

3.2. Docker Setup:

```bash
docker compose up
```
## API Reference

#### Find all todos

```http
  GET /todo
```


#### Find one todo

```http
  GET /todo/:id
```

#### Create Todo

```http
  POST /todo
```
Body
| key       | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. A name of task |
| `description` | `string` | A description of task|



#### Edit Todo

```http
  PATCH /todo/:id
```
Body
| key       | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. A name of task |
| `description` | `string` | A description of task|


#### Change status Todo

```http
  PATCH /todo/:id
```
Body
| key       | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `boolean` | Status of todo. Default is true |


#### Delete Todo

```http
  DELETE /todo/:id
```


