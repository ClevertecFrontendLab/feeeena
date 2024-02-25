import Yellow from '@public/Yellow.png';
import Red from '@public/Red.png';
import Green from '@public/Green.png';

interface ErrorDetails {
    title: string;
    message: string;
    buttonLabel: string;
    icon: string;
    dataTest: string;
}

const getErrorDetails = (errorType: string): ErrorDetails => {
    switch (errorType) {
        case 'login-error':
            return {
                title: 'Вход не выполнен',
                message: 'Что-то пошло не так. Попробуйте еще раз',
                buttonLabel: 'Повторить',
                icon: Yellow,
                dataTest: 'login-retry-button',
            };
        case 'save-data-error-email':
            return {
                title: 'Данные не сохранились',
                message:
                    'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
                buttonLabel: 'Назад к регистрации',
                icon: Red,
                dataTest: 'registration-back-button',
            };
        case 'save-data-error':
            return {
                title: 'Данные не сохранились',
                message:
                    'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
                buttonLabel: 'Повторить',
                icon: Red,
                dataTest: 'registration-retry-button',
            };
        case 'succes-regist':
            return {
                title: 'Регистрация успешна',
                message:
                    'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
                buttonLabel: 'Войти',
                icon: Green,
                dataTest: 'registration-enter-button',
            };
        case 'rec_pass_succes':
            return {
                title: 'Пароль успешно изменен',
                message: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
                buttonLabel: 'Вход',
                icon: Green,
                dataTest: 'change-entry-button',
            };
        case 'rec_pass_error':
            return {
                title: 'Данные не сохранились',
                message: 'Что-то пошло не так. Попробуйте ещё раз',
                buttonLabel: 'Повторить',
                icon: Red,
                dataTest: 'change-retry-button',
            };
        default:
            return {
                title: '',
                message: '',
                buttonLabel: '',
                icon: '',
                dataTest: '',
            };
    }
};

export default getErrorDetails;
