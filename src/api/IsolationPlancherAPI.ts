
import apiClient from "@/api/apiClient"; 

// export const fetchisolation_plancher = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/isolation_plancher?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addisolation_plancher = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/isolation_plancher", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateisolation_plancher = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/isolation_plancher/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteisolation_plancher = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/isolation_plancher/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};