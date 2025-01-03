
import apiClient from "@/api/apiClient"; 

// export const fetchsystemeChauffages = async (currentPage: number, per_page: number, search: string) => {
//     try {
   
//       const response = await apiClient.get(`/systeme-chauffages?page=${currentPage}&per_page=${per_page}`);
//       return response.data.data; 
//     } catch (err: any) {
    
//       throw new Error(err.response?.data?.message || "Failed to fetch clients");
//     }
//   };

  export const addsystemeChauffages = async (clientData: any) => {
    try {
  
      const response = await apiClient.post("/systeme-chauffages", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updatesystemeChauffages = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/systeme-chauffages/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deletesystemeChauffages = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/systeme-chauffages/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};