import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";


const getAccount = async () => {
    return Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function setToken(data) {
    return await Storage.set('token', data);
}

async function login(data) {
    let endpoint = 'endpoint';
    return HttpClient.post(endpoint, data);
}

const AuthService = {
    getAccount,
    setAccount,
    setToken,
    login,
}

export default AuthService;