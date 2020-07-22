import client from '../lib/client';
const { apiFetch } = client;

const diyapiTodo ={
    browseTodos: () => apiFetch(`/todo`),
    addTodo: (body) => apiFetch('/todo', { method: 'POST', body }),
    delTodo: (_id) => apiFetch(`/todo/${_id}`, { method: 'DELETE'}),
    editTodo: (_id, body) => apiFetch(`/todo/${_id}`, { method: 'PUT', body}),
}

export default diyapiTodo;   