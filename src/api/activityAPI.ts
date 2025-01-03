
import apiClient from "@/api/apiClient"; 

export const fetchactivity = async (currentPage: number, per_page: number, search: string) => {
    try {
   
      const response = await apiClient.get(`/activity?page=${currentPage}&per_page=${per_page}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addactivity = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/activity", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateactivity = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/activity/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteactivity = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/activity/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
