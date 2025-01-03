
import apiClient from "@/api/apiClient"; 

export const fetchClients = async (currentPage: number, per_page: number,search:any) => {
    try {
   
      const response = await apiClient.get(`/clients?page=${currentPage}&per_page=${per_page}&search=${search}`);
      return response.data.data; 
    } catch (err: any) {
    
      throw new Error(err.response?.data?.message || "Failed to fetch clients");
    }
  };

  export const addClient = async (clientData: any) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}"); 
      
      if (clientData.type === "type.particulier") {  
        const {
          ape,
          naf,
          forme_juridique,
          company_phone_number,
          company_phone_iso_code,
          ...updatedClientData
        } = clientData; 
  
        clientData = updatedClientData;
      }
      if (user?.entreprise?.id) {
        clientData.entreprise_id = user.entreprise.id;
      } else {
        throw new Error("Entreprise ID is missing in user data");
      }
  
      const response = await apiClient.post("/clients", clientData);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Failed to add client");
    }
  };
export const updateClient = async (clientId: string, clientData: any) => {
  try {
    const response = await apiClient.put(`/clients/${clientId}`, clientData);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to update client");
  }
};


export const deleteClient = async (clientId: string) => {
  try {
    const response = await apiClient.delete(`/clients/${clientId}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to delete client");
  }
};
