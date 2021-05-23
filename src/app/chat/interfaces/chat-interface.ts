import { Profile, Room } from "src/app/auth/interfaces/interfaces";

export interface ChatResponse {
    ok: boolean;
    msg: string;
    room?: Room;
    rooms?: Room[];
    profile?: Profile;
    profiles?: Profile[];

}
// Dulicated, delete
export interface ChatSocketResponse {
    ok: boolean;
    msg: string;
    room?: Room;
    rooms?: Room[];
}

export interface RoomPayload {
    room_name: string;
    desc: string;
    photo: string;
    password: string;
    has_password: boolean;
    token?: string;
}

export interface ProfilePayload {
    nickname: string;
    desc: string;
    photo: string;
}

export interface LoginPayload {
    room_id: string;
    nickname: string;
    password: string;
    token?: string;
}

export interface ActionObject {
    id: string;
    action: string;
    subject: string;
}

// Chat Component
export interface ModMsg {
    nickname: string;
    msgs: string[];
}

export interface RoomInfo {
    id: string;
    name: string;
    desc: string;
    photo: string;
    profiles: Profile[]
}

export interface ProfileInfo {
    id: string;
    nickname: string;
}

export interface MsgPayload {
    room_id: string;
    nickname: string;
    msg: string;
    token?: string;
}