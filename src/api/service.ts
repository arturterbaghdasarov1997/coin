import axios from 'axios';

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const getCoinData = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching user data:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
        throw error;
    }
}