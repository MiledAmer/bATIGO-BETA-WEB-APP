
import apiClient from "@/api/apiClient"; 

export const fetchcertificat_rge = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/certificat_rge?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addcertificat_rge = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/certificat_rge", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatecertificat_rge = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/certificat_rge/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletecertificat_rge = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/certificat_rge/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
