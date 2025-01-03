
import apiClient from "@/api/apiClient"; 

// export const fetchfenetre_vitrage_complet = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/fenetre_vitrage_complet?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addfenetre_vitrage_complet = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/fenetre_vitrage_complet", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatefenetre_vitrage_complet = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/fenetre_vitrage_complet/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletefenetre_vitrage_complet = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/fenetre_vitrage_complet/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};