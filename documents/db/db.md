# Todo Application Documentation

## Features

- **Task Management:** Create, update, and delete tasks.
- **Status Tracking:** Mark tasks as completed or incomplete.
- **Timestamps:** Automatically record the creation and last update timestamps for each task.

## Database Schema

The application utilizes a relational database to store tasks. Below is the schema for the database table:

| Field        | Type    | Description                                         |
|--------------|---------|-----------------------------------------------------|
| id           | UUID    | Unique identifier for each task.                    |
| name         | VARCHAR | Name or title of the task.                          |
| description  | VARCHAR | Additional details or description of the task.      |
| status       | BOOLEAN | Indicates whether the task is completed or not.     |
| created_at   | DATETIME| Timestamp indicating when the task was created.     |
| updated_at   | DATETIME| Timestamp indicating when the task was last updated.|

## Field Descriptions

- **id:** A universally unique identifier (UUID) assigned to each task. This ensures that each task has a unique identifier, even across different systems or databases.

- **name:** A varchar field that stores the name or title of the task. This field allows for a concise description of the task to be displayed in the user interface.

- **description:** A varchar field that stores additional details or a longer description of the task. This field provides users with more context or information about the task.

- **status:** A boolean field that indicates whether the task is completed or incomplete. A value of `true` represents a completed task, while `false` indicates that the task is still pending.

- **created_at:** A datetime field that records the timestamp when the task was created. This field allows users to track when each task was added to the system.

- **updated_at:** A datetime field that records the timestamp when the task was last updated. This field is automatically updated whenever the task is modified, allowing users to track the most recent changes to the task.
