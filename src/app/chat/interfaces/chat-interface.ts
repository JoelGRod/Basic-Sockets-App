import { Profile, Room } from "src/app/auth/interfaces/interfaces";

export interface Msg {
    from: string;
    body: string;
}

export interface ChatResponse {
    ok: boolean;
    msg: string;
    room?: Room;
    rooms?: Room[];
    profile?: Profile;
    profiles?: Profile[];

}

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