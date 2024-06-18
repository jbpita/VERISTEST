import { useEffect, useState } from 'react';
import { userNameValidator, passwordValidator } from '../../../utils/validators';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/AppNavigation';
import authController from '../../../services/api/Controller/AuthController';
import { AuthResponse } from '../../../services/interfaces/Auth';
import { login } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


type LoginHookProps = {
    navigation: StackNavigationProp<RootStackParams, 'LoginScreen', undefined>
}

export const LoginHook = ({ navigation }: LoginHookProps) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [count, setCount] = useState<number>(0);
    const [isBlocked, setIsBlocked] = useState<boolean>(false);

    const onLogin = async () => {

            const response: AuthResponse = await authController.Login({
                username: userName.value,
                password: password.value,
            });

            if (!response.token) {
                setCount(prev => prev + 1);
            } else {
                setCount(0); // Resetear el contador en caso de login exitoso
                dispatch(login(response));
            }

            return response;
    };

    const _onLoginPressed = async () => {
        const emailError = userNameValidator(userName.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setUserName({ ...userName, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        const response = await onLogin();

        if (response.token.length){
            navigation.navigate('ProductsListScreen');
        } else {
            setPassword({...userName, error: 'Credenciales incorrectas'});
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (count >= 3) {
            setIsBlocked(true);
            timer = setTimeout(() => {
                setCount(0);
                setIsBlocked(false);
            }, 60000); // 60 segundos
        }
        return () => clearTimeout(timer);
    }, [count]);

    return {
        _onLoginPressed,
        userName,
        setUserName,
        password,
        setPassword,
        count,
        isBlocked,
    };
};

