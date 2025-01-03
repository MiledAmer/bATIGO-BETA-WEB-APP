
import apiClient from "@/api/apiClient"; 

// export const fetchisolation_combles_toiture = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/isolation_combles_toiture?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addisolation_combles_toiture = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/isolation_combles_toiture", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateisolation_combles_toiture = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/isolation_combles_toiture/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteisolation_combles_toiture = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/isolation_combles_toiture/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};