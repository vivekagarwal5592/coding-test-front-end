import axios from "axios";

export const getStockData = () => axios.get('http://localhost:8080/api/stock')
