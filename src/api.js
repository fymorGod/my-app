import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-football-standings.azharimm.site/leagues'
});
export default api;