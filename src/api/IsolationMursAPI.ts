
import apiClient from "@/api/apiClient"; 

// export const fetchisolation_murs = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/isolation_murs?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addisolation_murs = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/isolation_murs", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateisolation_murs = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/isolation_murs/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteisolation_murs = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/isolation_murs/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};