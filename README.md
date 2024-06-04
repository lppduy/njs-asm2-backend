# Todo API

## Overview

This Todo API allows users to manage todo items. It provides endpoints for creating, retrieving, and deleting todo items.

## Base URL

The base URL for the Todo API is: `https://your-api-domain.com/api/todos`

## Authentication

Authentication is not required to access the Todo API.

## Endpoints

### Get all Todos

- **Description:** Retrieves all todo items.
- **Method:** GET
- **URL:** `/api/todos`
- **Response:** A JSON array containing all todo items.

### Create a Todo

- **Description:** Creates a new todo item.
- **Method:** POST
- **URL:** `/api/todos`
- **Request Body:** JSON object with the `text` property containing the todo text.
- **Response:** The created todo item as a JSON object.

### Delete a Todo

- **Description:** Deletes a todo item by ID.
- **Method:** DELETE
- **URL:** `/api/todos/:id` (Replace `:id` with the ID of the todo item)
- **Response:** Status code indicating success or failure.

## Usage

You can consume the Todo API by sending HTTP requests to the specified endpoints. Below are some example requests using cURL:

### Get all Todos

```bash
curl -X GET https://your-api-domain.com/api/todos
