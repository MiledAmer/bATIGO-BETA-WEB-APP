
import apiClient from "@/api/apiClient"; 

export const fetchproduits = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/produits?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addproduits = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/produits", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateproduits = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/produits/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteproduits = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/produits/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};