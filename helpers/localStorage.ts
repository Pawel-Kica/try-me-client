export function getLocalStorageItem<T>(key: string, defaultValue?: T) {
    if (typeof window === 'undefined') return defaultValue;

    try {
        const result = localStorage.getItem(key);
        return result ? JSON.parse(result) : defaultValue;
    } catch (error) {
        return defaultValue;
    }
}

export const setLocalStorageItem = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

// Keys
export const authTokenKey = 'authToken';

// Helpers
export const getStorageAuthToken = () => getLocalStorageItem(authTokenKey, '');

export const storageAuth = () => ({ Authorization: 'Bearer ' + getStorageAuthToken() });
