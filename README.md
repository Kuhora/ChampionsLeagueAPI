# API for Champions League Players

This API was developed to manage information about Champions League players, including their stats, clubs, and other relevant details.

## Project Description

The API provides access to Champions League player data, including statistics, clubs, and other important information. Users can retrieve detailed information about players and clubs, create new records, or search for specific information by ID.

## Requirements

Before starting, you need to have the following installed:

- Node.js
- NPM or Yarn

## Features

- **Get all players**: Retrieves the complete list of players and their statistics.
- **Get player by ID**: Retrieves detailed information about a specific player based on ID.
- **Add new player**: Allows adding a new player with their statistics and club information.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repository.git
    cd ChampionsLeague
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

The API will be available at `http://localhost:3333`.

## Endpoints

### 1. Get all players

- **URL**: `GET /players`
- **Description**: Returns a list of all players.
- **Response**: JSON with all players.

### 2. Get player by ID

- **URL**: `GET /player/:id`
- **Description**: Retrieves detailed information about a specific player based on ID.
- **Parameters**: `id` (number)

### 3. Add/Delete/Update new player

- **URL**: `POST /players`
- **Description**: Add/Delete/Update a new player with their statistics.
- **Body**: JSON with player details.

```json
{
    "id": 11,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward",
    "statistics": {
        "Overall": 93,
        "Pace": 95,
        "Shooting": 97,
        "Passing": 82,
        "Dribbling": 88,
        "Defending": 45,
        "Physical": 88
    }
}
