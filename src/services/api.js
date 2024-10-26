import axios from 'axios';

const API_URL = 'http://localhost:8082/api';

export const getTransactions = async (month, page = 1, perPage = 10, search = '') => {
  const response = await axios.get(`${API_URL}/transactions`, { params: { month, page, perPage, search } });
  return response.data;
};

export const getStatistics = async (month) => {
  const response = await axios.get(`${API_URL}/statistics`, { params: { month } });
  return response.data;
};

export const getPriceRangeData = async (month) => {
  const response = await axios.get(`${API_URL}/price-range`, { params: { month } });
  return response.data;
};

export const getCategoryData = async (month) => {
  const response = await axios.get(`${API_URL}/category`, { params: { month } });
  return response.data;
};
