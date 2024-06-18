import React from 'react';
import Header from '../common/Header';
import TextInputComponent from '../common/TextInputComponent';
import Background from '../common/Background';
import ButtonComponent from '../common/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/AppNavigation';
import { LoginHook } from '../hooks/screens/LoginHook';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import { Text } from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{}

const LoginScreen = ({ navigation }: Props) => {

    const {
        _onLoginPressed,
        password,
        setPassword,
        setUserName,
        userName,
        isBlocked,
    } = LoginHook({
        navigation,
    });

    return (
        <Background>

            <Header>Bienvenido</Header>

            <TextInputComponent
                label="Usuario"
                returnKeyType="next"
                value={userName.value}
                onChangeText={text => setUserName({ value: text, error: '' })}
                error={!!userName.error}
                errorText={userName.error}
                autoCapitalize="none"
            />

            <TextInputComponent
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />


            <ButtonComponent
                bordered={false}
                title="Iniciar"
                disabled={isBlocked}
                onPress={_onLoginPressed}
            />

            {
                isBlocked && <Text> Espera 60 segundos</Text>
            }
        </Background>
    );
};

const mapDispatchToProps = {
    login,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

