
import apiClient from "@/api/apiClient"; 

export const fetchDevis = async (currentPage: number, per_page: number) => {
    try {
   
      const response = await apiClient.get(`/devis?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addDevis = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/devis", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateDevis = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/devis/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteDevis = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/devis/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
