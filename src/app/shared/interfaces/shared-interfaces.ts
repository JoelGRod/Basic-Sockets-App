export interface MenuItem {
    route: string;
    icon: string;
    name: string;
}

export interface DialogData {
    title: string;
    icon: string;
    msg: string;
    response?: boolean;
    has_password?: boolean;
}