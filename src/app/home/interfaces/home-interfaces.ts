export interface Section {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
}

export interface Skill {
    name: string;
    color?: string;
}

export interface EmailResponse {
    ok: boolean;
    msg: string;
    info?: any;
    err?: any;
}

export interface EmailBody {
    name: string;
    contact_email: string;
    subject: string;
    msg: string;
}