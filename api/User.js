// User.js
import axios from 'axios';

export const SignupUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:8000/api/UserAccounts/create-account", formData);
    return response.formData;
  } catch (error) {
    console.error("Axios Error:", error);
    throw error;
  }
};
export const LoginUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:8000/api/UserAccounts/Log-in", formData);
    return response.data;
  } catch (error) {
    console.error("Axios Error:", error);
    throw error;
  }
};