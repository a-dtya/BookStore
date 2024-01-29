import axios from "../config/axiosConfig";

export const getCategories = async () => {
  try {
    const result = await axios.get(`/categories`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getCategories service -> ', error)
  }
}