interface ErrorDetails {
    title: string;
    message: string;
    buttonLabel: string;
    icon: string;
}

const getErrorDetails = (errorType: string): ErrorDetails => {
    switch (errorType) {
        case 'login-error':
            return {
                title: 'Вход не выполнен',
                message: 'Что-то пошло не так. Попробуйте еще раз',
                buttonLabel: 'Повторить',
                icon: '@public/Yellow.png',
            };
        case 'save-data-error-email':
            return {
                title: 'Данные не сохранились',
                message:
                    'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
                buttonLabel: 'Назад к регистрации',
                icon: '@public/Red.png',
            };
        case 'save-data-error':
            return {
                title: 'Данные не сохранились',
                message:
                    'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
                buttonLabel: 'Повторить',
                icon: '@public/Red.png',
            };
        case 'regist-succes':
            return {
                title: 'Регистрация успешна',
                message:
                    'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
                buttonLabel: 'Войти',
                icon: '@public/Green.png',
            };
        case 'change-pass-succes':
            return {
                title: 'Пароль успешно изменен',
                message: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
                buttonLabel: 'Вход',
                icon: '@public/Green.png',
            };
        case 'change-pass-error':
            return {
                title: 'Данные не сохранились',
                message: 'Что-то пошло не так. Попробуйте ещё раз',
                buttonLabel: 'Повторить',
                icon: '@public/Red.png',
            };
        case 'rec-error':
            return {
                title: 'Что-то пошло не так',
                message: 'Произошла ошибка, попробуйте отправить форму ещё раз.',
                buttonLabel: 'Назад',
                icon: '@public/image.png',
            };
        default:
            return {
                title: 'Неизвестная ошибка',
                message: 'Произошла неизвестная ошибка.',
                buttonLabel: 'Повторить регистрацию',
                icon: 'icon-unknown-error',
            };
    }
};

export default getErrorDetails;
