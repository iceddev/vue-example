import client from '../lib/client';
const { apiFetch } = client;

const user ={
    validate:(token) => client.apiFetch(`/users/validate/${token}`, { method: 'PUT' }),
    logout: async () => apiFetch('/users/logout'),
}

export default user;