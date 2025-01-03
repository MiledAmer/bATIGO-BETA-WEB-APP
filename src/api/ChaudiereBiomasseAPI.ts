
import apiClient from "@/api/apiClient"; 

// export const fetchchaudiere_biomasse = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/chaudiere_biomasse?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addchaudiere_biomasse = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/chaudiere_biomasse", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatechaudiere_biomasse = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/chaudiere_biomasse/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletechaudiere_biomasse = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/chaudiere_biomasse/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};