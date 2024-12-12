import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics";

const database: PlayerModel[] = [
    {
    "id": 1,
    "name": "Marco Verratti",
    "club": "Paris Saint-Germain",
    "nationality": "Italy",
    "position": "Midfielder",
    "statistics": {
    "Overall": 89,
    "Pace": 73,
    "Shooting": 74,
    "Passing": 91,
    "Dribbling": 87,
    "Defending": 72,
    "Physical": 71
    }
    },
    {
    "id": 2,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
    "Overall": 89,
    "Pace": 95,
    "Shooting": 80,
    "Passing": 78,
    "Dribbling": 92,
    "Defending": 35,
    "Physical": 69
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

export const deleteOnePlayer = async (id:number) =>{
    const index = database.findIndex(player => player.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

export const findAndModifyPlayer = async (id: number, statistics:StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex(player => player.id === id);

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex];
};