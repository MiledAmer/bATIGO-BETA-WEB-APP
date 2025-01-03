
import apiClient from "@/api/apiClient"; 

// export const fetchsysteme_regulation_horaire = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/systeme_regulation_horaire?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addsysteme_regulation_horaire = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/systeme_regulation_horaire", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatesysteme_regulation_horaire = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/systeme_regulation_horaire/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletesysteme_regulation_horaire = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/systeme_regulation_horaire/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};