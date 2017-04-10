interface AuthConfiguration {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const myConfig: AuthConfiguration = {
    clientID: 'YOUR_CLIENT_ID',
    domain: 'YOUR_DOMAIN',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/'
};
