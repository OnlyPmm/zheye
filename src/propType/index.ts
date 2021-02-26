export interface GlobalDataProps {
    user: UserProps;
    columns: { data: Array<ColumnProps>; currentPage: number; total: number };
}

export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    avatar?: ImageProps;
    description?: string;
}

export interface ImageProps {
    _id?: string;
    url?: string;
    createdAt?: string;
    fitUrl?: string;
}

export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description: string;
}

/* interface ListProps<P> {
    [id: string]: P;
} */