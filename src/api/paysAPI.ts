
import axios from "axios";
export const fetchPays = async () => {
    try {
   
      const response = await axios.get(`https://restcountries.com/v2/all`);
      return response.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };