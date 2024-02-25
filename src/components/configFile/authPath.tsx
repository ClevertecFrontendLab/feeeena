export enum authPath {
    ENTER_PAGE = '/auth',
    MAIN = '/main',
    LOGIN = '/auth',
    LOGIN_ERROR = '/result/error-login',
    RESULT = '/result',

    REGISTER = '/auth/registration',
    SUCCES_REGIST = '/result/success',
    SAVE_DATA_ERROR_EMAIL = '/result/error-user-exist',
    SAVE_DATA_ERROR = '/result/error',

    FORGIVE_PASS = '/auth/check-email',
    REC_EMAIL_ERROR = '/result/error-check-email-no-exist',
    REC_505_ERROR = '/result/error-check-email',
    CONFIRM_EMAIL = '/auth/confirm-email',
    NEW_PASS = '/auth/change-password',
    REC_PASS_ERROR = '/result/error-change-password',
    REC_PASS_SUCCES = '/result/success-change-password',

    GOOGLE = '/auth/google',
}
