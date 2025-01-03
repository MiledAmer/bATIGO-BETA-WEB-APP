
import apiClient from "@/api/apiClient"; 

// export const fetchlogements = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/logements?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addlogements = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/logements", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatelogements = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/logements/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletelogements = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/logements/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};