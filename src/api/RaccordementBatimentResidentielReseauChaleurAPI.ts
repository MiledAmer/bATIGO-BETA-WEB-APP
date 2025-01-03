
import apiClient from "@/api/apiClient"; 

// export const fetchraccordement_reseau_chaleur = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/raccordement_reseau_chaleur?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addraccordement_reseau_chaleur = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/raccordement_reseau_chaleur", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateraccordement_reseau_chaleur = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/raccordement_reseau_chaleur/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteraccordement_reseau_chaleur = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/raccordement_reseau_chaleur/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};