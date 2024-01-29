import axios from "../config/axiosConfig";

export const getBooks = async () => {
  try {
    const result = await axios.get(`/books`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}