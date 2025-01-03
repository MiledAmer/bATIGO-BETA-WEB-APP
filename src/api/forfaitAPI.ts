
import apiClient from "@/api/apiClient"; 

export const fetchforfait = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/forfait?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addforfait = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/forfait", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateforfait = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/forfait/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteforfait = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/forfait/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};