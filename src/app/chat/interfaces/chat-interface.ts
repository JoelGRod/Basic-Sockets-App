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