import { Room } from "src/app/auth/interfaces/interfaces";

export interface Msg {
    from: string;
    body: string;
}

export interface ChatResponse {
    ok: boolean;
    msg: string;
    rooms?: Room[];
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