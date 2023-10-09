# Task Management API

This is a RESTful API for managing tasks using Node.js and MongoDB. It allows users to create, retrieve, update, and delete tasks. Additionally, it includes optional features like user registration, authentication using JWT, and rate limiting.

## Features

- Create tasks with a title, description, and status.
- Retrieve a list of all tasks.
- Retrieve a specific task by its ID.
- Update a specific task by its ID.
- Delete a specific task by its ID.
- User registration (optional).
- Authentication using JWT (optional).
- Rate limiting to restrict the number of requests from a single client (optional).

## Getting Started

### Prerequisites

- Node.js installed (https://nodejs.org/)
- MongoDB installed (https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-api.git
   cd task-management-api

   
API Endpoints
GET /tasks: Retrieve a list of all tasks.
GET /tasks/:id: Retrieve a specific task by ID.
POST /tasks: Create a new task.
PUT /tasks/:id: Update a specific task by ID.
DELETE /tasks/:id: Delete a specific task by ID.