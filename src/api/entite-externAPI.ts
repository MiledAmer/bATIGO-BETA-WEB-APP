
import apiClient from "@/api/apiClient"; 

export const fetchEntitesExternes = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/entites-externes?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addEntitesExternes = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/entites-externes", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatEentitesExternes = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/entites-externes/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteEntitesExternes = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/entites-externes/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
