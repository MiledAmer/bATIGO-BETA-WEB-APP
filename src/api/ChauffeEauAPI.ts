
import apiClient from "@/api/apiClient"; 

// export const fetchchauffeEau = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/chauffe-eau?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addchauffeEau = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/chauffe-eau", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatechauffeEau = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/chauffe-eau/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletechauffeEau = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/chauffe-eau/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};