
import apiClient from "@/api/apiClient"; 

export const fetchSousTraitants = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/sous-traitants?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addSousTraitants = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/sous-traitants", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateSousTraitants = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/sous-traitants/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteSousTraitants = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/sous-traitants/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
