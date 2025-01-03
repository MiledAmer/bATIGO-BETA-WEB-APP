
import apiClient from "@/api/apiClient"; 

export const fetchmainoeuvre = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/main-oeuvre?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addmainoeuvre = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/main-oeuvre", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatemainoeuvre = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/main-oeuvre/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletemainoeuvre = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/main-oeuvre/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};