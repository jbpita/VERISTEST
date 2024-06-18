export interface AuthResponse {
    id:           number;
    username:     string;
    email:        string;
    firstName:    string;
    lastName:     string;
    gender:       string;
    image:        string;
    token:        string;
    refreshToken: string;
}


export interface AuthRequest {
    username: string;
    password: string;
    expiresInMins?: number;
}
