export interface GlobalDataProps {
    loading: boolean;
    error: GlobalErrorProps;
    user: UserProps;
    columns: { data: Array<ListProps<ColumnProps>>; currentPage: number; total: number };
    columnDetail: ColumnProps | {};
    posts: { data: Array<ListProps<PostProps>> },
    postDetail: PostProps | {};
}

export interface GlobalErrorProps {
    status: boolean;
    message?: string;
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

export interface ListProps<P> {
    [id: string]: P;
}

export interface PostProps {
    _id?: string;
    title: string;
    excerpt?: string;
    content?: string;
    image?: ImageProps | string;
    createdAt?: string;
    column: string;
    author?: string | UserProps;
    isHTML?: boolean;
}