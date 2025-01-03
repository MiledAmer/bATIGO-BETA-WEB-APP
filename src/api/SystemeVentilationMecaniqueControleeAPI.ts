
import apiClient from "@/api/apiClient"; 

// export const fetchventillation_mecanique_controlee = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/ventillation_mecanique_controlee?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addventillation_mecanique_controlee = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/ventillation_mecanique_controlee", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateventillation_mecanique_controlee = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/ventillation_mecanique_controlee/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteventillation_mecanique_controlee = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/ventillation_mecanique_controlee/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};