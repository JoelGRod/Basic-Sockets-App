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

export interface CardInfo {
    title: string;
    image_alt_text: string;
    description: string[];
    image_group?: string[];
    subtitle?: string;
    image?: string;
    avatar_img?: string;
    link?: string;
    external_link?: string;
}