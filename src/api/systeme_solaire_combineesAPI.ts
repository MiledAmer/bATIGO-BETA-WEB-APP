
import apiClient from "@/api/apiClient"; 

// export const fetchsysteme_solaire_combinees = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/systeme_solaire_combinees?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addsysteme_solaire_combinees = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/systeme_solaire_combinees", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatesysteme_solaire_combinees = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/systeme_solaire_combinees/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletesysteme_solaire_combinees = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/systeme_solaire_combinees/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};