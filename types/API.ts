export interface Team {
    //
}

export interface Task {
    //
}

export interface User {
    //
}

// ! PAWEL !!!
// Zro jakis request co zwroci dane w tym interfejsie:
export interface StatsAPIRequest {
    monthly: Statistics[]
    annualy: Statistics[]
    general: Statistics[]
}

export interface Statistics {
    /** Miejsce na ktorym jest osoba */
    place: number
    points: number
    avatar: string
    firstName: string
    lastName: string
}
