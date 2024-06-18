export const userNameValidator = (username: string) => {
    if (!username || username.length <= 0) {
        return 'Nombre de usuario no puede ser vacio';
    }
    return '';
};

export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) {
        return 'Contraseña no puede ser vacia.';
    }
    return '';
};