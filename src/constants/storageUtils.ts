export const getSessionStorage = (name: string): string => sessionStorage.getItem(name) || '';

export const setSessionStorage = (name: string, value: string): void => {
    sessionStorage.setItem(name, value);
};
