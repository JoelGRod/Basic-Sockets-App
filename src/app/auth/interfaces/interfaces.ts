export interface AuthResponse {
    ok: boolean;
    msg: string;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    rooms?: Room[];
    profiles?: Profile[];
}

export interface User {
    uid: string;
    name: string;
    email: string;
    rooms: Room[];
    profiles: Profile[];
}

export interface Room {
    _id: string;
    name: string;
    desc: string;
    photo: string;
    has_password: boolean;
    created_at: Date;
    modified_at?: Date;
}

export interface Profile {
    rooms: string[];
    _id: string;
    nickname: string;
    desc: string;
    photo: string;
    created_at: Date;
    modified_at?: Date;
}