import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "club": "Al-Nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
    "Overall": 91,
    "Pace": 87,
    "Shooting": 93,
    "Passing": 82,
    "Dribbling": 88,
    "Defending": 35,
    "Physical": 77
        }
    },
    {
    "id": 2,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
    "Overall": 92,
    "Pace": 85,
    "Shooting": 92,
    "Passing": 91,
    "Dribbling": 94,
    "Defending": 38,
    "Physical": 65
        }
    },
    {
    "id": 3,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "Forward",
    "statistics": {
    "Overall": 91,
    "Pace": 80,
    "Shooting": 94,
    "Passing": 79,
    "Dribbling": 86,
    "Defending": 45,
    "Physical": 82
        }
    },
    {
    "id": 4,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
    "Overall": 91,
    "Pace": 76,
    "Shooting": 86,
    "Passing": 93,
    "Dribbling": 87,
    "Defending": 64,
    "Physical": 74
        }
    },
    {
    "id": 5,
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "nationality": "Belgium",
    "position": "Goalkeeper",
    "statistics": {
    "Overall": 89,
    "Pace": 50,
    "Shooting": 21,
    "Passing": 31,
    "Dribbling": 43,
    "Defending": 18,
    "Physical": 77
        }
    }
    ,
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};


export const findPlayerById = async (
    id:number
): Promise<PlayerModel| undefined> => {
    return database.find(player => player.id === id)
};

export const insertPlayer = async(player:PlayerModel) => {
    database.push(player);
};
