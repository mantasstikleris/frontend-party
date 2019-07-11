export enum Icons {
    USER = 'USER',
    LOCK = 'LOCK',
    LOGOUT = 'LOGOUT',
}

export enum Sizes {
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL',
}

export const BREAKPOINTS = {
    [Sizes.XS]: '480px',
    [Sizes.SM]: '768px',
    [Sizes.MD]: '992px',
    [Sizes.LG]: '1200px',
    [Sizes.XL]: '1400px',
};

export const SERVER_ERROR_MESSAGES = {
    INVALID: "Invalid credentials... 😓 Let's give it another try!",
    UNKNOWN: '🤫 Our servers are sleeping! Try again in a few seconds.',
};

export const API_URL = 'http://playground.tesonet.lt/v1';
