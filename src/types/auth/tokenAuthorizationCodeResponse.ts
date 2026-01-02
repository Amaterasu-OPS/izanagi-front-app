export type TokenAuthorizationCodeResponse = {
    access_token: string;
    refresh_token: string;
    id_token?: string;
}