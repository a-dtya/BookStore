import axios from "../config/axiosConfig";
const USER_URL = "orders/user/";


export const getAllOrders = async (userid) => {
  try {
    const result = await  axios.get(USER_URL + userid , {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
        },
    })
    console.log('result', result.data);
    // console.log('result', result.data.items);
    return result.data;
  } catch (error) {
    console.log('error in getAllOrder service -> ', error)
  }
}
