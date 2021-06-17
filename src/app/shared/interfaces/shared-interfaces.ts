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
    avatar_img: string;
    title: string;
    subtitle: string;
    image: string;
    image_alt_text: string;
    description: string[];
    link: string;
}