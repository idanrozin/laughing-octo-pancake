import axios from 'axios';

const httpClient = axios.create({
  baseURL: '/api', // This works in both dev and prod
});

export const fetchHello = async () => {
  const response = await httpClient.get('/hello');
  return response.data;
};
