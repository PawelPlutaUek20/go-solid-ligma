import createClient from 'openapi-fetch';
import type { paths } from '../../types';

const SERVER_URL = "http://localhost:5001"

export const { get, post, put, patch, del } = createClient<paths>({
    baseUrl: SERVER_URL,
    // headers: {
    //     Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    // },
});