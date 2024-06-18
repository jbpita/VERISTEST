import { initialState } from '../../../redux/reducers/authReducer';
import { AuthRequest, AuthResponse } from '../../interfaces/Auth';
import dummyApi from '../configure/connection';

export class AuthRepository {
    constructor () {}

    async Login(user: AuthRequest): Promise<AuthResponse> {
        console.log('Server Response: ', dummyApi.defaults.baseURL);
        let authResponse: AuthResponse = initialState;
        try {
            const response = await dummyApi.post<AuthResponse>('/auth/login', user);
            authResponse = response.data;
        } catch (e) {
            console.log('SEREVER ERROR: ', e);
        }

        return authResponse;
    }
}
