
import apiClient from "@/api/apiClient"; 

// export const fetchchauffe_eau_thermodynamiques = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/chauffe_eau_thermodynamiques?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addchauffe_eau_thermodynamiques = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/chauffe_eau_thermodynamiques", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatechauffe_eau_thermodynamiques = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/chauffe_eau_thermodynamiques/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletechauffe_eau_thermodynamiques = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/chauffe_eau_thermodynamiques/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};