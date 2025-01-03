
import apiClient from "@/api/apiClient"; 

// export const fetchpompe_chaleur_air_air = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/pompe_chaleur_air_air?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addpompe_chaleur_air_air = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/pompe_chaleur_air_air", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatepompe_chaleur_air_air = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/pompe_chaleur_air_air/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletepompe_chaleur_air_air = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/pompe_chaleur_air_air/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};