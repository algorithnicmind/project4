import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Automatically attach token for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Authentication APIs
export const registerUser = (userData) => API.post("/api/auth/register", userData);
export const loginUser = (userData) => API.post("/api/auth/login", userData);

// Expense APIs
export const fetchExpenses = () => API.get("/api/expenses");
export const addExpense = (expenseData) => API.post("/api/expenses", expenseData);
export const deleteExpense = (id) => API.delete(`/api/expenses/${id}`);

export default API;
