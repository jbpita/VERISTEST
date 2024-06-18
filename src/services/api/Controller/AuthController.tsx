import { initialState } from '../../../redux/reducers/authReducer';
import {
    AuthRequest,
    AuthResponse,
} from '../../interfaces/Auth';
import { AuthRepository } from '../Repository/AuthRepository';

class AuthController {
    private readonly _authRepository: AuthRepository;

    constructor() {
        this._authRepository = new AuthRepository();
    }

    async Login(user: AuthRequest): Promise<AuthResponse> {
        let authResponse: AuthResponse = initialState;
        try {
            authResponse = await this._authRepository.Login(user);
        } catch (ex) {
            console.log('Error: ', ex);
        }
        return authResponse;
    }
}

const  authController = new AuthController();
export default authController;
