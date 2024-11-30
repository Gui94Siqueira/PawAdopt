import api from "@/services/api"; 

export const getUser = async (
  id: number,
  setData: React.Dispatch<React.SetStateAction<any | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const response = await api.get(`/pet/${id}`);
    console.log("Resposta da API:", response); 
    setData(response?.data); 
    setLoading(false);
  } catch (e) {
    console.error("Erro ao buscar dados:", e); 
    setError(true);
    setLoading(false);
  }
};
