
import apiClient from "@/api/apiClient"; 

// export const fetchchauffage_au_bois = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/chauffage_au_bois?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addchauffage_au_bois = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/chauffage_au_bois", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatechauffage_au_bois = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/chauffage_au_bois/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletechauffage_au_bois = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/chauffage_au_bois/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};